import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { ArrowRight } from "lucide-react";
import heroRealizations from "@/assets/hero-realizations.jpg";
import realization1 from "@/assets/realization1.png";
import realization2 from "@/assets/realization2.png";
import realization3 from "@/assets/realization3.png";

const realizations = [
  {
    title: "Artystyczna tapeta kwiatowa",
    description: "Elegancka realizacja z wykorzystaniem fototapety z motywem kwiatów w odcieniach szarości i beżu. Idealne połączenie z nowoczesnymi drzwiami z ukrytą ościeżnicą.",
    image: realization1,
    location: "Gdynia",
  },
  {
    title: "Minimalistyczne drzwi ukryte",
    description: "Drzwi z ukrytą ościeżnicą pokryte tapetą strukturalną. Doskonałe wtopienie w ścianę dla maksymalnej elegancji.",
    image: realization2,
    location: "Sopot",
  },
  {
    title: "Eleganckie przejście",
    description: "Klasyczne drzwi z tapetą o subtelnej fakturze. Nowoczesny minimalizm w każdym detalu.",
    image: realization3,
    location: "Gdańsk",
  },
];

const Ogladaj = () => {
  return (
    <Layout>
      <PageHero
        title="Oglądaj"
        subtitle="Zobacz nasze realizacje i zainspiruj się"
        backgroundImage={heroRealizations}
      />

      {/* Intro Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-3xl">
            <SectionHeader
              title="Nasze realizacje"
            />
            <p className="text-muted-foreground leading-relaxed">
              Każdy projekt to unikalna historia. Zobacz jak nasze rozwiązania 
              zmieniają wnętrza naszych klientów w całym Trójmieście i okolicach.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-section-alt">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {realizations.map((item, index) => (
              <div
                key={index}
                className={`${index === 0 ? "lg:col-span-2" : ""}`}
              >
                <div className="gallery-item group">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                        index === 0 ? "h-[400px] md:h-[600px]" : "h-[350px] md:h-[450px]"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">
                        {item.location}
                      </span>
                      <h3 className="text-xl md:text-2xl font-serif font-semibold text-card mb-2">
                        {item.title}
                      </h3>
                      <p className="text-card/80 text-sm md:text-base max-w-xl">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Zrealizowanych projektów</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">15+</div>
              <p className="text-muted-foreground">Lat doświadczenia</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Zadowolonych klientów</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">4.9</div>
              <p className="text-muted-foreground">Ocena Google</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary-foreground mb-6">
            Chcesz zobaczyć więcej?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Skontaktuj się z nami i porozmawiajmy o Twoim projekcie.
          </p>
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

export default Ogladaj;
