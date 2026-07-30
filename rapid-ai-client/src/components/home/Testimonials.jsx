import TestimonialCard from "../common/TestimonialCard";

function Testimonials(){

    const testimonials = [

        {
            id: 1,
            name: "John Deo",
            role: "Content Writer",
            review:"Rapid AI helps me generate articles in minutes instead of hours."

        },

        {
            id: 2,
            name: "Sarah Smith",
            role: "Software Enginner",
            review: "The AI resume review gave me useful suggestions before interviews."

        },

        {
            id: 3,
            name: "David Lee",
            role: "Digital Marketer",
            review: "The title generator creates amazing SEO-friendly headlines."
        }
    ];
    
    return (

        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">

                    <h2 className="text-4xl font-bold">
                        Loved by Thousands of Users
                    </h2>

                    <p className="mt-4 text-gray-600">
                        Here's what our users say about Rapid AI.
                    </p>

                </div>

                <div className="grid md:grid-cols-3 gap-8">

                    {testimonials.map((testimonial) => (

                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                        />

                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
