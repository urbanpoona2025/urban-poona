import { motion } from "framer-motion";
import { Link } from "wouter";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";
export default function Projects() {
    return (<div className="pt-24 pb-20 bg-background">
      <div className="bg-gradient-to-br from-primary to-primary/80 text-white py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
              Our Projects
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Real action, real results. Explore the initiatives our volunteers
              have successfully executed across Pune.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map(function (project, idx) { return (<motion.div key={project.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.5 }}>
              <Link href={"/".concat(project.slug)}>
                <div className="group bg-card rounded-3xl overflow-hidden shadow-md shadow-primary/5 border border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <img src={project.cardImage} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"/>
                    <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full shadow">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-6 flex items-center justify-between">
                    <h3 className="text-xl font-display font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"/>
                  </div>
                </div>
              </Link>
            </motion.div>); })}
        </div>
      </div>
    </div>);
}
