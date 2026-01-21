import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { ArrowRight } from "lucide-react";
import heroFloors from "@/assets/hero-floors.jpg";
import heroDoors from "@/assets/hero-doors.jpg";

const doorSystems = [
  {
    title: "Drzwi z ukrytą ościeżnicą",
    description: "Nowoczesne rozwiązanie zapewniające minimalistyczny efekt i idealnie gładką powierzchnię ściany.",
    image: heroDoors,
  },
  {
    title: "Drzwi przesuwne",
    description: "Praktyczne i eleganckie rozwiązanie oszczędzające miejsce w pomieszczeniu.",
    image: heroDoors,
  },
  {
    title: "Drzwi klasyczne",
    description: "Tradycyjne wzornictwo połączone z nowoczesną technologią wykonania.",
    image: heroDoors,
  },
  {
    title: "Rozwiązania szklane",
    description: "Przeszklenia i systemy szklane nadające lekkości i przestrzeni każdemu wnętrzu.",
    image: heroDoors,
  },
];

const TrzymajPoziom = () => {
  return (
    <Layout>
      <PageHero
        title="Trzymaj poziom"
        subtitle="Sprawdzone rozwiązania dla fachowców"
        backgroundImage={heroFloors}
      />

      {/* Intro Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-3xl">
            <SectionHeader
              title="Systemy drzwiowe – nowoczesne i praktyczne"
            />
            <p className="text-muted-foreground leading-relaxed">
              Wybór drzwi to decyzja, która wpływa nie tylko na funkcjonalność, ale i styl 
              całego wnętrza. Oferujemy szeroką gamę drzwi wewnętrznych – od klasycznych 
              modeli po innowacyjne rozwiązania z ukrytą ościeżnicą, które zapewniają 
              minimalistyczny, elegancki efekt.
            </p>
          </div>
        </div>
      </section>

      {/* Door Systems Gallery */}
      <section className="section-padding bg-section-alt">
        <div className="container-custom">
          <div className="space-y-8">
            {doorSystems.map((system, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-xl h-[300px] md:h-[400px] group"
              >
                <img
                  src={system.image}
                  alt={system.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="image-overlay" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-4">
                    <h3 className="text-2xl md:text-3xl font-serif font-semibold text-card mb-2">
                      {system.title}
                    </h3>
                    <p className="text-card/80 max-w-md mx-auto hidden md:block">
                      {system.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Handles Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                title="Klamki nowoczesne i minimalistyczne"
              />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Klamki dostajemy nie tylko w różnych wykończeniach, ale też stylach – 
                dla drzwi zewnętrznych, wewnętrznych szklanych i klasycznych. 
                Oferujemy pełne zestawy szyldem, okuciami, powłokami od drzwi 
                przesuwnych oraz stale-elegancje podłączeniowe stylów 
                nowoczesnych i minimalistycznych.
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 btn-primary"
              >
                Zobacz galerię klamek
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="bg-muted rounded-lg overflow-hidden h-[300px] md:h-[400px]">
              <img
                src={heroDoors}
                alt="Klamki"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary-foreground mb-6">
            Porozmawiajmy o Twoim remoncie
          </h2>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 bg-card text-foreground hover:bg-card/90 px-8 py-4 rounded-md font-medium transition-all duration-200"
          >
            Skontaktuj się z nami
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default TrzymajPoziom;
