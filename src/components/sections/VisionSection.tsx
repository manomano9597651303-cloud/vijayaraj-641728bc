import { CheckCircle, Target, Lightbulb, Shield } from "lucide-react";

const promises = [
  "New ideas and innovative schemes for advocate welfare",
  "Practical initiatives addressing real professional needs",
  "Strengthening the professional community",
  "Upholding the dignity of the rule of law",
  "Result-oriented measures for the fraternity",
  "Faithful implementation of every promise made",
];

const VisionSection = () => {
  return (
    <section id="vision" className="py-20 md:py-32 bg-muted/50">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-secondary/20 text-secondary font-body text-sm font-medium mb-4">
              My Vision
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              A Pledge to <span className="text-gradient-gold">Serve</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
              I come forward with several new ideas, innovative schemes, and practical initiatives for the welfare and upliftment of the advocate fraternity. My focus is on creating meaningful, result-oriented measures that address the real needs of our profession.
            </p>

            {/* Promises List */}
            <div className="space-y-4">
              {promises.map((promise, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-card transition-colors duration-300"
                >
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="font-body text-foreground">{promise}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Values Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card rounded-2xl p-6 shadow-elegant border border-border hover:shadow-card transition-shadow duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-4 shadow-gold">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">Commitment</h3>
              <p className="text-muted-foreground font-body text-sm">
                Dedicated to serving the legal fraternity with unwavering focus
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-elegant border border-border hover:shadow-card transition-shadow duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-4 shadow-gold">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">Integrity</h3>
              <p className="text-muted-foreground font-body text-sm">
                Upholding the highest standards of professional ethics
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-elegant border border-border hover:shadow-card transition-shadow duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-4 shadow-gold">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">Innovation</h3>
              <p className="text-muted-foreground font-body text-sm">
                Fresh ideas for the betterment of our profession
              </p>
            </div>

            <div className="bg-gradient-hero rounded-2xl p-6 text-primary-foreground">
              <h3 className="text-4xl font-display font-bold mb-2">2018</h3>
              <p className="text-primary-foreground/80 font-body text-sm">
                Narrowly missed winning by a small margin. Now seeking your first preferential vote.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
