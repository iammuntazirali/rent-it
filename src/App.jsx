import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import Categories from './sections/Categories';
import HowItWorks from './sections/HowItWorks';
import WhyRentIt from './sections/WhyRentIt';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import CTA from './sections/CTA';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Categories />
        <HowItWorks />
        <WhyRentIt />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
