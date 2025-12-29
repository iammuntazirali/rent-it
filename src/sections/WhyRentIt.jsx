import { benefitsData } from '../data';

const WhyRentIt = () => {
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Why Choose RentIt?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Experience the future of rentals with our trusted platform
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefitsData.map((benefit) => {
                        const Icon = benefit.icon;
                        return (
                            <div
                                key={benefit.id}
                                className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300 group"
                            >
                                {/* Icon */}
                                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Icon className="text-white text-2xl" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyRentIt;
