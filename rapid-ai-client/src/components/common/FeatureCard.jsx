function FeatureCard({ icon, title, description }){
    return(
        <div className="bg-white rounded-2x1 shadow-md p-8 hover: shadow-xl transition duration-300">

            <div className="test 5xl mb-5">
                { icon }
            </div>

            <h3 className="text-2xl font-bold mb-3">
                { title }
            </h3>

            <p className="text-gray-600">
                { description }
            </p>
        </div>
    );
}

export default FeatureCard;