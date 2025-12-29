import { statsData } from '../data';

const Stats = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {statsData.map((stat) => (
                        <div
                            key={stat.id}
                            className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                        >
                            <h3 className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                                {stat.value}
                            </h3>
                            <p className="text-gray-600 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
