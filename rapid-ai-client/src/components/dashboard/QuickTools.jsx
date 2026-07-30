import {
    HiDocumentText,
    HiSparkles,
    HiClipboardDocumentCheck,
    HiArrowRight
} from "react-icons/hi2";

const tools = [
    {
        title: "Generate Article",
        description: "Create professional articles with AI.",
        icon: HiDocumentText,
        color: "bg-blue-100 text-blue-600",
    },
    {
        title: "Generate Titles",
        description: "Generate SEO-friendly blog titles.",
        icon: HiSparkles,
        color: "bg-yellow-100 text-yellow-600",
    },
    {
        title: "Review Resume",
        description: "Analyze resumes using AI.",
        icon: HiClipboardDocumentCheck,
        color: "bg-purple-100 text-purple-600",
    },
];

function QuickTools() {
    return (
        <section>

            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">
                    Quick Actions
                </h2>

                <p className="text-gray-500">
                    Start using AI instantly
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">

                {tools.map((tool) => {

                    const Icon = tool.icon;

                    return (

                        <div
                            key={tool.title}
                            className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                        >

                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${tool.color}`}>

                                <Icon className="text-2xl" />

                            </div>

                            <h3 className="text-xl font-semibold mt-5">
                                {tool.title}
                            </h3>

                            <p className="text-gray-500 mt-2">
                                {tool.description}
                            </p>

                            <div className="flex items-center gap-2 mt-6 text-purple-600 font-medium">

                                Start

                                <HiArrowRight />

                            </div>

                        </div>

                    );

                })}

            </div>

        </section>
    );
}

export default QuickTools;