import PricingCard from "../common/PricingCard";
import FeatureCard from "../common/FeatureCard";

function Pricing() {

    const plans = [

        {
            name: "Free",
            price: "₹0/month",
            button: "Get Started",
            popular: false,

            features: [
                "10 Articles",
                "20 Titles",
                "5 Resume Reviews",
                "History"
            ]
        },

        {
            name: "Premium",
            price: "₹499/month",
            button: "Upgrade",

            popular: true,

            features: [
                "Unlimited Articles",
                "Unlimited Titles",
                "Unlimited Resume Reviews",
                "Priority Support",
                "Faster AI Responses"
            ]
        }

    ];

    return (

        <section className="py-24 bg-gray-100">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">

                    <h2 className="text-4xl font-bold">
                        Simple Pricing
                    </h2>

                    <p className="mt-4 text-gray-600">
                        Choose the perfect plan for your needs.
                    </p>

                </div>

                <div className="grid md:grid-cols-2 gap-10">

                    {plans.map((plan) => (

                        <PricingCard
                            key={plan.name}
                            plan={plan}
                        />

                    ))}

                </div>

            </div>

        </section>

    );
}

export default Pricing;