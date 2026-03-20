import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
export default function About() {
    return (<div className="pt-24 pb-20">
      {/* Header */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            About UPIC
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Youth-driven. Action-oriented. Community-focused.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-display font-bold mb-6">Who We Are</h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Urban Poona Impact Club is a youth-driven initiative founded on
              the belief that meaningful change often begins with a simple act
              of awareness. In a world where young people are constantly
              encouraged to succeed academically and professionally, Urban Poona
              Impact Club exists to remind them that success also lies in
              understanding the world around them and choosing to make it
              better.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether it's clearing trash from our hills, raising funds for
              local animal shelters, or spreading awareness about civic duties,
              we are committed to rolling up our sleeves and getting to work.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
            <img src="/images/events/visit-to-grip-charitable-foundation/img4.jpeg" alt="UPIC volunteers at GRIP Charitable Foundation" className="absolute inset-0 w-full h-full object-cover"/>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-10 rounded-3xl shadow-xl shadow-primary/5 border border-primary/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-0 transition-transform group-hover:scale-110"></div>
            <Target className="w-12 h-12 text-primary mb-6 relative z-10"/>
            <h3 className="text-2xl font-display font-bold mb-4 relative z-10">
              Our Mission
            </h3>
            <p className="text-muted-foreground text-lg relative z-10 leading-relaxed">
              Urban Poona Impact Club’s mission is to inspire and empower young
              individuals to become aware, compassionate, and responsible
              members of society. Through community initiatives, collaborations
              with social organisations, educational visits, and fundraising
              efforts, we aim to expose youth to real social challenges and
              encourage them to actively contribute toward creating meaningful
              and lasting impact.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-primary text-white p-10 rounded-3xl shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-bl-full -z-0 transition-transform group-hover:scale-110"></div>
            <Eye className="w-12 h-12 text-accent mb-6 relative z-10"/>
            <h3 className="text-2xl font-display font-bold mb-4 relative z-10 text-white">
              Our Vision
            </h3>
            <p className="text-primary-foreground/80 text-lg relative z-10 leading-relaxed">
              Urban Poona Impact Club aims to inspire young individuals to
              become aware, compassionate, and responsible members of society.
              Through community initiatives, educational visits, collaborations
              with social organisations, and fundraising efforts, the club
              encourages youth to actively contribute toward meaningful social
              causes.
            </p>
          </motion.div>
        </div>
      </section>
    </div>);
}
