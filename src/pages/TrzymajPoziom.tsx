import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { ArrowRight } from "lucide-react";
import heroFloors from "@/assets/hero-floors.jpg";
import floor1 from "@/assets/floor-1.jpg";
import floor2 from "@/assets/floor-2.jpg";
import floor3 from "@/assets/floor-3.jpg";
import floor4 from "@/assets/floor-4.jpg";
import BaseSection from "@/components/BaseSection";

const keepStandards = [
  {
    title: "Trzymaj poziom 1",
    description: "Opis do Trzymaj poziom 1",
    baseImage: floor1,
    altImage: "alt", //TODO: add alt text
    isImageLeft: true,
    goToSectionName: "Zobacz galerię",
    goToSectionURL: "/galeria-zdjec?page=trzymaj-poziom&section=section1", //TODO: update URL
  },
  {
    title: "Trzymaj poziom 2",
    description: "Opis do Trzymaj poziom 2",
    baseImage: floor2,
    altImage: "alt", //TODO: add alt text
    isImageLeft: false,
    goToSectionName: "Zobacz galerię",
    goToSectionURL: "/galeria-zdjec?page=trzymaj-poziom&section=section2", //TODO: update URL
  },
  {
    title: "Trzymaj poziom 3",
    description: "Opis do Trzymaj poziom 3",
    baseImage: floor3,
    altImage: "alt", //TODO: add alt text
    isImageLeft: true,
    goToSectionName: "Zobacz galerię",
    goToSectionURL: "/galeria-zdjec?page=trzymaj-poziom&section=section3", //TODO: update URL
  },
  {
    title: "Trzymaj poziom 4",
    description: "Opis do Trzymaj poziom 4",
    baseImage: floor4,
    altImage: "alt", //TODO: add alt text
    isImageLeft: false,
    goToSectionName: "Zobacz galerię",
    goToSectionURL: "/galeria-zdjec?page=trzymaj-poziom&section=section4", //TODO: update URL
  },
];

const TrzymajPoziom = () => {
  return (
    <Layout>
      <PageHero
        title="Trzymaj poziom"
        subtitle="Sprawdzone rozwiązania dla fachowców"
        backgroundImage={heroFloors}
        isBacgkgroundForTextDark={true}
        introTitle="Tytuł do Trzymaj Poziom"
        introOne="TODO Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
              sapiente explicabo consequatur laborum amet esse quaerat magnam
              blanditiis quod deserunt inventore eligendi deleniti obcaecati
              quia cupiditate vero consequuntur praesentium quis eveniet,
              perspiciatis officia nisi fugiat natus laudantium."
      />

      {/* Door Systems Gallery */}
      <section className="section-padding bg-section-alt">
        <div className="container-custom">
          {keepStandards.map((section, index) => (
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

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-sansTitle font-semibold text-primary-foreground mb-6">
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
