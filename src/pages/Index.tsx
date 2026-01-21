import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { ArrowRight, Shield, Award, Users } from "lucide-react";
import heroHome from "@/assets/hero-home.png";
import heroDoors from "@/assets/hero-doors.png";
import heroDecoration from "@/assets/hero-decoration.png";
import heroFloors from "@/assets/hero-floors.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroHome})` }}
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 container-custom px-4 md:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-card mb-6 animate-fade-in">
              Tworzymy piękne
              <br />i funkcjonalne wnętrza
            </h1>
            <p
              className="text-lg md:text-xl text-card mb-8 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Drzwi, podłogi, tapety i sztukateria z montażem
            </p>
            <Link
              to="/kontakt"
              className="btn-primary inline-flex items-center gap-2 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              Skontaktuj się
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Nie ma problemu!</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Gwarantujemy perfekcyjne wykończenie wnętrz – kompleksowe usługi
                z dbałością o każdy szczegół. Twój komfort jest naszym
                priorytetem.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Specjalizujemy się w montażu drzwi, podłóg, tapet oraz
                sztukaterii. Nasze wieloletnie doświadczenie gwarantuje
                najwyższą jakość wykonania.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-6">
                <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
                  15+
                </div>
                <p className="text-muted-foreground text-sm">
                  Lat doświadczenia
                </p>
              </div>
              <div className="p-6">
                <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
                  500+
                </div>
                <p className="text-muted-foreground text-sm">
                  Zadowolonych klientów
                </p>
              </div>
              <div className="p-6">
                <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
                  100%
                </div>
                <p className="text-muted-foreground text-sm">Satysfakcji</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-section-alt">
        <div className="container-custom">
          {/* Service 1 - Otwieraj */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-20">
            <div className="overflow-hidden rounded-lg shadow-xl">
              <img
                src={heroDoors}
                alt="Drzwi i klamki"
                className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div>
              <span className="text-primary font-medium text-sm tracking-wider uppercase mb-2 block">
                Otwieraj
              </span>
              <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-4">
                Drzwi i klamki
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Znakomite drzwi wewnętrzne i zewnętrzne w różnorodnych stylach –
                od klasycznych modeli po nowoczesne rozwiązania z ukrytą
                ościeżnicą.
              </p>
              <Link
                to="/otwieraj"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-200"
              >
                Sprawdź ofertę
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Service 2 - Dekoruj */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-20">
            <div className="lg:order-2 overflow-hidden rounded-lg shadow-xl">
              <img
                src={heroDecoration}
                alt="Tapety i dekoracje"
                className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="lg:order-1">
              <span className="text-primary font-medium text-sm tracking-wider uppercase mb-2 block">
                Dekoruj
              </span>
              <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-4">
                Tapety, podłogi, sztukateria
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Wyjątkowe wzory tapet, eleganckie podłogi drewniane i stylowa
                sztukateria – wszystko, czego potrzebujesz do stworzenia
                wyjątkowego wnętrza.
              </p>
              <Link
                to="/dekoruj"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-200"
              >
                Sprawdź ofertę
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Service 3 - Trzymaj poziom */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="overflow-hidden rounded-lg shadow-xl">
              <img
                src={heroFloors}
                alt="Podłogi"
                className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div>
              <span className="text-primary font-medium text-sm tracking-wider uppercase mb-2 block">
                Trzymaj poziom
              </span>
              <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-4">
                Dla wykończeniowców
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Profesjonalne rozwiązania dla fachowców – systemy drzwiowe,
                klamki i akcesoria montażowe najwyższej jakości.
              </p>
              <Link
                to="/trzymaj-poziom"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-200"
              >
                Sprawdź ofertę
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <SectionHeader title="Dlaczego warto z nami pracować?" centered />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-4">
                Kompleksowa obsługa
              </h3>
              <p className="text-muted-foreground">
                Dostarczamy i montujemy – wszystko w jednym miejscu, bez
                zbędnych formalności.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-4">
                Znakomite materiały
              </h3>
              <p className="text-muted-foreground">
                Współpracujemy tylko z renomowanymi producentami, gwarantując
                najwyższą jakość.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-4">
                Indywidualne podejście
              </h3>
              <p className="text-muted-foreground">
                Każdy projekt traktujemy indywidualnie, dbając o Twoje potrzeby
                i oczekiwania.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary-foreground mb-6">
            Jesteś zadowolony z naszych usług?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Skontaktuj się z nami i rozpocznij transformację swojego wnętrza już
            dziś.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 bg-card text-foreground hover:bg-card/90 px-8 py-4 rounded-md font-medium transition-all duration-200"
          >
            Skontaktuj się
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
