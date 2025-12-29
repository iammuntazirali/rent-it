import { FaHome, FaBicycle, FaCar, FaCouch, FaLaptop, FaCheckCircle, FaDollarSign, FaBolt, FaShieldAlt, FaCreditCard } from 'react-icons/fa';

// Stats data
export const statsData = [
    {
        id: 1,
        value: '50,000+',
        label: 'Rentals Completed',
    },
    {
        id: 2,
        value: '10,000+',
        label: 'Verified Listings',
    },
    {
        id: 3,
        value: '100+',
        label: 'Cities',
    },
    {
        id: 4,
        value: '24/7',
        label: 'Support',
    },
];

// Categories data
export const categoriesData = [
    {
        id: 1,
        title: 'Rooms & Apartments',
        icon: FaHome,
        description: 'Find your perfect stay',
        color: 'bg-blue-100 text-blue-600',
        hoverColor: 'hover:bg-blue-600 hover:text-white',
    },
    {
        id: 2,
        title: 'Bikes',
        icon: FaBicycle,
        description: 'Ride around the city',
        color: 'bg-emerald-100 text-emerald-600',
        hoverColor: 'hover:bg-emerald-600 hover:text-white',
    },
    {
        id: 3,
        title: 'Cars',
        icon: FaCar,
        description: 'Drive your way',
        color: 'bg-purple-100 text-purple-600',
        hoverColor: 'hover:bg-purple-600 hover:text-white',
    },
    {
        id: 4,
        title: 'Furniture',
        icon: FaCouch,
        description: 'Furnish your space',
        color: 'bg-orange-100 text-orange-600',
        hoverColor: 'hover:bg-orange-600 hover:text-white',
    },
    {
        id: 5,
        title: 'Gadgets',
        icon: FaLaptop,
        description: 'Tech on demand',
        color: 'bg-pink-100 text-pink-600',
        hoverColor: 'hover:bg-pink-600 hover:text-white',
    },
];

// How it works data
export const stepsData = [
    {
        id: 1,
        title: 'Choose what you want to rent',
        description: 'Browse through our verified listings across multiple categories',
        icon: '🔍',
    },
    {
        id: 2,
        title: 'Pick date & location',
        description: 'Select your preferred dates and convenient pickup location',
        icon: '📅',
    },
    {
        id: 3,
        title: 'Book instantly & enjoy',
        description: 'Complete secure payment and start using your rental right away',
        icon: '✨',
    },
];

// Benefits data
export const benefitsData = [
    {
        id: 1,
        title: 'Verified Owners & Renters',
        description: 'Every user is verified to ensure trust and safety',
        icon: FaCheckCircle,
    },
    {
        id: 2,
        title: 'Transparent Pricing',
        description: 'Clear pricing with no surprises',
        icon: FaDollarSign,
    },
    {
        id: 3,
        title: 'Instant Booking',
        description: 'Book in seconds and get instant confirmation',
        icon: FaBolt,
    },
    {
        id: 4,
        title: 'No Hidden Charges',
        description: 'What you see is what you pay',
        icon: FaShieldAlt,
    },
    {
        id: 5,
        title: 'Secure Payments',
        description: 'Your transactions are protected and encrypted',
        icon: FaCreditCard,
    },
];

// Testimonials data
export const testimonialsData = [
    {
        id: 1,
        name: 'Priya Sharma',
        city: 'Mumbai',
        feedback: 'RentIt made renting a bike super easy. Clean UI and fast booking! Highly recommended for quick rentals.',
        avatar: '👩',
        rating: 5,
    },
    {
        id: 2,
        name: 'Rahul Verma',
        city: 'Bangalore',
        feedback: 'Found an amazing apartment in minutes. The verification process gives me peace of mind.',
        avatar: '👨',
        rating: 5,
    },
    {
        id: 3,
        name: 'Anjali Desai',
        city: 'Delhi',
        feedback: 'Transparent pricing and no hidden fees. Best rental platform I have used so far!',
        avatar: '👩‍💼',
        rating: 5,
    },
    {
        id: 4,
        name: 'Karthik Nair',
        city: 'Pune',
        feedback: 'Rented a car for my weekend trip. Smooth experience from booking to return. Love it!',
        avatar: '👨‍💻',
        rating: 5,
    },
];

// FAQ data
export const faqData = [
    {
        id: 1,
        question: 'What is RentIt?',
        answer: 'RentIt is a modern rental marketplace that connects people who want to rent items (rooms, bikes, cars, furniture, and more) with verified owners. We make renting safe, fast, and transparent.',
    },
    {
        id: 2,
        question: 'How do I rent an item?',
        answer: 'Simply browse our listings, select what you want to rent, choose your dates and location, and complete the secure payment. You will receive instant confirmation and pickup details.',
    },
    {
        id: 3,
        question: 'Is payment secure?',
        answer: 'Yes! All payments are processed through secure, encrypted channels. We use industry-standard security protocols to protect your financial information.',
    },
    {
        id: 4,
        question: 'Can I list my own items?',
        answer: 'Absolutely! You can list your rooms, vehicles, gadgets, or furniture on RentIt. After a quick verification process, your listing goes live and you can start earning.',
    },
    {
        id: 5,
        question: 'Which cities are available?',
        answer: 'RentIt operates in 100+ cities across India. We are constantly expanding to new locations. Check our app or website to see if we are available in your city.',
    },
];
