import ImageGallery from '@/components/ImageGallery'

import doorsHandle from "@/assets/doors-handle.png";
import doorsHidden from "@/assets/doors-hidden.jpg";
import doorsClassic from "@/assets/doors-classic.jpg";
import doorsSliding from "@/assets/doors-sliding.jpg";
import doorsGlass from "@/assets/doors-glass.jpg";

const images: string[] = [
  doorsHandle,
  doorsHidden,
  doorsClassic,
  doorsSliding,
  doorsGlass,
];

const OtwierajGaleria5 = () => {
  return (
    <ImageGallery images={images} />
  )
}

export default OtwierajGaleria5