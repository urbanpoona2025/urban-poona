import { Link } from "wouter";
import { Instagram, Mail, MapPin, Heart } from "lucide-react";
// @ts-ignore
import logoUrl from "@assets/UBIC_Logo_1773139486030.jpeg";
export function Footer() {
    return (<footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={logoUrl} alt="Logo" className="h-10 w-10 rounded-full object-cover shrink-0"/>
              <span className="font-display font-bold text-xl text-white leading-tight">
                Urban Poona Impact Club
              </span>
            </div>
            <p className="text-primary-foreground/70 mb-6 text-sm leading-relaxed">
              Empowering youth to drive meaningful change in Pune through
              environmental action, animal welfare, and community service.
            </p>
            <a href="https://www.instagram.com/rc__urbanpoona/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 p-2 rounded-full bg-white/10 hover:bg-accent hover:text-accent-foreground transition-colors">
              <Instagram size={20}/>
            </a>
          </div>

          {/* Quick Links column */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
            { href: "/about", label: "About Us" },
            { href: "/projects", label: "Our Projects" },
            { href: "/journey", label: "The Journey" },
            { href: "/founders", label: "Founders" },
            { href: "/team", label: "Our Team" },
            { href: "/join", label: "Volunteer Form" },
        ].map(function (link) { return (<li key={link.href}>
                  <Link href={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>); })}
            </ul>
          </div>

          {/* Contact column */}
          <div className="min-w-0">
            <h3 className="text-white font-semibold mb-6 text-lg">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin size={18} className="shrink-0 text-accent mt-0.5"/>
                <span className="text-sm">Pune, Maharashtra, India</span>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70 min-w-0">
                <Mail size={18} className="shrink-0 text-accent mt-0.5"/>
                <a href="mailto:urbanpoona2025@gmail.com" className="hover:text-accent transition-colors text-sm break-all min-w-0">
                  urbanpoona2025@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-primary-foreground/50 text-sm">
          <p>
            © {new Date().getFullYear()} Urban Poona Impact Club. All rights
            reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart size={14} className="text-accent"/> by Arhan
            Shaikh
          </p>
        </div>
      </div>
    </footer>);
}
