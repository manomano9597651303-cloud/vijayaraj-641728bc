import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import JourneySection from "@/components/sections/JourneySection";
import QualificationsSection from "@/components/sections/QualificationsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import VisionSection from "@/components/sections/VisionSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Dr. N. Vijayaraj - Senior Advocate | Tamil Nadu Bar Council Candidate</title>
        <meta
          name="description"
          content="Dr. N. Vijayaraj, Senior Advocate with 28 years of experience at the High Court of Madras. Candidate for Member, Tamil Nadu & Puducherry Bar Council Election."
        />
        <meta name="keywords" content="Dr. N. Vijayaraj, Advocate, High Court Madras, Bar Council, Tamil Nadu, Legal Services, Criminal Law" />
        <link rel="canonical" href="https://drvijayaraj.in" />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <HeroSection />
        <JourneySection />
        <QualificationsSection />
        <AchievementsSection />
        <VisionSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
