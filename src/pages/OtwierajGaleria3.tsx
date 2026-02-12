import ImageGallery from '@/components/ImageGallery'

import doorsClassic from "@/assets/doors-classic.jpg";
import doorsHidden from "@/assets/doors-hidden.jpg";
import doorsSliding from "@/assets/doors-sliding.jpg";
import doorsGlass from "@/assets/doors-glass.jpg";
import doorsHandle from "@/assets/doors-handle.png";

const images: string[] = [
  doorsClassic,
    doorsHidden,
    doorsSliding,
    doorsGlass,
    doorsHandle,
];

const OtwierajGaleria3 = () => {
  return (
    <ImageGallery images={images} />
  )
}

export default OtwierajGaleria3