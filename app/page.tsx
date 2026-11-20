import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Principal from "@/components/Principal";
import Academics from "@/components/Academics";
import Why from "@/components/Why";
import DayInSchool from "@/components/DayInSchool";
import Facilities from "@/components/Facilities";
import Activities from "@/components/Activities";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import AdmissionProcess from "@/components/AdmissionProcess";
import Safety from "@/components/Safety";
import Admission from "@/components/Admission";
import Visit from "@/components/Visit";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <>
      <Header />
      <main id="home">
        <Hero />
        <Stats />
        <About />
        <Principal />
        <Academics />
        <Why />
        <DayInSchool />
        <Facilities />
        <Activities />
        <Events />
        <Gallery />
        <Testimonials />
        <AdmissionProcess />
        <Safety />
        <Admission />
        <Visit />
        <FAQ />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
