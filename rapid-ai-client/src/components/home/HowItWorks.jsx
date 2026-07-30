function HowItWorks() {
    const steps = [
        {
            id: 1,
            title: "Enter Your Topic",
            description:
                "Provide a topic, keyword or paste your resume.",
            icon: "📝"
        },
        {
            id: 2,
            title: "AI Generates",
            description:
                "Rapid AI creates professional content within seconds.",
            icon: "⚡"
        },
        {
            id: 3,
            title: "Save & Manage",
            description:
                "Your history is stored so you can access it anytime.",
            icon: "📂"
        }
    ];
    return (

        <section className="py-24 bg-white">

            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center mb-16">

                    <h2 className="text-4xl font-bold">
                        How Rapid AI Works
                    </h2>

                    <p className="text-gray-600 mt-4">
                        Create AI content in three simple steps.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition"
                        >
                            <div className="text-5xl mb-6">
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">
                                {step.title}
                            </h3>
                            <p className="text-gray-600">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

}
export default HowItWorks;

