import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import { getProjectBySlug } from "@/data/projects";

interface ProjectGalleryPageProps {
  params: { slug: string };
}

export default function ProjectGalleryPage({ params }: ProjectGalleryPageProps) {
  const project = getProjectBySlug(params.slug);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + project.gallery.length) % project.gallery.length);
  };

  const goNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % project.gallery.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") goPrev();
    if (e.key === "ArrowRight") goNext();
  };

  return (
    <div className="bg-background pb-20 pt-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-primary/80 text-white py-14 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`/${project.slug}`}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-5 text-sm font-medium transition-colors"
          >
            <ArrowLeft size={16} /> Back to Project
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 bg-accent/20 text-accent border border-accent/30 text-xs font-bold rounded-full mb-3">
              Photo Gallery
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold">
              {project.title}
            </h1>
            <p className="text-white/70 mt-2">{project.gallery.length} photos</p>
          </motion.div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {project.gallery.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => openLightbox(idx)}
              className="aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 bg-muted"
              data-testid={`gallery-image-${idx}`}
            >
              <img
                src={image}
                alt={`${project.title} — photo ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 p-2 text-white/70 hover:text-white transition-colors bg-white/10 rounded-full"
              data-testid="lightbox-close"
            >
              <X size={24} />
            </button>

            {/* Counter */}
            <div className="absolute top-5 left-5 text-white/60 text-sm font-medium bg-black/40 px-3 py-1 rounded-full">
              {lightboxIndex + 1} / {project.gallery.length}
            </div>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 p-3 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full"
              data-testid="lightbox-prev"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={project.gallery[lightboxIndex]}
              alt={`${project.title} — photo ${lightboxIndex + 1}`}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 p-3 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full"
              data-testid="lightbox-next"
            >
              <ChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
