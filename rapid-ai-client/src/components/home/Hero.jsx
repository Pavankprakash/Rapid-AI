import { Link } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/home/Hero";
import Footer from "../../components/layout/Footer";

function Home() {
    return (
        <section className="pt-8 pb-16 bg-gradient-to-br from-white via-purpule-50 to-indigo-100">
            <div className="max-w-7x1 mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div>
                    <span className="bg-purple-100-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                        🚀 AI Powered SaaS Platform
                    </span>
                    <h1 className="text-5x1 font-bold mt-6 leading-tight">
                        Generate Content
                        <span className="text-purple-600">
                            {" "}10x Faster
                        </span>
                    </h1>
                    <p className="mt-6 text-lg text-gray-600">
                        Rapid AI helps you creat professional
                        article, SEO titles and resume reviews
                        within seconds using Artificial Intelligence.
                    </p>
                    <div className="flex gap-4 mt-8">
                        <Link
                            to="/sign-up"
                            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700"
                        >
                            Start Free
                        </Link>
                        <Link
                            to="/dashboard"
                            className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50"
                        >
                            View Dashboard
                        </Link>
                    </div>
                </div>

                {/* Right COntent */}
                <div className="grid grid-cols-2 gap-6">

                    <div className="bg-white shadow-lg rounded-xl p-6">
                        <h3 className="font-bold">
                            📝 Articles
                        </h3>
                        <p className="Text-gray-500 mt-2">
                            AI generated articles
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-xl p-6">
                        <h3 className="font-bold">
                            🎯 Titles
                        </h3>
                        <p className="text-gray-500 mt-2">
                            SEO optimized titles
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-xl p-6">
                        <h3 className="font-bold">
                            📄 Resume
                        </h3>
                        <p className="text-gray-500 mt-2">
                            AI Resume Analysis
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-xl p-6">
                        <h3 className="font-bold">
                            📊 History
                        </h3>
                        <p className="text-gray-500 mt-2">
                            Saved generations
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;