import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Categories', href: '#categories' },
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'About', href: '#about' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white shadow-md py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="#home" className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">R</span>
                            </div>
                            <span className={`text-2xl font-bold transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'
                                }`}>
                                RentIt
                            </span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`font-medium transition-colors hover:text-primary-600 ${isScrolled ? 'text-gray-700' : 'text-white'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className={`px-4 py-2 font-medium rounded-lg transition-all ${isScrolled
                            ? 'text-gray-700 hover:text-primary-600'
                            : 'text-white hover:text-primary-200'
                            }`}>
                            Sign In
                        </button>
                        <button className="px-6 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'
                            }`}
                    >
                        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4">
                        <div className="flex flex-col space-y-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`px-4 py-2 font-medium rounded-lg transition-colors ${isScrolled
                                        ? 'text-gray-700 hover:bg-gray-100'
                                        : 'text-white hover:bg-white/10'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex flex-col space-y-2 pt-3 border-t border-gray-200">
                                <button className="px-4 py-2 font-medium rounded-lg text-gray-700 hover:bg-gray-100 transition-all">
                                    Sign In
                                </button>
                                <button className="px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-all">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
