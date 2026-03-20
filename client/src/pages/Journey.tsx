import { motion } from "framer-motion";
import { Flag, TrendingUp, Sun } from "lucide-react";

export default function Journey() {
  const milestones = [
    {
      icon: Flag,
      title: "The Beginning",
      date: "August 2025",
      content:
        "Urban Poona Impact Club began as a simple idea among a group of passionate students who wanted to make a difference in their community. Seeing the social and environmental challenges around them, they believed that young people should not just be aware of these issues but actively work to address them. What started as small discussions soon turned into meaningful initiatives, collaborations with social organisations, and community-driven projects.",
      image:
        "/images/events/community-cleanup-drive/img1.jpeg",
    },
    {
      icon: TrendingUp,
      title: "The Growth Phase",
      date: "Late 2025",
      content:
        "As Urban Poona Impact Club began organizing more initiatives and building partnerships with social organizations, the movement quickly started gaining momentum. What began as a small student-led effort gradually grew into a larger community of dedicated members working together to create meaningful impact.",
      image:
        "/images/events/basketball-fundraiser-league/img5.jpeg",
    },
    {
      icon: Sun,
      title: "Where We Are Today",
      date: "Present",
      content:
        "Today, Urban Poona Impact Club has grown into a dedicated youth-led initiative committed to creating meaningful social impact. With an expanding team of passionate members and strong collaborations with social organizations, the club continues to organize community projects, awareness initiatives, and fundraising efforts that address real challenges in society.",
      image:
        "/images/events/visit-to-resq-charitable-trust/img6.jpeg",
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-display font-bold mb-4">Our Journey</h1>
          <p className="text-xl text-muted-foreground">
            From a simple idea to a growing movement.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-24">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Image side */}
                <div className="w-full md:w-1/2 relative">
                  <div className="absolute top-1/2 -translate-y-1/2 right-[-2.5rem] w-10 h-10 bg-accent rounded-full border-4 border-background z-10 hidden md:flex items-center justify-center translate-x-1/2">
                    {index % 2 === 0 && (
                      <milestone.icon
                        size={18}
                        className="text-accent-foreground"
                      />
                    )}
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 left-[-2.5rem] w-10 h-10 bg-accent rounded-full border-4 border-background z-10 hidden md:flex items-center justify-center -translate-x-1/2">
                    {index % 2 === 1 && (
                      <milestone.icon
                        size={18}
                        className="text-accent-foreground"
                      />
                    )}
                  </div>

                  <div className="rounded-3xl overflow-hidden shadow-xl shadow-primary/10 aspect-video">
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content side */}
                <div
                  className={`w-full md:w-1/2 flex flex-col justify-center ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}
                >
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary font-bold rounded-full w-fit mb-4 text-sm">
                    {milestone.date}
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-4">
                    {milestone.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {milestone.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
