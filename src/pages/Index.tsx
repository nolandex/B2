import HeroSectionOne from "@/components/hero-section-demo-1";
import GlowingEffectDemo from "@/components/glowing-effect-demo";
import TimelineDemo from "@/components/timeline-demo";
import PricingSection from "@/components/pricing-section";
import CTASection from "@/components/cta-section";
import FeaturesSection from "@/components/features-section";
import GallerySection from "@/components/gallery-section";
import FAQSection from "@/components/faq-section";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="mb-20">
        <HeroSectionOne />
      </section>

      {/* Divider */}
      <div className="mx-auto mb-4 h-[1px] w-full max-w-2xl bg-gradient-to-r from-transparent via-primary to-transparent"></div>

      {/* Features Section */}
      <section className="mb-20">
        <FeaturesSection />
      </section>

      {/* Features Section with Glowing Effects */}
      <section className="mb-20">
        <div className="h-[1px] w-full bg-gradient-to-r from-primary to-transparent"></div>
        
        <div className="p-6 text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold !leading-snug">Apa Yang Kamu Dapat</h2>
        </div>
        
        <div className="max-w-7xl mx-auto mt-6 px-4">
          <GlowingEffectDemo />
        </div>
      </section>

      {/* Divider before Timeline (revisi) */}
      <div className="h-[1px] w-full bg-gradient-to-l from-primary/100 to-transparent mb-4"></div>

      {/* Timeline Section */}
      <section className="mb-20">
        <div className="text-center mb-8 mt-6">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold !leading-snug">Bagaimana Cara Gabung</h2>
        </div>
        <TimelineDemo />
      </section>

      {/* Gallery Section */}
      <GallerySection />

      {/* Pricing Section */}
      <PricingSection />

      {/* CTA Section */}
      <CTASection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <footer className="text-center py-10 border-t border-border">
        <p className="text-muted-foreground">Built with React, TypeScript, and amazing UI components</p>
      </footer>
    </div>
  );
};

export default Index;
