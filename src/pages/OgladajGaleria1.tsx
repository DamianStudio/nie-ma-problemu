import ImageGallery from '@/components/ImageGallery'

import doorsSliding from "@/assets/doors-sliding.jpg";
import doorsGlass from "@/assets/doors-glass.jpg";
import doorsHandle from "@/assets/doors-handle.png";
import DekorujGaleria1 from './DekorujGaleria1';

const images: string[] = [
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