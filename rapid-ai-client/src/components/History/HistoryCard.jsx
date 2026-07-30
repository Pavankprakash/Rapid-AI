function HistoryCard({ item }) {

    const featureNames = {
        article_generation: "Article Generator",
        title_generation: "Title Generator",
        resume_review: "Resume Review"
    };
    return (
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition">
            <div className="flex justify-between">
                <div>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                        {featureNames[item.feature_type]}
                    </span>
                </div>
                <p className="text-sm text-gray-400">
                    {new Date(item.created_at).toLocaleDateString()}
                </p>
            </div>
            <h3 className="font-semibold mt-5">
                Prompt
            </h3>
            <p className="text-gray-600 mt-2 line-clamp-3">
                {item.prompt}
            </p>
            <div className="mt-6 flex gap-3">
                <button className="px-4 py-2 rounded-lg bg-purple-600 text-white">
                    View
                </button>
                <button className="px-4 py-2 rounded-lg border">
                    Delete
                </button>
            </div>
        </div>
    );
}

export default HistoryCard;