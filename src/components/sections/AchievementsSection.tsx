import { BookOpen, Tv, Users, Heart, FileText, Gavel } from "lucide-react";

const achievements = [
  {
    icon: BookOpen,
    title: "Published Author",
    description: "Authored 6 law books and numerous articles in reputed legal magazines, earning recognition from distinguished associations.",
  },
  {
    icon: Tv,
    title: "Media Presence",
    description: "Frequently participates in television discussions on legal issues and matters concerning the legal fraternity.",
  },
  {
    icon: Users,
    title: "Community Service",
    description: "Conducts free coaching classes for Judicial Service & APP aspirants through Manithaneyam Academy and other institutions.",
  },
  {
    icon: FileText,
    title: "Public Interest Litigations",
    description: "Filed several PILs serving both the general public and the legal fraternity.",
  },
  {
    icon: Gavel,
    title: "High-Profile Cases",
    description: "Conducted hundreds of sensational cases including Bomb Blast Cases and POTA matters as Special Public Prosecutor.",
  },
  {
    icon: Heart,
    title: "Advocate Welfare",
    description: "Participated in all programmes for the welfare and rights of advocates, providing 24×7 support to fellow advocates.",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/20 text-secondary font-body text-sm font-medium mb-4">
            Track Record
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Notable <span className="text-gradient-gold">Achievements</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">
            A career marked by excellence, service, and unwavering dedication
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-6 shadow-elegant border border-border hover:shadow-card hover:border-gold/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:bg-gradient-gold transition-all duration-300">
                <achievement.icon className="w-7 h-7 text-secondary group-hover:text-primary transition-colors duration-300" />
              </div>

              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                {achievement.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {achievement.description}
              </p>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-gold rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Highlight Banner */}
        <div className="mt-16 bg-gradient-hero rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-4">
            Cleared Direct District Judge Examination
          </h3>
          <p className="text-primary-foreground/80 font-body text-lg max-w-2xl mx-auto">
            Successfully cleared the prestigious Direct District Judge Examination in 2011, demonstrating exceptional legal knowledge and capability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
