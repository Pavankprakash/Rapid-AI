function TestimonialCard({ testimonial }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition duration-300">

            <div className="text-yellow-400 text-xl mb-4">
                ⭐⭐⭐⭐⭐
            </div>

            <p className="text-gray-600 italic">
                "{testimonial.review}"
            </p>

            <div className="mt-6">

                <h3 className="font-bold">
                    {testimonial.name}
                </h3>

                <p className="text-gray-500 text-sm">
                    {testimonial.role}
                </p>

            </div>

        </div>
    );
}

export default TestimonialCard;