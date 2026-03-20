import { motion } from "framer-motion";
import { Crown } from "lucide-react";
var founders = [
    {
        name: "Ishaan Jagtap",
        role: "Founder",
        image: "/images/team/ishaan-jagtap.jpg",
        bio: "I'm Ishaan Jagtap, founder of the Urban Poona Impact Club. As an artist and avid tennis player, I bring creativity, discipline, and passion to every initiative. I aim to lead impactful projects that inspire community action, foster social awareness, and drive positive change in Pune. Through this club, I'm committed to turning ideas into meaningful, grassroots-level transformation.",
    },
    {
        name: "Arhan Shaikh",
        role: "Co-Founder & Chief Financial Officer",
        image: "/images/team/arhan-shaikh.jpg",
        bio: "I'm Arhan Shaikh, Co-founder and Chief Financial Officer of the Urban Poona Impact Club. I'm pursuing Commerce in 11th grade, an aspiring economist, and a passionate footballer. I'm dedicated to driving positive change by leading youth-led initiatives in education, sports, and sustainability, building a future where small actions create big impact.",
    },
    {
        name: "Aroush Muglikar",
        role: "Co-Founder",
        image: "/images/team/aroush-mouglikar.jpg",
        bio: "I, Aroush Muglikar, Co-founder of the Urban Poona Impact Club and a current 11th-grade science student, am committed to driving meaningful change in my community. I pledge to lead with purpose, inspire youth participation, and contribute actively to sustainable initiatives that create lasting social and environmental impact.",
    },
    {
        name: "Ishaan Suryawanshi",
        role: "Co-Founder",
        image: "/images/team/ishaan-suryawanshi.jpg",
        bio: "I'm Ishaan Suryawanshi, co-founder of the Urban Poona Impact Club. I'm in 11th grade pursuing science and an avid basketball player. I'm committed to driving positive change through impactful initiatives that empower youth and build a more conscious, compassionate community.",
    },
    {
        name: "Shaurya Hadgal",
        role: "Co-Founder",
        image: "/images/team/shaurya-hadgal.jpg",
        bio: "I'm Shaurya Hadgal, co-founder of the Urban Poona Impact Club. I'm in 11th grade pursuing science and an avid tennis player. I'm dedicated to creating meaningful change through youth-run initiatives that foster awareness, responsibility, and a stronger, more connected community.",
    },
    {
        name: "Tej Punde",
        role: "President & Co-Founder",
        image: "/images/team/tej-punde.jpg",
        bio: "I'm Tej Punde, President and Co-Founder of the Urban Poona Impact Club. I'm an athlete at heart and badminton is my passion, along with being a student at BMCC. The purpose of giving back and helping the community is what led me to join and help build this club.",
    },
];
export default function Founders() {
    return (<div className="pt-24 pb-20 bg-background">
      {/* Hero banner */}
      <div className="bg-gradient-to-br from-primary to-primary/80 text-white py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-accent border border-accent/30 font-medium mb-6">
              <Crown size={16}/>
              The Visionaries Behind UPIC
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
              Founders &amp; Leadership
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Urban Poona Impact Club is led by a group of passionate young
              leaders committed to creating meaningful change in Pune through
              community initiatives, environmental action, and youth-driven
              social impact.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Profile cards */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          {founders.map(function (person, idx) { return (<motion.div key={idx} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08, duration: 0.5 }} className="flex flex-col sm:flex-row gap-6 bg-card border border-border/50 rounded-2xl p-6 sm:p-8 shadow-md shadow-primary/5">
              {/* Square image */}
              <div className="shrink-0 mx-auto sm:mx-0">
                <img src={person.image} alt={person.name} className="w-44 h-44 sm:w-52 sm:h-52 rounded-xl object-cover object-center shadow-md"/>
              </div>

              {/* Text content */}
              <div className="flex flex-col justify-center text-center sm:text-left">
                <span className="inline-block self-center sm:self-start px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-semibold mb-2">
                  {person.role}
                </span>
                <h2 className="text-2xl font-display font-bold mb-3 text-foreground">
                  {person.name}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {person.bio}
                </p>
              </div>
            </motion.div>); })}
        </div>
      </div>
    </div>);
}
