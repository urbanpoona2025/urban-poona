import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Heart, Leaf, Users, Building2, CheckSquare, Coins, Quote } from "lucide-react";
import { useRef, useState, useEffect } from "react";

// Animated counter hook
function useCounter(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return { count, ref };
}

function StatCard({ icon: Icon, value, suffix, label, delay }: {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const { count, ref } = useCounter(value, 1800);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="flex flex-col items-center text-center p-8 bg-card border border-border/40 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
        <Icon size={22} className="text-primary" />
      </div>
      <p className="text-4xl font-display font-bold text-primary mb-1">
        {suffix.startsWith("₹") ? `₹${count}` : `${count}${suffix}`}
      </p>
      <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">{label}</p>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="w-full">
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
        {/* Subtle geometric background */}
        <div className="absolute inset-0 z-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(43,90%,55%) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(183,100%,30%) 0%, transparent 40%)" }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />

        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-accent/20 text-accent border border-accent/30 text-sm font-semibold tracking-widest uppercase mb-8">
              Pune's Youth Impact Club
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white mb-6 leading-[1.1]">
              Showing Up.<br />
              <span className="text-accent">Making It Count.</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Urban Poona Impact Club is a youth-driven community dedicated to creating real, measurable impact in Pune — through action, collaboration, and collective effort.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/join"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent text-accent-foreground font-bold text-base hover:bg-accent/90 hover:-translate-y-0.5 transition-all duration-200 shadow-[0_0_30px_rgba(255,193,0,0.35)]"
              >
                Join the Movement
              </Link>
              <Link
                href="/projects"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 text-white font-bold text-base backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200"
              >
                See Our Work →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Impact by the Numbers ── */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-accent mb-3">2025 – 2026 Impact Report</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">A Year of Action</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Every number represents real hours, real people, and real change made in Pune.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            <StatCard icon={Leaf}       value={1000} suffix=" KG"      label="Waste Cleared"               delay={0} />
            <StatCard icon={Users}      value={300}  suffix="+"        label="Volunteers Engaged"          delay={0.08} />
            <StatCard icon={Building2}  value={8}    suffix="+"        label="Orgs & NGOs Collaborated"    delay={0.16} />
            <StatCard icon={CheckSquare} value={6}   suffix="+"        label="Projects Undertaken"         delay={0.24} />
            <StatCard icon={Coins}      value={4.5}  suffix=" L+"      label="Funds Raised (₹)"            delay={0.32} />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center text-xs text-muted-foreground"
          >
            Verified program figures · Urban Poona Impact Club · 2025–2026
          </motion.p>
        </div>
      </section>

      {/* ── About snippet ── */}
      <section className="py-24 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-accent mb-4">Who We Are</span>
              <h2 className="text-4xl font-display font-bold mb-6 leading-snug">
                Youth-led.<br />Community-rooted.<br />Action-oriented.
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Urban Poona Impact Club was founded on a simple belief — that young people have the energy, creativity, and drive to create tangible improvements in the communities they live in.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From large-scale environmental clean-ups to fundraising for animal shelters, our work spans animal welfare, sustainability, community well-being, youth empowerment, and donations & fundraising.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
                Read our full story <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="/images/events/basketball-fundraiser-league/img12.jpeg"
                alt="UPIC in action"
                className="rounded-3xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-5 -left-5 w-40 h-40 bg-accent/40 rounded-3xl -z-10" />
              <div className="absolute -top-5 -right-5 w-40 h-40 bg-primary/20 rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Domains of Work ── */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-accent mb-3">Where We Create Impact</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Five Domains of Work</h2>
            <p className="text-lg text-white/70 max-w-xl mx-auto">
              Our work spans people, communities, the environment and meaningful action.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { num: "01", title: "Animal Welfare",             desc: "Supporting animal welfare and contributing to the wellbeing of animals in the community." },
              { num: "02", title: "Environment & Sustainability", desc: "Environmental clean-ups, responsible waste action, sustainability initiatives and creating cleaner surroundings." },
              { num: "03", title: "Community Well-being",       desc: "Initiatives focused on improving community welfare and supporting people who need it." },
              { num: "04", title: "Youth Empowerment",          desc: "Creating opportunities for young people to participate, volunteer, lead and contribute to social change." },
              { num: "05", title: "Donations & Fundraising",    desc: "Mobilising donations and raising funds to support meaningful causes and turn community support into action." },
            ].map((domain, idx) => (
              <motion.div
                key={domain.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
              >
                <span className="text-accent font-display font-bold text-2xl block mb-3">{domain.num}</span>
                <h3 className="text-white font-semibold text-base mb-2">{domain.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{domain.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote / Collective effort ── */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Quote size={40} className="text-accent mx-auto mb-6 opacity-70" />
            <blockquote className="text-3xl md:text-4xl font-display font-bold text-primary leading-snug mb-6">
              Impact is a collective effort.
            </blockquote>
            <p className="text-lg text-muted-foreground mb-4">
              To every volunteer, donor, partner, organisation and supporter who has stood with Urban Poona Impact Club — thank you.
            </p>
            <p className="text-muted-foreground italic text-base border-l-4 border-accent pl-4 text-left max-w-xl mx-auto">
              Not all impact is documented. Some of the most meaningful moments happen quietly, in the time given, the hands that helped, the people supported and the change created along the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Featured Project (Waterball Initiative – concluded) ── */}
      <section className="py-24 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-accent mb-3">Recently Concluded</span>
            <h2 className="text-4xl font-display font-bold mb-4">Featured Initiative</h2>
            <p className="text-lg text-muted-foreground">A look at what we just accomplished together.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl overflow-hidden shadow-xl border border-border/50 grid grid-cols-1 md:grid-cols-2"
          >
            <div className="h-64 md:h-auto w-full relative">
              <img
                src="https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80"
                alt="The Waterball Initiative"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                ✓ Concluded
              </span>
            </div>
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-accent font-semibold mb-4 bg-accent/10 px-4 py-2 rounded-full w-fit">
                <Heart size={16} /> Animal Welfare
              </div>
              <h3 className="text-3xl font-display font-bold mb-4">The Waterball Initiative</h3>
              <p className="text-muted-foreground text-base mb-8 leading-relaxed">
                This summer, UPIC mobilised 80+ volunteers to place and maintain water bowls across 50+ Pune localities — ensuring street animals had access to clean drinking water during peak heat. The initiative is now successfully concluded.
              </p>
              <Link
                href="/waterball-initiative"
                className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-colors self-start"
              >
                Read Full Story <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 70% 50%, hsl(43,90%,55%) 0%, transparent 55%)" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              This is only the beginning.<br />
              <span className="text-accent">Let's keep showing up, together.</span>
            </h2>
            <p className="text-white/70 text-lg mb-10">
              Whether you want to volunteer, donate, or partner — there's a place for you in this movement.
            </p>
            <Link
              href="/join"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-accent text-accent-foreground font-bold text-lg hover:bg-accent/90 hover:-translate-y-0.5 transition-all shadow-[0_0_30px_rgba(255,193,0,0.4)]"
            >
              Get Involved <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
