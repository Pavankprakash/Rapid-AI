import { useAuth } from "@clerk/clerk-react";
import { useState } from "react";
import { useDbUser } from "../../context/AuthContext";
import useApi from "../../hooks/useApi";

function ArticleForm({ setArticle, setLoading, loading }) {
    const { dbUser } = useDbUser();
    const [topic, setTopic] = useState("");
    const [tone, setTone] = useState("Professional");
    const [length, setLength] = useState("500 Words");
    const [instructions, setInstructions] = useState("");
    const { authPost } = useApi();

    async function handleGenerate() {
        if (!topic.trim()) {
            alert("Please enter a topic.");
            return;
        }
        try {
            setLoading(true);
        
            const response = await authPost(
                "/ai/article",
                {
                    topic,
                    tone,
                    length,
                    instructions
                }
            );
            setArticle(response.data.article);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }

    }
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-bold mb-6">
                Generate Article
            </h2>
            {/* Topic */}
            <div className="mb-5">
                <label className="block mb-2 font-medium">
                    Topic
                </label>

                <input
                    type="text"
                    placeholder="Enter article topic..."
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
            </div>

            {/* Tone */}
            <div className="mb-5">
                <label className="block mb-2 font-medium">
                    Tone
                </label>

                <select
                    value={tone}
                    onChange={(e) => setTone(e.target.value)}
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                    <option>Professional</option>
                    <option>Friendly</option>
                    <option>Casual</option>
                    <option>Creative</option>
                </select>
            </div>

            {/* Length */}
            <div className="mb-5">
                <label className="block mb-2 font-medium">
                    Length
                </label>

                <select
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                    <option>500 Words</option>
                    <option>1000 Words</option>
                    <option>1500 Words</option>
                </select>
            </div>

            {/* Instructions */}
            <div className="mb-6">
                <label className="block mb-2 font-medium">
                    Additional Instructions
                </label>

                <textarea
                    rows="5"
                    placeholder="Write any extra instructions..."
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                    className="w-full border rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
            </div>

            <button
                onClick={handleGenerate}
                disabled={loading}
                className={`
                   w-full
                   py-3
                   rounded-xl
                   font-semibold
                   transition

                   ${loading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-purple-600 hover:bg-purple-700 text-white"
                    }
               `}
            >
                {loading
                    ? "Generating..."
                    : "Generate Article"}
            </button>
        </div>
    );
}


export default ArticleForm;