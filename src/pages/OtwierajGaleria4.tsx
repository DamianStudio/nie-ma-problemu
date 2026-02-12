import ImageGallery from '@/components/ImageGallery'

import doorsGlass from "@/assets/doors-glass.jpg";
import doorsHidden from "@/assets/doors-hidden.jpg";
import doorsClassic from "@/assets/doors-classic.jpg";
import doorsSliding from "@/assets/doors-sliding.jpg";
import doorsHandle from "@/assets/doors-handle.png";

const images: string[] = [
  doorsGlass,
  doorsHidden,
  doorsClassic,
  doorsSliding,
  doorsHandle,
];

const OtwierajGaleria4 = () => {
  return (
    <ImageGallery images={images} />
  )
}

export default OtwierajGaleria4