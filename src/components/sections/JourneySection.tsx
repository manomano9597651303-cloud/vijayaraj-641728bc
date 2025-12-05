import { MapPin, GraduationCap, Briefcase, Scale } from "lucide-react";

const milestones = [
  {
    year: "1993",
    title: "Law Studies Begin",
    description: "Joined Dr. Ambedkar Government Law College, Chennai, driven by a deep passion for law after initially pursuing engineering at CIT, Coimbatore.",
    icon: GraduationCap,
  },
  {
    year: "1998",
    title: "Bar Council Enrolment",
    description: "Enrolled in the Bar Council with Enrolment No. Ms.820/98, beginning the professional legal journey.",
    icon: Scale,
  },
  {
    year: "2000",
    title: "Independent Practice",
    description: "Established independent practice, starting from Alandur and Saidapet Magistrate Courts, specialising in criminal law.",
    icon: Briefcase,
  },
  {
    year: "Present",
    title: "Senior Advocate",
    description: "Actively practising before the Hon'ble High Court of Madras, City Civil Courts, and Sessions Courts across Tamil Nadu.",
    icon: MapPin,
  },
];

const JourneySection = () => {
  return (
    <section id="journey" className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/20 text-secondary font-body text-sm font-medium mb-4">
            My Story
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            A Journey of <span className="text-gradient-gold">Dedication</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">
            From a first-generation lawyer from an agricultural family in Tanjavur to a senior advocate at the High Court of Madras
          </p>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <p className="text-foreground/90 font-body text-lg leading-relaxed">
              I hail from an agricultural family in Tanjavur District, and I am the first-generation lawyer from my family to enter this noble profession. I completed my schooling in Kumbakonam before pursuing my legal education.
            </p>
            <p className="text-foreground/90 font-body text-lg leading-relaxed">
              My legal journey began under the esteemed mentorship of <strong>Thiru R. Margabandhu</strong> (Former MP & Former Chairman, TN & Puducherry Bar Council) and <strong>Thiru R. Duraisamy</strong>. While practising, I continued to advance my academic credentials.
            </p>
            <p className="text-foreground/90 font-body text-lg leading-relaxed">
              I successfully cleared the <strong>Direct District Judge Examination (2011)</strong> and have been serving as Honorary Visiting Faculty at private law colleges, the Police Academy, and conducting training sessions for Judicial Officers.
            </p>
          </div>
          
          {/* Quote Card */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <div className="text-6xl text-gold font-display leading-none mb-4">"</div>
              <blockquote className="text-xl md:text-2xl font-display text-foreground italic leading-relaxed">
                My commitment to the profession and to the betterment of our fraternity has always remained steadfast and uncompromising.
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                  <Scale className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-display font-semibold text-foreground">Dr. N. Vijayaraj</div>
                  <div className="text-sm text-muted-foreground font-body">Senior Advocate</div>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 top-4 left-4 right-4 bottom-4 bg-secondary/20 rounded-2xl" />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ml-20 md:ml-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <div className="bg-card rounded-xl p-6 shadow-elegant border border-border hover:shadow-card transition-shadow duration-300">
                    <span className="inline-block text-gold font-display font-bold text-xl mb-2">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground font-body">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Icon */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
                  <milestone.icon className="w-4 h-4 text-primary" />
                </div>

                {/* Empty space for alignment */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
