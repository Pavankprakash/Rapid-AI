import HistoryCard from "./HistoryCard";
function HistoryList({ history, loading }) {
    if (loading) {
        return (
            <p className="text-gray-500">
                Loading history...
            </p>
        );
    }
    if (history.length === 0) {
        return (
            <div className="bg-white rounded-2xl border p-10 text-center">
                <h2 className="text-2xl font-bold">
                    No History Yet
                </h2>
                <p className="text-gray-500 mt-3">
                    Start generating AI content to see it here.
                </p>
            </div>
        );
    }
    return (
        <div className="space-y-5">
            {history.map((item) => (
                <HistoryCard
                    key={item.id}
                    item={item}
                />
            ))}
        </div>
    );
}

export default HistoryList;