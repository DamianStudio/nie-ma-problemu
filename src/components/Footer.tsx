import { Link } from "react-router-dom";
import { MapPin, Mail, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-4">
              Nie Ma Problemu
            </h3>
            <p className="text-footer-foreground/70 mb-6">
              Tworzymy piękne i funkcjonalne wnętrza. Drzwi, podłogi, tapety i
              sztukateria z montażem.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-footer-foreground/80">
                  ul. Wolności 16, Gdynia
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:kontakt@niemaproblemu.com.pl"
                  className="text-footer-foreground/80 hover:text-primary transition-colors"
                >
                  kontakt@niemaproblemu.com.pl
                </a>
              </div>
            </div>
          </div>

          {/* Social & Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Obserwuj nas</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://facebook.com/niemaproblemugdynia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-footer-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/niemaproblemugdynia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-footer-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            {/* Quick Links */}
            <div className="space-y-2">
              <Link
                to="/kontakt"
                className="block text-footer-foreground/70 hover:text-primary transition-colors"
              >
                Kontakt z nami
              </Link>
              <Link
                to="/ogladaj"
                className="block text-footer-foreground/70 hover:text-primary transition-colors"
              >
                Nasze realizacje
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-footer-foreground/20 text-center">
          <p className="text-footer-foreground/50 text-sm">
            © 2026 studio-www. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
