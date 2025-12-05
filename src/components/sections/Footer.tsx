import { Scale } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-8">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
              <Scale className="w-5 h-5 text-primary" />
            </div>
            <div>
              <span className="font-display font-semibold text-background">Dr. N. Vijayaraj</span>
              <p className="text-xs text-background/60 font-body">Advocate, High Court of Madras</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-background/80 font-body">
              Candidate for Member, Tamil Nadu & Puducherry Bar Council
            </p>
            <p className="text-xs text-background/50 font-body mt-1">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
