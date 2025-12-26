import { Phone, Mail, MapPin, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-gold" />

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 text-gold-light text-sm font-body mb-6">
              <Scale className="w-4 h-4" />
              Seek Your Support
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Your <span className="text-gold">First Preferential Vote</span>
            </h2>
            <p className="text-primary-foreground/80 font-body text-lg max-w-2xl mx-auto">
              I sincerely seek your support, trust, and your valuable first preferential vote to enable me to serve the advocates' fraternity with commitment, integrity, and efficiency.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="tel:+919884442080"
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-gold/20 hover:bg-primary-foreground/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold text-primary-foreground mb-1">Phone</h3>
              <p className="text-gold-light font-body">+91 98844 42080</p>
            </a>

            <a
              href="mailto:vijaycourt@gmail.com"
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-gold/20 hover:bg-primary-foreground/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold text-primary-foreground mb-1">Email</h3>
              <p className="text-gold-light font-body text-sm">vijaycourt@gmail.com</p>
            </a>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-gold/20">
              <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold text-primary-foreground mb-1">Office</h3>
              <p className="text-gold-light font-body text-sm">High Court of Madras, Chennai</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <a href="tel:+919884442080">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="mailto:vijaycourt@gmail.com">
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </Button>
          </div>

          {/* Enrolment Badge */}
          <div className="mt-16 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary-foreground/10 border border-gold/20">
            <Scale className="w-5 h-5 text-gold" />
            <span className="text-primary-foreground font-body">
              Bar Council Enrolment No: <strong className="text-gold">Ms.820/98</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
