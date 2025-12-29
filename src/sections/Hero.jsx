import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-white animate-fade-in">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                            Rent Anything in{' '}
                            <span className="text-primary-200">Minutes</span> with RentIt
                        </h1>
                        <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
                            Rooms, bikes, cars & more — verified listings, instant booking
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <a
                                href="#categories"
                                className="px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-all transform hover:scale-105 shadow-xl text-center"
                            >
                                Browse Rentals
                            </a>
                            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-700 transition-all transform hover:scale-105 text-center">
                                List Your Item
                            </button>
                        </div>

                        {/* Quick Search Bar */}
                        <div className="bg-white rounded-xl p-2 shadow-2xl max-w-2xl">
                            <div className="flex flex-col sm:flex-row gap-2">
                                <div className="flex items-center flex-1 px-4 py-2 bg-gray-50 rounded-lg">
                                    <FaSearch className="text-gray-400 mr-3" />
                                    <input
                                        type="text"
                                        placeholder="What are you looking for?"
                                        className="bg-transparent border-none outline-none text-gray-700 w-full placeholder-gray-400"
                                    />
                                </div>
                                <div className="flex items-center flex-1 px-4 py-2 bg-gray-50 rounded-lg">
                                    <FaMapMarkerAlt className="text-gray-400 mr-3" />
                                    <input
                                        type="text"
                                        placeholder="Location"
                                        className="bg-transparent border-none outline-none text-gray-700 w-full placeholder-gray-400"
                                    />
                                </div>
                                <button className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Mock Phone UI */}
                    <div className="hidden lg:block animate-slide-up">
                        <div className="relative">
                            {/* Phone Frame */}
                            <div className="bg-white rounded-3xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <div className="space-y-4">
                                    {/* Mock Rental Cards */}
                                    {[
                                        { title: 'Modern Apartment', price: '₹25,000/mo', type: 'Room', image: '🏠' },
                                        { title: 'Royal Enfield', price: '₹800/day', type: 'Bike', image: '🏍️' },
                                        { title: 'Honda City', price: '₹2,500/day', type: 'Car', image: '🚗' },
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-200 hover:shadow-lg transition-all cursor-pointer"
                                        >
                                            <div className="flex items-center space-x-4">
                                                <div className="text-5xl">{item.image}</div>
                                                <div className="flex-1">
                                                    <div className="flex items-center space-x-2 mb-1">
                                                        <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded">
                                                            {item.type}
                                                        </span>
                                                    </div>
                                                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                                                    <p className="text-primary-600 font-bold">{item.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -top-4 -right-4 bg-primary-600 text-white px-6 py-3 rounded-full shadow-xl animate-bounce">
                                <p className="text-sm font-semibold">10,000+ Listings 🎉</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Wave Separator */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
                    <path
                        fill="#ffffff"
                        fillOpacity="1"
                        d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;
