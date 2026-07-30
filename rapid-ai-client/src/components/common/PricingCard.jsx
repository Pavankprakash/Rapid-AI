function PricingCard({ plan }) {
    return (
        <div
            className={`rounded-2xl p-8 shadow-lg border transition hover:scale-105 ${
                plan.popular
                    ? "border-purple-600"
                    : "border-gray-200"
            }`}
        >
            {plan.popular && (
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                    Most Popular
                </span>
            )}

            <h2 className="text-3xl font-bold mt-4">
                {plan.name}
            </h2>

            <p className="text-4xl font-bold mt-4">
                {plan.price}
            </p>

            <ul className="mt-8 space-y-3">
                {plan.features.map((feature, index) => (
                    <li key={index}>
                        ✅ {feature}
                    </li>
                ))}
            </ul>

            <button
                className={`w-full mt-8 py-3 rounded-lg ${
                    plan.popular
                        ? "bg-purple-600 text-white"
                        : "bg-gray-200"
                }`}
            >
                {plan.button}
            </button>

        </div>
    );
}

export default PricingCard;