import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  reverse?: boolean;
}

const ServiceCard = ({
  title,
  description,
  image,
  link,
  reverse = false,
}: ServiceCardProps) => {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${reverse ? "lg:flex-row-reverse" : ""}`}
    >
      <div className={`${reverse ? "lg:order-2" : ""}`}>
        <div className="overflow-hidden rounded-lg shadow-xl">
          <img
            src={image}
            alt={title}
            className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      <div className={`${reverse ? "lg:order-1" : ""}`}>
        <h3 className="text-2xl md:text-3xl font-sansTitle font-semibold text-foreground mb-4">
          {title}
        </h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        <Link
          to={link}
          className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-200"
        >
          Sprawdź ofertę
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
