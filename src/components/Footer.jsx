import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { name: 'About Us', href: '#about' },
            { name: 'Careers', href: '#' },
            { name: 'Blog', href: '#' },
            { name: 'Press', href: '#' },
        ],
        support: [
            { name: 'Help Center', href: '#' },
            { name: 'Contact Us', href: '#' },
            { name: 'Safety', href: '#' },
            { name: 'Trust & Safety', href: '#' },
        ],
        legal: [
            { name: 'Terms of Service', href: '#' },
            { name: 'Privacy Policy', href: '#' },
            { name: 'Cookie Policy', href: '#' },
            { name: 'Disclaimer', href: '#' },
        ],
    };

    const socialLinks = [
        { Icon: FaFacebook, href: '#', label: 'Facebook' },
        { Icon: FaTwitter, href: '#', label: 'Twitter' },
        { Icon: FaInstagram, href: '#', label: 'Instagram' },
        { Icon: FaLinkedin, href: '#', label: 'LinkedIn' },
        { Icon: FaYoutube, href: '#', label: 'YouTube' },
    ];

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">R</span>
                            </div>
                            <span className="text-2xl font-bold text-white">RentIt</span>
                        </div>
                        <p className="text-gray-400 mb-6 max-w-sm">
                            Your trusted rental marketplace for rooms, bikes, cars, and more.
                            Find verified listings and book instantly with complete peace of mind.
                        </p>
                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {socialLinks.map(({ Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                                >
                                    <Icon className="text-lg" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="hover:text-primary-400 transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Support</h3>
                        <ul className="space-y-2">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="hover:text-primary-400 transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="hover:text-primary-400 transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-gray-400">
                            © {currentYear} RentIt. All rights reserved.
                        </p>
                        <p className="text-sm text-gray-400">
                            Made with ❤️ in India
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
