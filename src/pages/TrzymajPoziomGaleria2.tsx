import ImageGallery from '@/components/ImageGallery'

import doorsSliding from "@/assets/doors-sliding.jpg";
import doorsGlass from "@/assets/doors-glass.jpg";
import doorsHandle from "@/assets/doors-handle.png";

const images: string[] = [
    doorsSliding,
    doorsGlass,
    doorsHandle,
];

const TrzymajPoziomGaleria2 = () => {
  return (
    <ImageGallery images={images} />
  )
}

export default TrzymajPoziomGaleria2