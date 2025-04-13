import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "pixel-retroui";
import { CARD_STYLES } from "../../trading-card/card-styles";
import { CardType } from "../../../types/card-type";
import { useStore } from "../../../store/hooks";
import { JSX, useMemo } from "react";
import { Option } from "./option";
export const TypeDropdown = ({ className }: { className?: string }) => {
  const { type, setType } = useStore();

  // TODO: make this nicer
  const options: Record<CardType, JSX.Element> = useMemo(() => ({
    fire: <Option type="fire" />,
    water: <Option type="water" />,
    grass: <Option type="grass" />,
    flying: <Option type="flying" />,
  }), []);

  return (
    <DropdownMenu className="px-1">
      <DropdownMenuTrigger className={className}>{options[type]}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-full">
        {Object.keys(CARD_STYLES).map((typeKey: string) => (
          <div key={typeKey} onClick={() => setType(typeKey as CardType)}>
            <DropdownMenuItem className="rounded-md">{options[typeKey as CardType]}</DropdownMenuItem>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
