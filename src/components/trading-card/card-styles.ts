import { CardType } from "../../types/card-type";
import { CardStyle } from "../../types/card-style";
import { faDroplet, faFeather, faFire, faLeaf } from "@fortawesome/free-solid-svg-icons";

export const CARD_STYLES: Record<CardType, CardStyle<CardType>> = {
  fire: {
    icon: faFire,
    iconColor: "text-yellow-500",
    bgGradientColors: ["red-500", "yellow-200"],
  },
  water: {
    icon: faDroplet,
    iconColor: "text-blue-500",
    bgGradientColors: ["blue-500", "blue-200"],
  },
  grass: {
    icon: faLeaf,
    iconColor: "text-green-500",
    bgGradientColors: ["green-500", "green-200"],
  },
  flying: {
    icon: faFeather,
    iconColor: "text-sky-400",
    bgGradientColors: ["sky-400", "sky-100"],
  },
};
