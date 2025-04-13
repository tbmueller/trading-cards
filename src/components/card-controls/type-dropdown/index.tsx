import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "pixel-retroui";
import { CARD_STYLES } from "../../trading-card/card-styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardType } from "../../../types/card-type";
import { useStore } from "../../../store/hooks";

export const TypeDropdown = ({ className }: { className?: string }) => {
  const { type, setType } = useStore();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={className}>{type}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-full">
        {Object.keys(CARD_STYLES).map((type: string) => (
          <div key={type} className="w-full" onClick={() => setType(type as CardType)}>
            <DropdownMenuItem className="w-full"><FontAwesomeIcon icon={CARD_STYLES[type as CardType].icon} /> {type}</DropdownMenuItem>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
