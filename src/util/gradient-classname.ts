import { CardType } from "../types/card-type";

const GRADIENT_CLASSES: Record<CardType, string> = {
  fire: 'bg-gradient-to-br from-red-500 to-yellow-200',
  water: 'bg-gradient-to-br from-blue-500 to-blue-200',
  grass: 'bg-gradient-to-br from-green-500 to-green-200',
  flying: 'bg-gradient-to-br from-blue-500 to-blue-200',
};

export const gradientClassName = (type: CardType) => {
  return GRADIENT_CLASSES[type] || 'bg-gradient-to-br from-gray-500 to-gray-700';
};
