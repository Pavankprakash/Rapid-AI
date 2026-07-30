import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-10 text-white">

            <div className="flex justify-between items-center">

                <div>

                    <p className="text-purple-100 text-lg">
                        👋 Welcome Back
                    </p>

                    <h1 className="text-5xl font-bold mt-3">
                        Ready to build with AI?
                    </h1>

                    <p className="mt-5 max-w-2xl text-purple-100 leading-8">

                        Create articles, SEO titles, resume reviews and
                        much more using Rapid AI.

                    </p>

                    <div className="flex gap-4 mt-8">

                        <Link
                            to="/article"
                            className="bg-white text-purple-700 px-6 py-3 rounded-xl font-semibold"
                        >
                            Generate Article
                        </Link>

                        <Link
                            to="/titles"
                            className="border border-white px-6 py-3 rounded-xl"
                        >
                            Explore Tools
                        </Link>

                    </div>

                </div>

                <div className="hidden lg:block">

                    <div className="bg-white/10 rounded-3xl p-8 backdrop-blur">

                        <h3 className="text-xl font-semibold">
                            This Month
                        </h3>

                        <p className="mt-4 text-4xl font-bold">
                            18
                        </p>

                        <p className="mt-2 text-purple-100">
                            AI Generations
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;