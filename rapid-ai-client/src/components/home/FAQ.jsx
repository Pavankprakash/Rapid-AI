import { useState } from "react";
function FAQ(){
    const faqs =[
        {
            id: 1,
            question: "Is Rapid AI free?",
            answer: "Yes. The free plan includes monthly usage limits."
        },
        {
            id: 2,
            question: "How many articles can I generate?",
            answer:"Free users can generate 10 articles each month."
        },
        {
            id: 3,
            question: "Is my generation history saved?",
            answer:"Yes. Every generation is stored in your dashboard."
        },
        {
            id: 4,
            question: "Can I upgrade later?",
            answer:"Yes. You can upgrade to Premium anytime."
        }
    ];
    const [openId, setOpenId] = useState(null);
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-gray-600">
                        Everything you need to know.
                    </p>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq) => (
                        <div
                            key={faq.id}
                            className="bg-white rounded-xl shadow"
                        >
                            <button
                                onClick={() =>
                                    setOpenId(
                                        openId === faq.id
                                            ? null
                                            : faq.id
                                    )
                                }
                                className="w-full flex justify-between items-center p-6 text-left"
                            >
                                <span className="font-semibold">
                                    {faq.question}
                                </span>
                                <span>
                                    {openId === faq.id
                                        ? " "
                                        : "+"}
                                </span>
                            </button>
                            {openId === faq.id && (
                                <div className="px-6 pb-6 text-gray-600">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default FAQ;
