function ResumeResult({ review, loading }) {

    function handleCopy() {

        navigator.clipboard.writeText(review);

        alert("Review copied!");

    }

    function handleDownload() {

        const blob = new Blob(
            [review],
            {
                type: "text/plain"
            }
        );

        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");

        link.href = url;
        link.download = "resume-review.txt";

        link.click();

        URL.revokeObjectURL(url);

    }

    return (

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 h-full">

            <div className="flex justify-between items-center mb-6">

                <h2 className="text-2xl font-bold">
                    AI Resume Review
                </h2>

                <span className="text-sm text-gray-500">
                    Ready
                </span>

            </div>

            <div className="border rounded-xl bg-gray-50 min-h-[500px] p-6">

                {loading ? (

                    <div className="space-y-4 animate-pulse">

                        <div className="h-6 bg-gray-300 rounded w-1/2"></div>
                        <div className="h-4 bg-gray-300 rounded"></div>
                        <div className="h-4 bg-gray-300 rounded"></div>
                        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                        <div className="h-4 bg-gray-300 rounded"></div>
                        <div className="h-4 bg-gray-300 rounded w-3/4"></div>

                    </div>

                ) : review ? (

                    <pre className="whitespace-pre-wrap leading-8 text-gray-700">
                        {review}
                    </pre>

                ) : (

                    <div className="flex flex-col items-center justify-center min-h-[400px] text-center">

                        <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-6">

                            <span className="text-4xl">📄</span>

                        </div>

                        <h3 className="text-2xl font-bold">
                            Get Professional Feedback
                        </h3>

                        <p className="text-gray-500 mt-3 max-w-md leading-7">

                            Paste your resume on the left and click

                            <span className="font-semibold text-purple-600">
                                {" "}Review Resume
                            </span>

                            . AI will analyze your resume and provide suggestions.

                        </p>

                    </div>

                )}

            </div>

            {review && (

                <div className="flex gap-4 mt-6">

                    <button
                        onClick={handleCopy}
                        className="px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                    >
                        Copy
                    </button>

                    <button
                        onClick={handleDownload}
                        className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
                    >
                        Download
                    </button>
                </div>
            )}
        </div>
    );
}

export default ResumeResult;