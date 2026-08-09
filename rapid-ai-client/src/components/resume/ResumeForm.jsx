import { useState } from "react";
import useApi from "../../hooks/useApi";

function ResumeForm({ setReview, setLoading, loading }) {

    const [file, setFile] = useState(null);
    const { authPost } = useApi();

    async function handleReview() {
        if (!file) {
            alert("Please choose a PDF.");
            return;
        }
        console.log(file);
        try {
            setLoading(true);
            const formData = new FormData();

            formData.append("resume", file);
            const response = await authPost("/ai/resume", formData);
            setReview(response.data.review);
        } catch (error) {
            console.error(error);
            setReview("Something went wrong.");
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">

            <h2 className="text-2xl font-bold mb-6">
                Resume Review
            </h2>

            <input
                type="file"
                accept=".pdf"
                onChange={(e) => {
                    console.log(e.target.files);
                    setFile(e.target.files[0]);
                }}
            />

            <button
                onClick={handleReview}
                disabled={loading}
                className={`w-full mt-6 py-3 rounded-xl font-semibold transition ${loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-purple-600 hover:bg-purple-700 text-white"
                    }`}
            >
                {loading ? "Reviewing..." : "Review Resume"}
            </button>

        </div>
    );
}

export default ResumeForm;