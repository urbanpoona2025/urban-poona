import { motion } from "framer-motion";
import { Users } from "lucide-react";
var teamMembers = [
    {
        name: "Tanmay Kotasthane",
        role: "Vice President",
        image: "/images/team/tanmay-kotasthane.jpg",
        bio: "Hi, I am Tanmay, Vice President of the Urban Poona Impact Club. I am a passionate runner and a science student who believes in giving back to the community and contributing to meaningful social initiatives.",
    },
    {
        name: "Raj Batra",
        role: "Treasurer",
        image: "/images/team/raj-batra.jpg",
        bio: "I'm Raj Batra, Treasurer of the Urban Poona Impact Club and a commerce student at Symbiosis. I am dedicated to managing resources efficiently and supporting impactful initiatives while promoting teamwork and positive change in our community.",
    },
    {
        name: "Sayuri Gharmalkar",
        role: "HR Head",
        image: "/images/team/sayuri-gharmalkar.jpg",
        bio: "My name is Sayuri and I am currently a Class 11 science student. I have a strong interest in sports, particularly basketball, and a deep passion for literature. I am committed to contributing positively to society and bringing meaningful change to the lives of others.",
    },
    {
        name: "Ranbir Singh",
        role: "Editor",
        image: "/images/team/ranbir-singh.jpg",
        bio: "I'm Ranbir Singh, a 16-year-old student balancing sports, internships, and school. I enjoy travelling and hiking along with a good strong espresso. I also do graphic design for fun and when not doing any of the above, I'm probably having a nice sleep.",
    },
    {
        name: "Avni Sethi",
        role: "Editor",
        image: "/images/team/avni-sethi.jpg",
        bio: "Hi, I'm Avni, an editor passionate about storytelling and social impact. Through visuals and narratives, I aim to highlight important voices, inspire change, and support causes that truly matter.",
    },
    {
        name: "Radha Pusalkar",
        role: "Project Director",
        image: "/images/team/radha-pusalkar.jpg",
        bio: "Hi, I'm Radha Pusalkar, a Grade 12 student and an active volunteer in the field of animal welfare. I am deeply passionate about social causes and committed to creating meaningful change. I believe even small efforts can create lasting impact and I strive to promote compassion, awareness, and positive action.",
    },
    {
        name: "Shanti Saxena",
        role: "Head of Design",
        image: "/images/team/shanti-saxena.jpg",
        bio: "Hi I am Shanti, currently a science student in grade 11. I aim to support NGOs by using design and marketing to help them reach wider audiences and communicate their missions effectively.",
    },
    {
        name: "Nabhya Shukla",
        role: "Chief Advisor",
        image: "/images/team/nabhya-shukla.jpg",
        bio: "Nabhya Shukla serves as Chief Advisor for the Urban Poona Impact Club, providing guidance and strategic insight to support the club's initiatives and long-term vision. Their mentorship helps strengthen the impact of youth-led projects within the community.",
    },
    {
        name: "Om Patel",
        role: "Head of Logistics",
        image: "/images/team/om-patel.jpg",
        imgClass: "object-top",
        bio: "Om Patel is the Head of Logistics at the Urban Poona Impact Club, responsible for coordinating events, managing resources, and ensuring smooth execution of community initiatives and projects.",
    },
];
export default function Team() {
    return (<div className="pt-24 pb-20 bg-background">
      {/* Hero banner */}
      <div className="bg-gradient-to-br from-primary to-primary/80 text-white py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-accent border border-accent/30 font-medium mb-6">
              <Users size={16}/>
              The People Behind the Movement
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
              Our Team
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              The Urban Poona Impact Club is supported by a dedicated team of students and volunteers who work together to organize initiatives, manage operations, and expand the club's impact within the community.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Profile cards */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          {teamMembers.map(function (member, idx) {
            var _a;
            return (<motion.div key={idx} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.07, duration: 0.5 }} className="flex flex-col sm:flex-row gap-6 bg-card border border-border/50 rounded-2xl p-6 sm:p-8 shadow-md shadow-primary/5">
              {/* Square image */}
              <div className="shrink-0 mx-auto sm:mx-0">
                <img src={member.image} alt={member.name} className={"w-44 h-44 sm:w-52 sm:h-52 rounded-xl object-cover shadow-md ".concat((_a = member.imgClass) !== null && _a !== void 0 ? _a : "object-center")}/>
              </div>

              {/* Text content */}
              <div className="flex flex-col justify-center text-center sm:text-left">
                <span className="inline-block self-center sm:self-start px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
                  {member.role}
                </span>
                <h2 className="text-2xl font-display font-bold mb-3 text-foreground">
                  {member.name}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {member.bio}
                </p>
              </div>
            </motion.div>);
        })}
        </div>
      </div>
    </div>);
}
