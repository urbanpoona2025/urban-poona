import { Link, useLocation } from "wouter";
import { Menu, X, HeartHandshake } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// @ts-ignore
import logoUrl from "@assets/UBIC_Logo_1773139486030.jpeg";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/journey", label: "Journey" },
  { href: "/projects", label: "Projects" },
  { href: "/founders", label: "Founders" },
  { href: "/team", label: "Team" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              src={logoUrl} 
              alt="Urban Poona Impact Club Logo" 
              className="h-12 w-12 rounded-full object-cover border-2 border-primary shadow-sm group-hover:scale-105 transition-transform"
            />
            <span className={`font-display font-bold text-xl ${scrolled ? 'text-primary' : 'text-primary md:text-white'} transition-colors`}>
              UPIC
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`font-medium transition-colors hover:text-accent ${
                  location === link.href 
                    ? "text-accent" 
                    : scrolled ? "text-primary/80" : "text-white/90"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/join"
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-accent text-accent-foreground font-semibold hover:bg-accent/90 hover:scale-105 transition-all shadow-lg shadow-accent/20"
            >
              <HeartHandshake size={18} />
              Join & Support
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-primary' : 'text-primary bg-white/80'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t mt-3 overflow-hidden shadow-xl"
          >
            <nav className="flex flex-col px-4 py-4 gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium p-2 rounded-lg ${
                    location === link.href ? "bg-primary/5 text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                href="/join"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-6 py-3 mt-2 rounded-xl bg-accent text-accent-foreground font-semibold"
              >
                <HeartHandshake size={18} />
                Join & Support
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
