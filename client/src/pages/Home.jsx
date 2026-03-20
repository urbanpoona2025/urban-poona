import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Heart } from "lucide-react";
export default function Home() {
    return (<div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-b from-primary to-primary/50">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent border border-accent/30 font-medium tracking-wide mb-6">
              Pune's Youth Impact Club
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight text-balance">
              Empowering Youth to Drive <span className="text-accent">Meaningful Change</span>
            </h1>
            <p className="text-xl text-white/90 mb-10 text-balance max-w-2xl mx-auto leading-relaxed">
              We are a passionate community of volunteers dedicated to environmental conservation, animal welfare, and making Pune a better place for all.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/join" className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent text-accent-foreground font-bold text-lg hover:bg-accent/90 hover:-translate-y-1 transition-all duration-300 shadow-[0_0_20px_rgba(255,193,0,0.4)]">
                Become a Volunteer
              </Link>
              <Link href="/projects" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 text-white font-bold text-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-24 bg-background relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-4xl font-display font-bold mb-6">Small Steps,<br />Massive Impact.</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The Urban Poona Impact Club started with a simple belief: that young people have the power and energy to create tangible improvements in their community.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From organizing large-scale clean-ups to fundraising for animal shelters, our members are hands-on, dedicated, and driven by a shared vision of a cleaner, kinder Pune.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
                Read our full story <ArrowRight size={20}/>
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
              <img src="/images/events/basketball-fundraiser-league/img12.jpeg" alt="UPBFL Basketball Fundraiser League" className="rounded-3xl shadow-2xl z-10 relative w-full object-cover"/>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-accent rounded-3xl -z-10 opacity-50"></div>
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-primary rounded-full -z-10 opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Initiative */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Featured Initiative</h2>
            <p className="text-lg text-muted-foreground">What we're currently focusing our energy on.</p>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card rounded-3xl overflow-hidden shadow-xl border border-border/50 grid grid-cols-1 md:grid-cols-2">
            {/* street dog drinking water */}
            <div className="h-64 md:h-auto w-full relative">
              <img src="https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80" alt="Water Bowl Initiative" className="absolute inset-0 w-full h-full object-cover"/>
            </div>
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-accent font-semibold mb-4 bg-accent/10 px-4 py-2 rounded-full w-fit">
                <Heart size={16}/> Summer 2026 Focus
              </div>
              <h3 className="text-3xl font-display font-bold mb-4">Water Bowl Initiative</h3>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                As temperatures rise, stray animals in Pune face severe dehydration. Our upcoming massive drive aims to place and maintain water bowls across 50+ localities in the city, ensuring safe drinking water for all street animals.
              </p>
              <Link href="/join" className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-colors self-start">
                Help Us Prepare
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>);
}
