import ImageGallery from '@/components/ImageGallery'

import doorsHidden from "@/assets/doors-hidden.jpg";
import doorsClassic from "@/assets/doors-classic.jpg";

const images: string[] = [
  doorsHidden,
  doorsClassic,
];

const OtwierajGaleria5 = () => {
  return (
    <ImageGallery images={images} />
  )
}

export default OtwierajGaleria5