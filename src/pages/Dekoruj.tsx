import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { ArrowRight } from "lucide-react";
import heroDecoration from "@/assets/hero-decoration.png";
import decoration1 from "@/assets/decorate-1.png";
import decoration2 from "@/assets/decorate-2.png";
import decoration3 from "@/assets/decorate-3.png";
import BaseSection from "@/components/BaseSection";

const decorations = [
  {
    title: "Elegancka jadalnia",
    description:
      "Artystyczna tapeta z motywem drzew i naturalnych form. Idealne tło dla nowoczesnej jadalni z drewnianymi akcentami.",
    baseImage: decoration1,
    altImage: "alt", //TODO: add alt text
    isImageLeft: true,
    goToSectionName: "Zobacz galerię",
    goToSectionURL: "/galeria-zdjec?page=dekoruj&section=section1", //TODO: update URL
  },
  {
    title: "Sypialnia w stylu botanicznym",
    description:
      "Romantyczna tapeta z motywami roślinnymi i ptakami. Tworzy przytulną i relaksującą atmosferę w sypialni.",
    baseImage: decoration2,
    altImage: "alt", //TODO: add alt text
    isImageLeft: false,
    goToSectionName: "Zobacz galerię",
    goToSectionURL: "/galeria-zdjec?page=dekoruj&section=section2", //TODO: update URL
  },
  {
    title: "Salon z akcentem złota",
    description:
      "Subtelna tapeta z delikatnymi gałązkami i złotymi akcentami. Dodaje elegancji i ciepła każdemu salonowi.",
    baseImage: decoration3,
    altImage: "alt", //TODO: add alt text
    isImageLeft: true,
    goToSectionName: "Zobacz galerię",
    goToSectionURL: "/galeria-zdjec?page=dekoruj&section=section3", //TODO: update URL
  },
];

const Dekoruj = () => {
  return (
    <Layout>
      <PageHero
        title="Dekoruj"
        subtitle="Tapety, podłogi i sztukateria, które odmienią Twoje wnętrze"
        backgroundImage={heroDecoration}
        isBacgkgroundForTextDark={true}
        introTitle="Wyjątkowe dekoracje ścienne"
        introOne="Odkryj nasze kolekcje tapet, podłóg i sztukaterii, które nadadzą
              Twoim wnętrzom wyjątkowy charakter. Każdy projekt realizujemy z
              najwyższą dbałością o detale i profesjonalny montaż."
      />

      {/* Gallery Section */}
      <section className="section-padding bg-section-alt">
        <div className="container-custom">
          {decorations.map((section, index) => (
            <BaseSection
              key={index}
              baseImage={section.baseImage}
              altImage={section.altImage}
              isImageLeft={section.isImageLeft}
              title={section.title}
              description={section.description}
              goToSectionName={section.goToSectionName}
              goToSectionURL={section.goToSectionURL}
            />
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <SectionHeader title="Co oferujemy?" centered />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-section-alt rounded-lg p-8 text-center card-hover">
              <h3 className="text-xl font-sansTitle font-semibold mb-4">
                Tapety
              </h3>
              <p className="text-muted-foreground">
                Szeroki wybór wzorów od minimalistycznych po artystyczne
                fototapety. Profesjonalny montaż z gwarancją.
              </p>
            </div>

            <div className="bg-section-alt rounded-lg p-8 text-center card-hover">
              <h3 className="text-xl font-sansTitle font-semibold mb-4">
                Podłogi
              </h3>
              <p className="text-muted-foreground">
                Drewniane, winylowe i laminowane. Montaż z dbałością o każdy
                detal.
              </p>
            </div>

            <div className="bg-section-alt rounded-lg p-8 text-center card-hover">
              <h3 className="text-xl font-sansTitle font-semibold mb-4">
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
          <h2 className="text-3xl md:text-4xl font-sansTitle font-semibold text-primary-foreground mb-6">
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
