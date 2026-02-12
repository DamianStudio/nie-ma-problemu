import ImageGallery from '@/components/ImageGallery'

import doorsHidden from "@/assets/doors-hidden.jpg";
import doorsClassic from "@/assets/doors-classic.jpg";
import doorsSliding from "@/assets/doors-sliding.jpg";
import doorsGlass from "@/assets/doors-glass.jpg";
import doorsHandle from "@/assets/doors-handle.png";

const images: string[] = [
    doorsHidden,
    doorsClassic,
    doorsSliding,
    doorsGlass,
    doorsHandle,
];

const OgladajGaleria1 = () => {
  return (
    <ImageGallery images={images} />
  )
}

export default OgladajGaleria1