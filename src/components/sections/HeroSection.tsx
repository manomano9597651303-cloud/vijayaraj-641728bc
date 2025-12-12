import { Button } from "@/components/ui/button";
import { Scale, Award, BookOpen } from "lucide-react";
import drVijayarajPhoto from "@/assets/dr-vijayaraj.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold" />

      <div className="container relative z-10 flex flex-col items-center justify-center min-h-screen py-20 px-4">
        {/* Badge */}
        <div className="animate-fade-up opacity-0 mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 text-gold-light text-sm font-body">
            <Scale className="w-4 h-4" />
            Bar Council Election 2026
          </span>
        </div>

        {/* Profile Photo */}
        <div className="animate-fade-up opacity-0 animation-delay-100 mb-8">
          <div className="relative">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-gold blur-md opacity-50" />
            {/* Photo container */}
            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-4 border-gold/50 overflow-hidden shadow-elegant">
              <img 
                src={drVijayarajPhoto} 
                alt="Dr. N. Vijayaraj - Advocate" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Name & Title */}
        <h1 className="animate-fade-up opacity-0 animation-delay-200 text-center">
          <span className="block text-gold-light text-lg md:text-xl font-body font-light tracking-widest uppercase mb-2">
            Advocate
          </span>
          <span className="block text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight">
            Dr. N. Vijayaraj
          </span>
          <span className="block text-gold text-lg md:text-2xl font-body font-medium mt-4">
            Ph.D., ML, M.Com, MBA, M.Sc, MA
          </span>
        </h1>

        {/* Tagline */}
        <p className="animate-fade-up opacity-0 animation-delay-300 text-center text-primary-foreground/80 text-lg md:text-xl font-body max-w-2xl mt-8 leading-relaxed">
          28 Years of Dedicated Legal Service | Candidate for Member, Tamil Nadu & Puducherry Bar Council
        </p>

        {/* Stats */}
        <div className="animate-fade-up opacity-0 animation-delay-300 grid grid-cols-3 gap-6 md:gap-12 mt-12">
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Scale className="w-6 h-6 text-gold" />
            </div>
            <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">28+</div>
            <div className="text-sm text-primary-foreground/60 font-body">Years Practice</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <BookOpen className="w-6 h-6 text-gold" />
            </div>
            <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">6</div>
            <div className="text-sm text-primary-foreground/60 font-body">Law Books</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Award className="w-6 h-6 text-gold" />
            </div>
            <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">7</div>
            <div className="text-sm text-primary-foreground/60 font-body">Degrees</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="animate-fade-up opacity-0 animation-delay-400 flex flex-col sm:flex-row gap-4 mt-12">
          <Button variant="hero" size="xl" asChild>
            <a href="#contact">Support My Candidacy</a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="#journey">My Journey</a>
          </Button>
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
