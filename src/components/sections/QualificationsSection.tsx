import { GraduationCap, Award, BookOpen, Medal } from "lucide-react";

const degrees = [
  { name: "MA (History)", institution: "Annamalai University" },
  { name: "M.Com", institution: "Alagappa University" },
  { name: "MBA (Labour Laws)", institution: "NIBM" },
  { name: "ML (Labour & Administrative Law)", institution: "Tamil Nadu Dr. Ambedkar Law University" },
  { name: "M.Sc (Applied Psychology)", institution: "Annamalai University" },
  { name: "DLL (Diploma in Labour Law)", institution: "" },
  { name: "DIRPM (Diploma in Industrial Relations & Personnel Management)", institution: "" },
  { name: "Ph.D. in Law", institution: "Bharath University, Chennai" },
  { name: "BL", institution: "Dr. Ambedkar Govt. Law College, Chennai" },
];

const appointments = [
  "Notary Public (Government of India)",
  "Oath Commissioner",
  "Special Public Prosecutor – Bomb Blast Cases & POTA",
  "High Court Trained Mediator",
  "DLSA Chennai 'B' Panel Advocate",
  "MHAA Executive Committee Member (3 Terms)",
];

const QualificationsSection = () => {
  return (
    <section id="qualifications" className="py-20 md:py-32 bg-muted/50">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/20 text-secondary font-body text-sm font-medium mb-4">
            Credentials
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Education & <span className="text-gradient-gold">Appointments</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">
            A lifetime of learning and service to the legal profession
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-foreground">Academic Degrees</h3>
                <p className="text-muted-foreground font-body">7 Post-Graduate Qualifications</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {degrees.map((degree, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors duration-300"
                >
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Medal className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground">{degree.name}</h4>
                    <p className="text-sm text-muted-foreground font-body">{degree.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Appointments */}
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-foreground">Official Appointments</h3>
                <p className="text-muted-foreground font-body">Government & Institutional Roles</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {appointments.map((appointment, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors duration-300"
                >
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-4 h-4 text-secondary" />
                  </div>
                  <h4 className="font-body font-medium text-foreground">{appointment}</h4>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationsSection;
