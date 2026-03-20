import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Images } from "lucide-react";
import { getProjectBySlug } from "@/data/projects";

interface ProjectDetailProps {
  params: { slug: string };
}

export default function ProjectDetail({ params }: ProjectDetailProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-4xl font-display font-bold mb-4">Project Not Found</h1>
        <Link href="/projects" className="text-primary font-semibold hover:underline">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background pb-20">
      {/* Banner */}
      <div className="relative h-[55vh] min-h-[360px] overflow-hidden">
        <img
          src={project.bannerImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end pb-12 px-4">
          <div className="max-w-5xl mx-auto w-full">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 text-sm font-medium transition-colors"
            >
              <ArrowLeft size={16} /> All Projects
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full mb-3">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white">
                {project.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="prose prose-lg max-w-none"
        >
          {project.description.map((para, idx) => (
            <p key={idx} className="text-muted-foreground leading-relaxed mb-6 text-lg">
              {para}
            </p>
          ))}
        </motion.div>

        {/* View Gallery Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-12 pt-10 border-t border-border"
        >
          <p className="text-muted-foreground mb-6 text-base">
            Browse all photos from this initiative in the gallery below.
          </p>
          <Link
            href={`/${project.slug}/gallery`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-2xl hover:bg-primary/90 hover:-translate-y-0.5 transition-all shadow-lg shadow-primary/20"
          >
            <Images size={20} />
            View Gallery
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
