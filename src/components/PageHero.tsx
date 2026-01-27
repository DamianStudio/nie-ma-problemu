import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  isBacgkgroundForTextDark?: boolean;
  ctaButtonText?: string;
  ctaLinkURL?: string;
  introSurtitle?: string;
  introTitle?: string;
  introOne?: string;
  introTwo?: string;
}

const PageHero = ({
  title,
  subtitle,
  backgroundImage,
  isBacgkgroundForTextDark,
  ctaButtonText,
  introSurtitle,
  introTitle,
  introOne,
  introTwo,
}: PageHeroProps) => {
  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />

        {/* Overlay */}
        <div className="hero-overlay absolute inset-0" />

        {/* Content */}
        <div className="flex mx-2 items-center justify-center w-full">
          <div
            className={`relative z-10 container-custom rounded-3xl ${isBacgkgroundForTextDark ? "bg-black/30" : ""} mx-auto`}
          >
            <div className="px-4 md:px-8 py-4 m-4">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-sansTitle text-card mb-6 animate-fade-in">
                  {title}
                </h1>
                {subtitle && (
                  <p
                    className="text-lg md:text-xl text-card animate-fade-in"
                    style={{ animationDelay: "0.2s" }}
                  >
                    {subtitle}
                  </p>
                )}
                {ctaButtonText && (
                  <Link
                    to="/kontakt"
                    className="btn-primary inline-flex items-center gap-2 animate-fade-in mt-8"
                    style={{ animationDelay: "0.4s" }}
                  >
                    Skontaktuj się
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Intro Section */}
      {introTitle && (
        <section className="section-padding bg-card">
          <div className="container-custom">
            <div className="max-w-3xl">
              {introSurtitle && (
                <p className="text-muted-foreground leading-relaxed pb-4">
                  {introSurtitle}
                </p>
              )}
              <SectionHeader title={introTitle} />
              {introOne && (
                <p className="text-muted-foreground leading-relaxed">
                  {introOne}
                </p>
              )}
              {introTwo && (
                <p className="text-muted-foreground leading-relaxed pt-4">
                  {introTwo}
                </p>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default PageHero;
