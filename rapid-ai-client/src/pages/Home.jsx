import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import HowItWorks from "../components/home/HowItWorks";
import Pricing from "../components/home/Pricing";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import Footer from "../components/layout/Footer";

function Home() {
    return (
        <>
            <Hero />
            <Features />
            <HowItWorks />
            <Pricing />
            <Testimonials />
            <FAQ />
        </>
    );
}

export default Home;