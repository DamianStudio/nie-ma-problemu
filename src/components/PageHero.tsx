interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

const PageHero = ({ title, subtitle, backgroundImage }: PageHeroProps) => {
  return (
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
        <div className="relative z-10 container-custom rounded-3xl bg-black/30 mx-auto">
          <div className="px-4 md:px-8 py-4 m-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-sansTitle text-card mb-4 animate-fade-in">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
