import ImageGallery from '@/components/ImageGallery'

import doorsGlass from "@/assets/doors-glass.jpg";
import doorsHandle from "@/assets/doors-handle.png";
import doorsSliding from "@/assets/doors-sliding.jpg";

const images: string[] = [
  doorsGlass,
  doorsHandle,
  doorsSliding,
];

const DekorujGaleria2 = () => {
  return (
    <ImageGallery images={images} />
  )
}

export default DekorujGaleria2 