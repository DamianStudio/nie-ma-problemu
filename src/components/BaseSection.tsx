import { Link } from "react-router-dom";
import { ArrowRight, Shield, Award, Users } from "lucide-react";

interface BaseSectionProps {
  baseImage: string;
  altImage: string;
  isImageLeft: boolean;
  surtitle?: string;
  title: string;
  description: string;
  goToSectionName?: string;
  goToSectionURL?: string;
  goToSectionBg?: boolean;
}

const BaseSection = ({
  baseImage,
  altImage,
  isImageLeft,
  surtitle,
  title,
  description,
  goToSectionName,
  goToSectionURL,
  goToSectionBg,
}: BaseSectionProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-20">
      <div
        className={`${isImageLeft ? "" : "lg:order-2"} overflow-hidden rounded-lg shadow-xl`}
      >
        <img
          src={baseImage}
          alt={altImage}
          className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div>
        {surtitle && (
          <span className="text-accent font-medium text-lg tracking-wider uppercase mb-2 block">
            {surtitle}
          </span>
        )}
        <h3 className="text-2xl md:text-3xl font-sansTitle font-semibold text-foreground mb-4">
          {title}
        </h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        {goToSectionName && (
          <Link
            to={goToSectionURL}
            className={`inline-flex items-center gap-2 font-medium hover:gap-3 transition-all duration-200 ${goToSectionBg ? "inline-flex items-center gap-2 btn-primary" : "text-primary"}`}
          >
            {goToSectionName}
            <ArrowRight className="w-5 h-5" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default BaseSection;
