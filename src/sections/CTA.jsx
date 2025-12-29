const CTA = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    Start Renting Smarter Today
                </h2>

                {/* Subtext */}
                <p className="text-xl md:text-2xl text-primary-100 mb-10 max-w-2xl mx-auto">
                    Join thousands of users who trust RentIt for all their rental needs
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="px-10 py-4 bg-white text-primary-700 font-bold text-lg rounded-lg hover:bg-primary-50 transition-all transform hover:scale-105 shadow-2xl">
                        Get Started
                    </button>
                    <button className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-primary-700 transition-all transform hover:scale-105">
                        Browse Rentals
                    </button>
                </div>

                {/* Trust Indicators */}
                <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/90">
                    <div className="flex items-center space-x-2">
                        <span className="text-2xl">✓</span>
                        <span className="font-medium">Verified Listings</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-2xl">✓</span>
                        <span className="font-medium">Secure Payments</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-2xl">✓</span>
                        <span className="font-medium">24/7 Support</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
