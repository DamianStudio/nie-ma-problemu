import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { ArrowRight } from "lucide-react";
import heroDoors from "@/assets/hero-doors.png";
import doorsHidden from "@/assets/doors-hidden.jpg";
import doorsClassic from "@/assets/doors-classic.jpg";
import doorsSliding from "@/assets/doors-sliding.jpg";
import doorsGlass from "@/assets/doors-glass.jpg";
import doorsHandle from "@/assets/doors-handle.png";
import BaseSection from "@/components/BaseSection";

const doorTypes = [
  {
    title: "Drzwi z ukrytą ościeżnicą",
    description:
      "Minimalistyczny design z idealnie gładką powierzchnią ściany. Nowoczesne rozwiązanie dla wymagających.",
    baseImage: doorsHidden,
    altImage: "Drzwi z ukrytą ościeżnicą",
    isImageLeft: true,
    goToSectionName: "Zobacz galerię",
    goToSectionURL:
      "/galeria-zdjec?page=otwieraj&title=drzwi-z-ukryta-oscieznica",
  },
  {
    title: "Drzwi przesuwne",
    description:
      "Oszczędność miejsca i elegancki wygląd. Idealne do małych pomieszczeń i nowoczesnych aranżacji.",
    baseImage: doorsSliding,
    altImage: "Drzwi przesuwne",
    isImageLeft: false,
    goToSectionName: "Zobacz galerię",
    goToSectionURL: "/galeria-zdjec?page=otwieraj&title=drzwi-przesuwne",
  },
  {
    title: "Drzwi klasyczne",
    description:
      "Ponadczasowy styl z tradycyjną ościeżnicą. Doskonałe do klasycznych i eleganckich wnętrz.",
    baseImage: doorsClassic,
    altImage: "Drzwi klasyczne",
    isImageLeft: true,
    goToSectionName: "Zobacz galerię",
    goToSectionURL: "/galeria-zdjec?page=otwieraj&title=drzwi-klasyczne",
  },
  {
    title: "Rozwiązania szklane",
    description:
      "Przeszklenia i drzwi szklane, które dodają przestrzeni i światła każdemu wnętrzu.",
    baseImage: doorsGlass,
    altImage: "Drzwi szklane",
    isImageLeft: false,
    goToSectionName: "Zobacz galerię",
    goToSectionURL: "/galeria-zdjec?page=otwieraj&title=drzwi-szklane",
  },
];

const Otwieraj = () => {
  return (
    <Layout>
      <PageHero
        title="Otwieraj"
        subtitle="Drzwi i klamki, które otwierają Twoje wnętrze na nowy styl"
        backgroundImage={heroDoors}
        isBacgkgroundForTextDark={true}
        introTitle="Systemy drzwiowe – nowoczesne i praktyczne"
        introOne="Wybór drzwi to decyzja, która wpływa nie tylko na funkcjonalność,
              ale i styl całego wnętrza. Oferujemy szeroką gamę drzwi
              wewnętrznych – od klasycznych modeli po innowacyjne rozwiązania z
              ukrytą ościeżnicą, które zapewniają minimalistyczny, elegancki
              efekt."
        introTwo="Innowacyjne systemy drzwiowe, w tym drzwi z ukrytą ościeżnicą, to
              zdecydowanie nasz konik. Jednak nie na tym kończy się nasza oferta
              drzwiowa. Posiadamy szeroki wachlarz drzwi wewnętrznych, zarówno
              klasycznych, jak i nowoczesnych."
      />

      {/* Door Types Gallery */}
      <section className="section-padding bg-section-alt">
        <div className="container-custom">
          {doorTypes.map((section, index) => (
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

      {/* Handles Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <BaseSection
            baseImage={doorsHandle}
            altImage="klamka"
            isImageLeft={false}
            title="Klamki nowoczesne i minimalistyczne"
            description="Klamki dobieramy nie tylko wizualnie, ale i technicznie – do
                drzwi z ukrytą ościeżnicą, szklanych i klasycznych. Oferujemy
                też pełne zestawy z rozetami, wkładkami, pochwyty do drzwi
                przesuwnych oraz rozwiązania bezklamkowe (push-to-open) dla
                wnętrz ultraminimalistycznych."
            goToSectionName="Zobacz galerię klamek"
            goToSectionURL="/galeria-zdjec?page=otwieraj&title=klamki-nowoczesne-i-minimalistyczne"
            goToSectionBg
          />
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

export default Otwieraj;
