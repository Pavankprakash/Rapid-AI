import { useState } from "react";
import ArticleForm from "../components/article/ArticleForm";
import ArticleResult from "../components/article/ArticleResult";

function Article() {
    const [article, setArticle] = useState("");
    const [loading, setLoading] = useState(false);
    return (
        <>
            <div className="mb-8">

                <h1 className="text-4xl font-bold">
                    Article Generator
                </h1>

                <p className="text-gray-600 mt-2">
                    Generate high-quality AI articles in seconds.
                </p>

            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

                <ArticleForm 
                    setArticle={setArticle}
                    setLoading={setLoading}
                    loading={loading}
                
                />

                <ArticleResult 
                    article={article}
                    loading= {loading} />

            </div>
        </>
    );
}
export default Article;