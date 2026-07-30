function TitleResult({ titles, loading }) {

    return (

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">

            <h2 className="text-2xl font-bold mb-6">
                Generated Titles
            </h2>

            <div className="border rounded-xl bg-gray-50 min-h-[400px] p-6">

                {loading ? (

                    <div className="space-y-4 animate-pulse">

                        <div className="h-5 bg-gray-300 rounded"></div>
                        <div className="h-5 bg-gray-300 rounded"></div>
                        <div className="h-5 bg-gray-300 rounded"></div>
                        <div className="h-5 bg-gray-300 rounded"></div>
                        <div className="h-5 bg-gray-300 rounded"></div>
                    </div>
                ) : titles ? (
                    <pre className="whitespace-pre-wrap leading-8 text-gray-700">
                        {titles}
                    </pre>
                ) : (
                    <div className="flex flex-col justify-center items-center h-[350px] text-center">
                        <div className="text-5xl mb-4">💡</div>
                        <h3 className="text-2xl font-bold">
                            Generate Catchy Titles
                        </h3>
                        <p className="text-gray-500 mt-3">
                            Enter a topic and Rapid AI will generate
                            SEO-friendly titles for you.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TitleResult;