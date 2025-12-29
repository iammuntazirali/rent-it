import { testimonialsData } from '../data';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        What Our Users Say
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Join thousands of satisfied renters and owners
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonialsData.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            {/* Rating */}
                            <div className="flex space-x-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-400" />
                                ))}
                            </div>

                            {/* Feedback */}
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                "{testimonial.feedback}"
                            </p>

                            {/* User Info */}
                            <div className="flex items-center space-x-3 pt-4 border-t border-gray-200">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-2xl">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.city}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
