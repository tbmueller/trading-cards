import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { CardType } from "./card-type";

export type CardStyle<T extends CardType> = {
  typeName?: Capitalize<T>;
  icon: IconDefinition;
  iconColor: string;
  bgGradientColors: [string, string];
};
