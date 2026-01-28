import { useState, useRef, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { cn, extractImageNameFromPath } from "@/lib/utils";

import doorsHidden from "@/assets/doors-hidden.jpg";
import doorsClassic from "@/assets/doors-classic.jpg";
import doorsSliding from "@/assets/doors-sliding.jpg";
import doorsGlass from "@/assets/doors-glass.jpg";
import doorsHandle from "@/assets/doors-handle.png";

const minSwipeDistance = 50;

const GaleriaZdjec = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const page = `/${searchParams.get("page") ?? ""}`;
  const title = searchParams.get("title") ?? "";

  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // TODO podpiąć firebase storage i dynamicznie ładować obrazy ze storage na podstawie query paramów
  useEffect(() => {
    console.log("Page from query param:", page);
    console.log("Title from query param:", title);
    const galleryImagesMOCK = [
      doorsHidden,
      doorsClassic,
      doorsSliding,
      doorsGlass,
      doorsHidden,
      doorsClassic,
      doorsSliding,
      doorsGlass,
      doorsHandle,
    ];
    setGalleryImages(galleryImagesMOCK);
  }, [title, page]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1,
    );
  }, [galleryImages.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1,
    );
  }, [galleryImages.length]);

  const goToImage = (index: number) => {
    setCurrentIndex(index);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "Escape") {
        navigate(page);
      }
    },
    [goToPrevious, goToNext, navigate, page],
  );

  return (
    <Layout>
      <div
        className="min-h-screen bg-background py-8 px-4"
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <div className="container-custom">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => navigate(page)}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
              <span className="hidden sm:inline">Zamknij</span>
            </button>
          </div>

          {/* Main Image Display */}
          <div className="relative mb-6">
            <div
              className="relative aspect-[16/10] md:aspect-[16/9] w-full overflow-hidden rounded-lg bg-muted"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <img
                src={galleryImages[currentIndex]}
                alt={extractImageNameFromPath(galleryImages[currentIndex])}
                className="w-full h-full object-cover transition-opacity duration-300"
              />

              {/* Image Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6">
                <p className="text-white/80 text-sm mt-1">
                  {currentIndex + 1} / {galleryImages.length}
                </p>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-foreground p-2 md:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Poprzednie zdjęcie"
              >
                <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-foreground p-2 md:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Następne zdjęcie"
              >
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            {/* Swipe hint for mobile */}
            <p className="text-center text-muted-foreground text-sm mt-2 md:hidden">
              Przesuń palcem, aby zmienić zdjęcie
            </p>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-5 gap-2 md:gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={cn(
                  "relative aspect-square overflow-hidden rounded-md transition-all duration-200",
                  currentIndex === index
                    ? "ring-2 ring-primary ring-offset-2 ring-offset-background opacity-100"
                    : "opacity-60 hover:opacity-100",
                )}
                aria-label={`Pokaż ${image}`}
                aria-current={currentIndex === index ? "true" : "false"}
              >
                <img
                  src={image}
                  alt={extractImageNameFromPath(image)}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Keyboard navigation hint */}
          <p className="text-center text-muted-foreground text-sm mt-6 hidden md:block">
            Użyj strzałek ← → do nawigacji, ESC aby zamknąć
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default GaleriaZdjec;
