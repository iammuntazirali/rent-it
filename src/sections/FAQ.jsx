import { useState } from 'react';
import { faqData } from '../data';
import { FaChevronDown } from 'react-icons/fa';

const FAQ = () => {
    const [openId, setOpenId] = useState(null);

    const toggleFAQ = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-gray-600">
                        Everything you need to know about RentIt
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqData.map((faq) => (
                        <div
                            key={faq.id}
                            className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                        >
                            {/* Question */}
                            <button
                                onClick={() => toggleFAQ(faq.id)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-semibold text-gray-900 text-lg pr-4">
                                    {faq.question}
                                </span>
                                <FaChevronDown
                                    className={`text-primary-600 flex-shrink-0 transition-transform duration-300 ${openId === faq.id ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            {/* Answer */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openId === faq.id ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
