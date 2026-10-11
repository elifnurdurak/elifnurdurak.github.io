/**
 * Home page.
 *
 * Purpose: the single-page "dive". One section per depth zone, from the surface (0 m) to the
 * abyss (1000 m), with a fixed depth gauge and ambient effects layered on top. All visitor-facing
 * text comes from `src/content/`.
 */
import { Bubbles } from "@/components/effects/bubbles";
import { CursorTrail } from "@/components/effects/cursor-trail";
import { DepthGauge } from "@/components/depth/depth-gauge";
import { ZoneSection } from "@/components/depth/zone-section";
import { depthZones } from "@/content/depth-zones";
import { sectionCopy } from "@/content/sections";
import { AboutSection } from "@/features/about/about-section";
import { BlogAndFaqSection } from "@/features/blog/blog-section";
import { CasesSection } from "@/features/cases/cases-section";
import { ContactSection } from "@/features/contact/contact-section";
import { SiteFooter } from "@/features/footer/site-footer";
import { GalleryTeaser } from "@/features/gallery/gallery-teaser";
import { HeroSection } from "@/features/hero/hero-section";
import { ProcessSection } from "@/features/process/process-section";
import { ServicesSection } from "@/features/services/services-section";

export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="focus:bg-coral focus:text-water-abyss sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:px-4 focus:py-2"
      >
        {sectionCopy.common.skipToContent}
      </a>

      <Bubbles />
      <CursorTrail />
      <DepthGauge
        zones={depthZones}
        unit={sectionCopy.common.meters}
        label={sectionCopy.common.depthGaugeLabel}
      />

      {/* `#top` is the target of the footer's "back to the surface" link. */}
      <div id="top" />
      <main id="main">
        <ZoneSection zoneId="surface" fullHeight>
          <HeroSection />
        </ZoneSection>
        <ZoneSection zoneId="sunlight">
          <AboutSection />
        </ZoneSection>
        <ZoneSection zoneId="reef">
          <ServicesSection />
        </ZoneSection>
        <ZoneSection zoneId="twilight">
          <ProcessSection />
          <GalleryTeaser />
        </ZoneSection>
        <ZoneSection zoneId="deep">
          <CasesSection />
        </ZoneSection>
        <ZoneSection zoneId="midnight">
          <BlogAndFaqSection />
        </ZoneSection>
        <ZoneSection zoneId="abyss">
          <ContactSection />
        </ZoneSection>
      </main>
      <SiteFooter />
    </>
  );
}
