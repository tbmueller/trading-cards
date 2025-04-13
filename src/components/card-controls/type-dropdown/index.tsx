import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "pixel-retroui";
import { CARD_STYLES } from "../../trading-card/card-styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardType } from "../../../types/card-type";

export const TypeDropdown = ({ className }: { className?: string }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={className}>Select type</DropdownMenuTrigger>
      <DropdownMenuContent className="w-full">
        {Object.keys(CARD_STYLES).map((type: string) => (
          <DropdownMenuItem key={type} className="w-full"><FontAwesomeIcon icon={CARD_STYLES[type as CardType].icon} /> {type}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}