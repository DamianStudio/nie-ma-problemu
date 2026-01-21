import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { MapPin, Mail, Phone, Clock, Facebook, Instagram } from "lucide-react";
import heroContact from "@/assets/hero-contact.jpg";

const Kontakt = () => {
  return (
    <Layout>
      <PageHero
        title="Kontakt z nami"
        subtitle="Porozmawiajmy o Twoim projekcie"
        backgroundImage={heroContact}
      />

      {/* Contact Info Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <SectionHeader
                title="Dane kontaktowe"
              />

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Adres</h3>
                    <p className="text-muted-foreground">
                      ul. Wolności 16<br />
                      Gdynia, Polska
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:kontakt@niemaproblemu.com.pl"
                      className="text-primary hover:underline"
                    >
                      kontakt@niemaproblemu.com.pl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Godziny otwarcia</h3>
                    <p className="text-muted-foreground">
                      Poniedziałek - Piątek: 9:00 - 17:00<br />
                      Sobota: 10:00 - 14:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-10">
                <h3 className="font-semibold text-foreground mb-4">Obserwuj nas</h3>
                <div className="flex gap-4">
                  <a
                    href="https://facebook.com/niemaproblemugdynia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://instagram.com/niemaproblemugdynia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Info Card */}
            <div className="bg-section-alt rounded-lg p-8">
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-6">
                Dlaczego warto nas odwiedzić?
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Bezpłatna wycena i konsultacja projektowa</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Showroom z ekspozycją drzwi i materiałów</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Doradztwo w doborze kolorów i wzorów</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Próbki materiałów do obejrzenia</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Parking dla klientów</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-section-alt">
        <div className="container-custom">
          <SectionHeader
            title="Jak do nas trafić?"
            subtitle="Znajdujemy się w centrum Gdyni, w dogodnej lokalizacji z łatwym dojazdem"
            centered
          />

          <div className="rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2314.6751595261994!2d18.53881397684099!3d54.51838097265935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda73817f73adf%3A0x57f7c8d93e3d5c7a!2sWolno%C5%9Bci%2016%2C%2081-327%20Gdynia!5e0!3m2!1spl!2spl!4v1706000000000!5m2!1spl!2spl"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokalizacja Nie Ma Problemu - ul. Wolności 16, Gdynia"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary-foreground mb-6">
            Masz pytania? Zadzwoń lub napisz!
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Chętnie odpowiemy na wszystkie pytania i pomożemy w realizacji Twojego projektu.
          </p>
          <a
            href="mailto:kontakt@niemaproblemu.com.pl"
            className="inline-flex items-center gap-2 bg-card text-foreground hover:bg-card/90 px-8 py-4 rounded-md font-medium transition-all duration-200"
          >
            <Mail className="w-5 h-5" />
            Napisz do nas
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Kontakt;
