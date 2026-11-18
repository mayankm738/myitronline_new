import Hero from '../components/home/Hero';
import ServicesSection from '../components/home/ServicesSection';
import TaxCalculator from '../components/TaxCalculator/TaxCalculator';
import HowItWorks from '../components/home/HowItWorks';
import WhyUs from '../components/home/WhyUs';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';
import FinalCTA from '../components/home/FinalCTA';
import Contact from '../pages/Contact';

export default function HomePage() {
return (
<> <Hero /> <ServicesSection /> <TaxCalculator /> <HowItWorks /> <WhyUs /><Contact/> <Testimonials /><FinalCTA /> <FAQ /> 
</>
);
}
