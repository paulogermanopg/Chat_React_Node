import styled, { css } from "styled-components";

type CarouselImageProps = {
  position: "center" | "left" | "right" | "hidden";
};

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  perspective: 1000px;
`;

const positionStyles = {
  center: css`
    transform: translateX(0) scale(1);
    z-index: 2;
    opacity: 1;
  `,
  left: css`
    transform: translateX(-50%) scale(0.8);
    z-index: 1;
    opacity: 0.5;
  `,
  right: css`
    transform: translateX(50%) scale(0.8);
    z-index: 1;
    opacity: 0.5;
  `,
  hidden: css`
    transform: translateX(100%) scale(0.8);
    z-index: 0;
    opacity: 0;
  `,
};

export const CarouselImage = styled.img<CarouselImageProps>`
  position: absolute;
  max-width: 60%;
  max-height: 80%;
  border-radius: 10px;
  transition: transform 0.8s ease, opacity 0.8s ease, z-index 0.8s ease;

  ${({ position }) => positionStyles[position]};
`;
