import ImageGallery from '@/components/ImageGallery'

import doorsHandle from "@/assets/doors-handle.png";
import doorsSliding from "@/assets/doors-sliding.jpg";
import doorsGlass from "@/assets/doors-glass.jpg";

const images: string[] = [
  doorsHandle,
  doorsSliding,
  doorsGlass,
];

const DekorujGaleria3 = () => {
  return (
    <ImageGallery images={images} />
  )
}

export default DekorujGaleria3