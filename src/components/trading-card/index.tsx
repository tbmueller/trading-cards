import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { gradientClassName } from "../../util/gradient-classname";
import { CARD_STYLES } from "./card-styles";
import { useStore } from "../../store/hooks";

interface TradingCardProps {
    ref: React.RefObject<HTMLDivElement | null>;
}

export const TradingCard = ({ ref }: TradingCardProps) => {
    const { name, type } = useStore();
    const { icon, iconColor } = CARD_STYLES[type];
    const gradientClass = gradientClassName(type);
    return (
        <div ref={ref}>
            <div className={`flex border-yellow-500 border-4 border-solid rounded-md min-h-[400px] min-w-[300px] ${gradientClass}`}>
                <div className="flex border-white border-solid border-2 rounded-sm min-h-full min-w-full">
                    <div className="m-2 p-2 h-min w-full flex gap-2 items-center bg-zinc-200 rounded-md">
                        <FontAwesomeIcon icon={icon} className={iconColor} />
                        {name}
                    </div>
                </div>
            </div>
        </div>
    );
};
