import { useState, useEffect } from "react";
import * as S from "./styles";
import image1 from "../../assets/images/001.jpg";
import image2 from "../../assets/images/002.jpg";
import image3 from "../../assets/images/003.jpg";

const images = [image1, image2, image3];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getPosition = (index: number) => {
    if (index === currentIndex) return "center";
    if (index === (currentIndex - 1 + images.length) % images.length)
      return "left";
    if (index === (currentIndex + 1) % images.length) return "right";
    return "hidden";
  };

  return (
    <S.CarouselContainer>
      {images.map((image, index) => (
        <S.CarouselImage
          key={index}
          src={image}
          position={getPosition(index)}
        />
      ))}
    </S.CarouselContainer>
  );
}
