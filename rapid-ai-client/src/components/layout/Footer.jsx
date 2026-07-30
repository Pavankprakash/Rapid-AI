function Footer() {

    return (

        <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
                <div>
                    <h2 className="text-3xl font-bold">
                        Rapid AI
                    </h2>

                    <p className="text-gray-400 mt-4">
                        AI-powered content generation platform
                        for creators and professionals.
                    </p>
                </div>
                <div>
                    <h3 className="font-bold mb-4">
                        Product
                    </h3>
                    <ul className="space-y-2 text-gray-400">

                        <li>Articles</li>
                        <li>Titles</li>
                        <li>Resume Review</li>

                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-4">
                        Company
                    </h3>

                    <ul className="space-y-2 text-gray-400">

                        <li>About</li>
                        <li>Pricing</li>
                        <li>Contact</li>

                    </ul>

                </div>
                <div>

                    <h3 className="font-bold mb-4">
                        Follow Us
                    </h3>

                    <ul className="space-y-2 text-gray-400">
                        <li>GitHub</li>
                        <li>LinkedIn</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500">
                © 2026 Rapid AI. All rights reserved.

            </div>
        </footer>
    );
}

export default Footer;