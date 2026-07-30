import FeatureCard from "../common/FeatureCard";

function Features() {

    return (

        <section className="py-24 bg-gray-50">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">

                    <h2 className="text-4xl font-bold">

                        Everything You Need

                    </h2>

                    <p className="text-gray-600 mt-4">

                        Powerful AI tools for creators,
                        students and professionals.

                    </p>

                </div>

                <div className="grid md:grid-cols-3 gap-8">

                    <FeatureCard
                        icon="📝"
                        title="Article Generator"
                        description="Generate long professional articles in seconds."
                    />

                    <FeatureCard
                        icon="🎯"
                        title="Title Generator"
                        description="Generate engaging SEO-friendly titles instantly."
                    />

                    <FeatureCard
                        icon="📄"
                        title="Resume Review"
                        description="Get AI-powered resume analysis and suggestions."
                    />

                </div>

            </div>

        </section>

    );

}

export default Features;