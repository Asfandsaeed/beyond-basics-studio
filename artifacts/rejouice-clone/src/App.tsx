import React, { useEffect, useRef } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import WorkPage from "@/pages/WorkPage";
import ProjectPage from "@/pages/ProjectPage";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import ContactPage from "@/pages/ContactPage";
import JournalPage from "@/pages/JournalPage";
import JournalPostPage from "@/pages/JournalPostPage";
import IndustriesPage from "@/pages/IndustriesPage";
import IndustryPage from "@/pages/IndustryPage";
import CareersPage from "@/pages/CareersPage";
import DesignForGoodPage from "@/pages/DesignForGoodPage";
import AccreditationsPage from "@/pages/AccreditationsPage";
import PartnersPage from "@/pages/PartnersPage";
import ProcessPage from "@/pages/ProcessPage";
import FAQPage from "@/pages/FAQPage";
import PressPage from "@/pages/PressPage";
import { PrivacyPolicyPage, TermsPage, RefundsPage, SitemapPage } from "@/pages/LegalPage";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const queryClient = new QueryClient();

// Shared lenis instance so ScrollToTop can reset it
let lenisInstance: Lenis | null = null;

// Resets scroll to top on every route change
function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Kill all active ScrollTriggers so they don't interfere on the new page
    ScrollTrigger.killAll();

    // Immediately jump to top — no smooth scroll
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [location]);

  return null;
}

function Router() {
  return (
    <Switch>
      {/* Core */}
      <Route path="/" component={Home} />
      <Route path="/work" component={WorkPage} />
      <Route path="/work/:id" component={ProjectPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/journal/:id" component={JournalPostPage} />
      <Route path="/journal" component={JournalPage} />
      <Route path="/industries/:id" component={IndustryPage} />
      <Route path="/industries" component={IndustriesPage} />
      <Route path="/contact" component={ContactPage} />

      {/* Company */}
      <Route path="/careers" component={CareersPage} />
      <Route path="/design-for-good" component={DesignForGoodPage} />
      <Route path="/accreditations" component={AccreditationsPage} />
      <Route path="/press" component={PressPage} />

      {/* Partners */}
      <Route path="/partners" component={PartnersPage} />

      {/* Resources */}
      <Route path="/process" component={ProcessPage} />
      <Route path="/faq" component={FAQPage} />

      {/* Legal */}
      <Route path="/privacy-policy" component={PrivacyPolicyPage} />
      <Route path="/terms" component={TermsPage} />
      <Route path="/refunds" component={RefundsPage} />
      <Route path="/sitemap" component={SitemapPage} />

      <Route component={NotFound} />
    </Switch>
  );
}

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Router />
      <Footer />
    </>
  );
}

function App() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;
    lenisInstance = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <CustomCursor />
          <AppLayout />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
