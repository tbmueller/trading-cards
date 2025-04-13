import { CARD_STYLES } from "../../trading-card/card-styles";
import { CardType } from "../../../types/card-type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { capitalize } from "../../../util/capitalize";

export const Option = ({ type }: { type: CardType }) => {
  return (
    <div className="flex items-center gap-2">
      <FontAwesomeIcon icon={CARD_STYLES[type].icon} />
      {capitalize(type)}
    </div>
  )
};
