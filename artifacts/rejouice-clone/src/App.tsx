import React, { useEffect, useRef, Suspense } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";

const Toaster = React.lazy(() =>
  import("@/components/ui/toaster").then((m) => ({ default: m.Toaster }))
);
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Home is critical path — eager load
import Home from "@/pages/Home";

// All other pages lazy-loaded to reduce initial bundle
const NotFound        = React.lazy(() => import("@/pages/not-found"));
const WorkPage        = React.lazy(() => import("@/pages/WorkPage"));
const ProjectPage     = React.lazy(() => import("@/pages/ProjectPage"));
const AboutPage       = React.lazy(() => import("@/pages/AboutPage"));
const ServicesPage    = React.lazy(() => import("@/pages/ServicesPage"));
const ContactPage     = React.lazy(() => import("@/pages/ContactPage"));
const JournalPage     = React.lazy(() => import("@/pages/JournalPage"));
const JournalPostPage = React.lazy(() => import("@/pages/JournalPostPage"));
const IndustriesPage  = React.lazy(() => import("@/pages/IndustriesPage"));
const IndustryPage    = React.lazy(() => import("@/pages/IndustryPage"));
const CareersPage     = React.lazy(() => import("@/pages/CareersPage"));
const DesignForGoodPage   = React.lazy(() => import("@/pages/DesignForGoodPage"));
const AccreditationsPage  = React.lazy(() => import("@/pages/AccreditationsPage"));
const PartnersPage    = React.lazy(() => import("@/pages/PartnersPage"));
const ProcessPage     = React.lazy(() => import("@/pages/ProcessPage"));
const FAQPage         = React.lazy(() => import("@/pages/FAQPage"));
const PressPage       = React.lazy(() => import("@/pages/PressPage"));
const PricingPage     = React.lazy(() => import("@/pages/PricingPage"));
const TestimonialsPage = React.lazy(() => import("@/pages/TestimonialsPage"));
const AwardsPage      = React.lazy(() => import("@/pages/AwardsPage"));
const NewsletterPage  = React.lazy(() => import("@/pages/NewsletterPage"));
const ServiceDetailPage = React.lazy(() => import("@/pages/ServiceDetailPage"));
const GlossaryPage    = React.lazy(() => import("@/pages/GlossaryPage"));
const GlossaryTermPage = React.lazy(() => import("@/pages/GlossaryTermPage"));
const ResourcesPage   = React.lazy(() => import("@/pages/ResourcesPage"));
const ResourcePage    = React.lazy(() => import("@/pages/ResourcePage"));
const PrivacyPolicyPage = React.lazy(() =>
  import("@/pages/LegalPage").then((m) => ({ default: m.PrivacyPolicyPage }))
);
const TermsPage = React.lazy(() =>
  import("@/pages/LegalPage").then((m) => ({ default: m.TermsPage }))
);
const RefundsPage = React.lazy(() =>
  import("@/pages/LegalPage").then((m) => ({ default: m.RefundsPage }))
);
const SitemapPage = React.lazy(() =>
  import("@/pages/LegalPage").then((m) => ({ default: m.SitemapPage }))
);

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
      <Route path="/pricing" component={PricingPage} />
      <Route path="/testimonials" component={TestimonialsPage} />
      <Route path="/awards" component={AwardsPage} />
      <Route path="/newsletter" component={NewsletterPage} />
      <Route path="/services/:slug" component={ServiceDetailPage} />
      <Route path="/glossary/:id" component={GlossaryTermPage} />
      <Route path="/glossary" component={GlossaryPage} />
      <Route path="/resources/:slug" component={ResourcePage} />
      <Route path="/resources" component={ResourcesPage} />

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
      <main>
        <Suspense fallback={null}>
          <Router />
        </Suspense>
      </main>
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
        <Suspense fallback={null}>
          <Toaster />
        </Suspense>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
