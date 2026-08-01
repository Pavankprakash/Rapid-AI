import { HiArrowTrendingUp } from "react-icons/hi2";

function StatsCard({
    title, used, limit, color}) {

    const percentage = (used / limit) * 100;

    return (

        <div className="bg-white rounded-2xl p-6 shadow-sm border">

            <h3 className="text-gray-500 text-sm">
                {title}
            </h3>
            <h2 className={`text-3xl font-bold mt-2 ${color}`}>
                {used}
                <span className="text-gray-400 text-xl">
                    /{limit}
                </span>
            </h2>
            <div className="w-full bg-gray-200 rounded-full h-3 mt-5">
                <div
                    className="bg-purple-600 h-3 rounded-full transition-all duration-700"
                    style={{
                        width: `${percentage}%`
                    }}
                />

            </div>
            <p className="text-sm text-gray-500 mt-3">
                {Math.round(percentage)}% Used
            </p>
        </div>
    );
}

export default StatsCard;
