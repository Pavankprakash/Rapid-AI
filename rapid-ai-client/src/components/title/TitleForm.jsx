import { useState } from "react";
import useApi from "../../hooks/useApi";

function TitleForm({ setTitles, setLoading, loading }) {
    const { authPost } = useApi();
    const [topic, setTopic] = useState("")

    async function handleGenerate() {
        if (!topic.trim()) {
            alert("Please enter a topic.");
            return;
        }
        try {
            setLoading(true);
            const response =
                await authPost("/ai/titles", {
                    topic,
                    tone: "Professional"
                });

            setTitles(response.data.titles);
        } catch (error) {
            console.error(error);
            setTitles("Something went wrong.");
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">

            <h2 className="text-2xl font-bold mb-6">
                Generate AI Titles
            </h2>

            <label className="block mb-2 font-medium">
                Topic
            </label>

            <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Example: Artificial Intelligence"
                className="w-full border rounded-xl px-4 py-3 mb-6 focus:ring-2 focus:ring-purple-500 outline-none"
            />

            <button
                onClick={handleGenerate}
                disabled={loading}
                className={`w-full py-3 rounded-xl font-semibold transition ${loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-purple-600 hover:bg-purple-700 text-white"
                    }`}
            >
                {loading ? "Generating..." : "Generate Titles"}
            </button>

        </div>
    );
}

export default TitleForm;