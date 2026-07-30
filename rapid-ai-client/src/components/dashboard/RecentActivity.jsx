import { useEffect, useState } from "react";
import api from "../../services/api";
import { useDbUser } from "../../context/AuthContext";
import useApi from "../../hooks/useApi";

function RecentActivity() {
    const { dbUser } = useDbUser();
    const [activity, setActivity] = useState([]);
    const { authGet } = useApi();

    useEffect(() => {
        if (!dbUser) return;
        async function loadActivity() {

            try {

                const response = await authGet(`/dashboard/activity/${dbUser.id}`);
                setActivity(response.data.activity);

            } catch (error) {
                console.error(error);
            }
        }

        loadActivity();

    }, [dbUser]);

    function getIcon(type) {

        switch(type){

            case "article_generation":
                return "📝";

            case "title_generation":
                return "🎯";

            case "resume_review":
                return "📄";

            default:
                return "✨";
        }
    }

    function getLabel(type){

        switch(type){

            case "article_generation":
                return "Article";

            case "title_generation":
                return "Title";

            case "resume_review":
                return "Resume Review";

            default:
                return "AI";
        }
    }

    return (

        <div className="bg-white rounded-2xl shadow-sm border p-6">

            <h2 className="text-xl font-bold mb-6">
                Recent Activity
            </h2>

            {activity.length===0 ? (

                <p className="text-gray-500">
                    No activity yet.
                </p>

            ) : (
                <div className="space-y-4">
                    {activity.map((item,index)=>(
                        <div
                            key={index}
                            className="flex justify-between items-start border-b last:border-none pb-4"
                        >
                            <div className="flex gap-4">
                                <div className="text-2xl">
                                    {getIcon(item.feature_type)}
                                </div>
                                <div>
                                    <p className="font-semibold">
                                        {getLabel(item.feature_type)}
                                    </p>
                                    <p className="text-gray-500 text-sm">
                                        {item.prompt}
                                    </p>
                                </div>
                            </div>
                            <span className="text-xs text-gray-400">
                                {new Date(item.created_at).toLocaleDateString()}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default RecentActivity;