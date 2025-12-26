import { Button } from "@/components/ui/button";
import { Scale, Award, BookOpen } from "lucide-react";
import drVijayarajPhoto from "@/assets/dr-vijayaraj.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image - Chennai High Court */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop")`,
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-navy/85" />

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold" />

      <div className="container relative z-10 flex items-center justify-center min-h-screen py-20 px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full max-w-6xl">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="animate-fade-up opacity-0 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 text-gold-light text-sm font-body">
                <Scale className="w-4 h-4" />
                Bar Council Election 2026
              </span>
            </div>

            {/* Name & Title */}
            <h1 className="animate-fade-up opacity-0 animation-delay-100">
              <span className="block text-gold-light text-lg md:text-xl font-body font-light tracking-widest uppercase mb-2">
                Advocate
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight">
                Dr. N. Vijayaraj
              </span>
              <span className="block text-gold text-lg md:text-xl font-body font-medium mt-4">
                M.A., M.Com, M.B.A., M.L., M.Sc., D.L.L., D.I.R.P.M., Ph.D-Law
              </span>
            </h1>

            {/* Tagline */}
            <p className="animate-fade-up opacity-0 animation-delay-200 text-primary-foreground/80 text-lg md:text-xl font-body max-w-xl mt-8 leading-relaxed mx-auto lg:mx-0">
              28 Years of Dedicated Legal Service | Candidate for Member, Tamil Nadu & Puducherry Bar Council
            </p>

            {/* Stats */}
            <div className="animate-fade-up opacity-0 animation-delay-300 grid grid-cols-3 gap-6 mt-10 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-2">
                  <Scale className="w-5 h-5 text-gold" />
                </div>
                <div className="text-2xl md:text-3xl font-display font-bold text-primary-foreground">28+</div>
                <div className="text-xs text-primary-foreground/60 font-body">Years Practice</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-2">
                  <BookOpen className="w-5 h-5 text-gold" />
                </div>
                <div className="text-2xl md:text-3xl font-display font-bold text-primary-foreground">6</div>
                <div className="text-xs text-primary-foreground/60 font-body">Law Books</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-2">
                  <Award className="w-5 h-5 text-gold" />
                </div>
                <div className="text-2xl md:text-3xl font-display font-bold text-primary-foreground">7</div>
                <div className="text-xs text-primary-foreground/60 font-body">Degrees</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="animate-fade-up opacity-0 animation-delay-400 flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
              <Button variant="hero" size="xl" asChild>
                <a href="#contact">Support My Candidacy</a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#journey">My Journey</a>
              </Button>
            </div>
          </div>

          <div className="animate-fade-up opacity-0 animation-delay-200 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border-2 border-gold/30 rounded-lg transform rotate-3" />
              <div className="absolute -inset-4 border-2 border-gold/20 rounded-lg transform -rotate-3" />
              
              {/* Photo container */}
              <div className="relative w-64 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[480px] rounded-lg border border-gold/30 overflow-hidden">
                <img 
                  src={drVijayarajPhoto} 
                  alt="Dr. N. Vijayaraj - Advocate" 
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* NVR Law Associates Card */}
              <div className="absolute -bottom-6 -left-6 bg-navy/95 backdrop-blur-sm border border-gold/30 rounded-lg p-4 shadow-xl">
                <h3 className="text-gold font-display font-bold text-lg mb-2">NVR LAW ASSOCIATES</h3>
                <ul className="text-primary-foreground/90 text-xs font-body space-y-1">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                    ADVOCATES
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                    SOLICITORS
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                    ATTORNEYS
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                    NOTARY PUBLIC
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                    COMMISSIONER OF OATHS
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                    MEDIATORS
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                    ARBITRATORS
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-gold/50 flex justify-center pt-2">
            <div className="w-1 h-2 bg-gold rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
