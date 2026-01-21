import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { ArrowRight } from "lucide-react";
import heroDecoration from "@/assets/hero-decoration.png";
import decoration1 from "@/assets/decorate-1.png";
import decoration2 from "@/assets/decorate-2.png";
import decoration3 from "@/assets/decorate-3.png";

const decorations = [
  {
    title: "Elegancka jadalnia",
    description:
      "Artystyczna tapeta z motywem drzew i naturalnych form. Idealne tło dla nowoczesnej jadalni z drewnianymi akcentami.",
    image: decoration1,
  },
  {
    title: "Sypialnia w stylu botanicznym",
    description:
      "Romantyczna tapeta z motywami roślinnymi i ptakami. Tworzy przytulną i relaksującą atmosferę w sypialni.",
    image: decoration2,
  },
  {
    title: "Salon z akcentem złota",
    description:
      "Subtelna tapeta z delikatnymi gałązkami i złotymi akcentami. Dodaje elegancji i ciepła każdemu salonowi.",
    image: decoration3,
  },
];

const Dekoruj = () => {
  return (
    <Layout>
      <PageHero
        title="Dekoruj"
        subtitle="Tapety, podłogi i sztukateria, które odmienią Twoje wnętrze"
        backgroundImage={heroDecoration}
      />

      {/* Intro Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-3xl">
            <SectionHeader title="Wyjątkowe dekoracje ścienne" />
            <p className="text-muted-foreground leading-relaxed">
              Odkryj nasze kolekcje tapet, podłóg i sztukaterii, które nadadzą
              Twoim wnętrzom wyjątkowy charakter. Każdy projekt realizujemy z
              najwyższą dbałością o detale i profesjonalny montaż.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-section-alt">
        <div className="container-custom">
          <SectionHeader
            title="Nasze inspiracje"
            subtitle="Zobacz jak nasze realizacje odmienią Twoje wnętrza"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {decorations.map((item, index) => (
              <div key={index} className="gallery-item group">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-serif font-semibold text-card mb-2">
                      {item.title}
                    </h3>
                    <p className="text-card/80 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <SectionHeader title="Co oferujemy?" centered />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-section-alt rounded-lg p-8 text-center card-hover">
              <h3 className="text-xl font-serif font-semibold mb-4">Tapety</h3>
              <p className="text-muted-foreground">
                Szeroki wybór wzorów od minimalistycznych po artystyczne
                fototapety. Profesjonalny montaż z gwarancją.
              </p>
            </div>

            <div className="bg-section-alt rounded-lg p-8 text-center card-hover">
              <h3 className="text-xl font-serif font-semibold mb-4">Podłogi</h3>
              <p className="text-muted-foreground">
                Drewniane, winylowe i laminowane. Montaż z dbałością o każdy
                detal.
              </p>
            </div>

            <div className="bg-section-alt rounded-lg p-8 text-center card-hover">
              <h3 className="text-xl font-serif font-semibold mb-4">
                Sztukateria
              </h3>
              <p className="text-muted-foreground">
                Listwy, rozety i panele ścienne dodające elegancji każdemu
                wnętrzu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary-foreground mb-6">
            Zainspirowany? Porozmawiajmy!
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

export default Dekoruj;
