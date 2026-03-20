import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useLocation } from "wouter";
export function MainLayout(_a) {
    var children = _a.children;
    var location = useLocation()[0];
    // Scroll to top on route change
    useEffect(function () {
        window.scrollTo(0, 0);
    }, [location]);
    return (<div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>);
}
