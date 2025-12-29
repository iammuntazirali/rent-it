# 🏠 RentIt - Modern Rental Marketplace Landing Page

> Rent anything, anytime — rooms, bikes, cars & more

A beautiful, responsive landing page built with React + Vite and Tailwind CSS v4 for RentIt, a rental marketplace startup.

![RentIt Landing Page](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🎨 **Modern Design** - Clean, premium UI inspired by leading SaaS platforms
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎭 **Smooth Animations** - Engaging hover effects and transitions
- 🧩 **Component-Based** - Clean, reusable React components
- 🎯 **SEO Optimized** - Proper meta tags and semantic HTML
- ♿ **Accessible** - WCAG-compliant structure and interactions

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Clone or navigate to the project
cd rentit

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the app running! 🎉

## 📦 Build & Deploy

### Production Build

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

### Deployment

**Vercel (Recommended)**
```bash
npm i -g vercel
vercel
```

**Netlify**
- Build command: `npm run build`
- Publish directory: `dist`

**GitHub Pages**
```bash
npm install -D gh-pages
npm run build && npx gh-pages -d dist
```

## 🏗️ Project Structure

```
rentit/
├── src/
│   ├── components/        # Reusable components
│   │   ├── Navbar.jsx     # Fixed navigation with scroll effect
│   │   └── Footer.jsx     # Comprehensive footer
│   ├── sections/          # Page sections
│   │   ├── Hero.jsx       # Hero with gradient & search
│   │   ├── Stats.jsx      # Trust metrics
│   │   ├── Categories.jsx # Rental categories
│   │   ├── HowItWorks.jsx # 3-step process
│   │   ├── WhyRentIt.jsx  # Benefits showcase
│   │   ├── Testimonials.jsx # User reviews
│   │   ├── FAQ.jsx        # Accordion FAQs
│   │   └── CTA.jsx        # Final call-to-action
│   ├── data/
│   │   └── index.js       # Dummy data (replace with API)
│   ├── App.jsx            # Main app component
│   └── index.css          # Global styles + Tailwind config
├── index.html             # HTML template
└── package.json           # Dependencies
```

## 🎨 Tech Stack

- **React 18** - UI library
- **Vite 7.3** - Build tool
- **Tailwind CSS v4** - Utility-first CSS
- **React Icons** - Icon library
- **Google Fonts (Inter)** - Typography

## 📄 Page Sections

1. **Hero** - Compelling headline with search bar and CTAs
2. **Stats** - Trust indicators (50k+ rentals, 10k+ listings, etc.)
3. **Categories** - 5 colorful category cards (Rooms, Bikes, Cars, Furniture, Gadgets)
4. **How It Works** - 3-step rental process
5. **Why RentIt** - Key benefits and features
6. **Testimonials** - User reviews with ratings
7. **FAQ** - Accordion-style frequently asked questions
8. **CTA** - Final conversion section
9. **Footer** - Links, social media, legal info

## 🎯 Key Features Implemented

- ✅ Navbar with scroll effect (transparent → white)
- ✅ Mobile hamburger menu
- ✅ FAQ accordion with smooth animations
- ✅ Hover effects on all cards and buttons
- ✅ Responsive grid layouts
- ✅ Smooth scroll behavior
- ✅ Custom color palette (Emerald green primary)
- ✅ Modern typography (Inter font)

## 🔧 Configuration

### Tailwind CSS v4

This project uses Tailwind CSS v4 with CSS-based configuration. The theme is defined in `src/index.css`:

```css
@theme {
  --color-primary-600: #16a34a;
  /* ... more colors ... */
}
```

### Customizing Data

Edit `src/data/index.js` to update:
- Stats numbers
- Categories
- Testimonials
- FAQ questions
- Benefits

## 🌈 Color Palette

- **Primary**: Emerald Green (`#16a34a`)
- **Categories**:
  - Rooms: Blue
  - Bikes: Emerald
  - Cars: Purple
  - Furniture: Orange
  - Gadgets: Pink

## 🤝 Contributing

Feel free to customize this landing page for your needs:

1. Update dummy data in `src/data/index.js`
2. Modify colors in `src/index.css` theme section
3. Add new sections in `src/sections/`
4. Connect to your backend API

## 📝 License

This project is open source and available for commercial use.

## 🙏 Acknowledgments

- Design inspiration from modern SaaS landing pages
- Icons from React Icons library
- Font from Google Fonts (Inter)

---

**Built with ❤️ for RentIt** | [Live Demo](http://localhost:5173)
