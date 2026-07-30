function ToolCard({
    icon,
    title,
    description,
    onClick
}) {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="text-5xl">
                {icon}
            </div>
            <h2 className="text-2xl font-bold mt-5">
                {title}
            </h2>

            <p className="text-gray-600 mt-3">
                {description}
            </p>

            <button
            onClick={onClick}
            className="mt-6 bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700"
            >
                Open Tool
            </button>
        </div>
    );
}
export default ToolCard;