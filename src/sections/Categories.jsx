import { categoriesData } from '../data';

const Categories = () => {
    return (
        <section id="categories" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        What Would You Like to Rent?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Explore our diverse categories and find exactly what you need
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoriesData.map((category) => {
                        const Icon = category.icon;
                        return (
                            <div
                                key={category.id}
                                className={`${category.color} ${category.hoverColor} rounded-2xl p-8 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-2xl group`}
                            >
                                <Icon className="text-5xl mb-4 transition-transform group-hover:scale-110" />
                                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                                <p className="opacity-90">{category.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Categories;
