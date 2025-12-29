import { stepsData } from '../data';

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        How It Works
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Rent anything in just 3 simple steps
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {stepsData.map((step, index) => (
                        <div key={step.id} className="relative">
                            {/* Connector Line (hidden on mobile) */}
                            {index < stepsData.length - 1 && (
                                <div className="hidden md:block absolute top-16 left-full w-full h-1 bg-gradient-to-r from-primary-200 to-primary-100 -translate-y-1/2 z-0"></div>
                            )}

                            {/* Step Card */}
                            <div className="relative z-10 text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                                {/* Icon */}
                                <div className="text-7xl mb-6">{step.icon}</div>

                                {/* Step Number */}
                                <div className="inline-block px-4 py-2 bg-primary-600 text-white font-bold rounded-full mb-4">
                                    Step {step.id}
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
