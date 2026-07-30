import { useState } from "react";
import ResumeForm from "../components/resume/ResumeForm";
import ResumeResult from "../components/resume/ResumeResult";

function Resume() {

    const [review, setReview] = useState("");
    const [loading, setLoading] = useState(false);

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

            <ResumeForm
                setReview={setReview}
                setLoading={setLoading}
                loading={loading}
            />

            <ResumeResult
                review={review}
                loading={loading}
            />

        </div>
    );
}

export default Resume;