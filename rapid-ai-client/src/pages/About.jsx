function About() {
    return (
        <div className="max-w-6xl mx-auto space-y-20">

            {/* Hero */}
            <section className="text-center py-10">
                <h1 className="text-5xl font-bold mb-6">
                    About
                    <span className="text-purple-600"> Rapid AI</span>
                </h1>

                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-8">
                    Rapid AI is an AI-powered productivity platform built to
                    help students, professionals, developers, marketers,
                    creators, and job seekers generate high-quality content,
                    review resumes, and improve productivity using modern
                    artificial intelligence.
                </p>
            </section>

            {/* Mission */}
            <section className="grid md:grid-cols-2 gap-12 items-center">

                <div>
                    <h2 className="text-3xl font-bold mb-5">
                        Our Mission
                    </h2>

                    <p className="text-gray-600 leading-8">
                        Our mission is to make AI simple, fast, and accessible.
                        Instead of switching between multiple AI tools,
                        Rapid AI combines everything into one clean platform.
                    </p>

                    <p className="text-gray-600 mt-6 leading-8">
                        Whether you're writing an article, creating SEO titles,
                        or improving your resume, Rapid AI helps you finish
                        your work faster.
                    </p>
                </div>

                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12 text-white">
                    <h3 className="text-3xl font-bold">
                        AI That Saves Time
                    </h3>

                    <p className="mt-6 leading-8">
                        Generate quality content in seconds while maintaining
                        professional standards and improving productivity.
                    </p>
                </div>

            </section>

            {/* Features */}
            <section>

                <h2 className="text-3xl font-bold text-center mb-12">
                    What Rapid AI Offers
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    <div className="bg-white rounded-2xl shadow p-8">
                        <div className="text-5xl mb-4">📝</div>
                        <h3 className="font-bold text-xl mb-3">
                            AI Article Writer
                        </h3>
                        <p className="text-gray-600">
                            Generate complete articles with customizable tone,
                            length, and writing style.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow p-8">
                        <div className="text-5xl mb-4">🎯</div>
                        <h3 className="font-bold text-xl mb-3">
                            SEO Title Generator
                        </h3>
                        <p className="text-gray-600">
                            Create engaging and search-engine-friendly titles
                            in seconds.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow p-8">
                        <div className="text-5xl mb-4">📄</div>
                        <h3 className="font-bold text-xl mb-3">
                            Resume Review
                        </h3>
                        <p className="text-gray-600">
                            Receive AI-powered resume feedback with suggestions
                            for improvement.
                        </p>
                    </div>

                </div>

            </section>

            {/* Tech Stack */}
            <section className="bg-white rounded-3xl shadow p-10">

                <h2 className="text-3xl font-bold text-center mb-10">
                    Built With Modern Technologies
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                    {[
                        "React",
                        "Express",
                        "PostgreSQL",
                        "Clerk",
                        "Groq AI",
                        "Tailwind CSS",
                        "Node.js",
                        "REST APIs"
                    ].map((tech) => (

                        <div
                            key={tech}
                            className="border rounded-xl py-6 text-center font-semibold hover:bg-purple-50 transition"
                        >
                            {tech}
                        </div>

                    ))}

                </div>

            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl text-white p-12 text-center">

                <h2 className="text-4xl font-bold">
                    Ready to Supercharge Your Productivity?
                </h2>

                <p className="mt-6 text-lg max-w-2xl mx-auto">
                    Join Rapid AI today and start creating smarter,
                    faster, and better with artificial intelligence.
                </p>

                <button className="mt-8 bg-white text-purple-700 px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
                    Get Started
                </button>

            </section>

        </div>
    );
}

export default About;