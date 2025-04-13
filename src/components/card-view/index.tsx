import { useRef } from "react";
import { TradingCard } from "../trading-card"
import { Button } from "pixel-retroui";
import { downloadImage } from "./download-image";

export const CardView = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <TradingCard ref={cardRef} />
      <Button onClick={() => downloadImage(cardRef)}>Download card</Button>
    </>
  )
}