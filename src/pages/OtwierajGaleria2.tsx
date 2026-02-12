import ImageGallery from '@/components/ImageGallery'

import doorsSliding from "@/assets/doors-sliding.jpg";
import doorsGlass from "@/assets/doors-glass.jpg";
import doorsHandle from "@/assets/doors-handle.png";
import doorsHidden from "@/assets/doors-hidden.jpg";
import doorsClassic from "@/assets/doors-classic.jpg";

const images: string[] = [
  doorsSliding,
  doorsGlass,
  doorsHandle,
  doorsHidden,
  doorsClassic,
];

const OtwierajGaleria2 = () => {
  return (
    <ImageGallery images={images} />
  )
}

export default OtwierajGaleria2