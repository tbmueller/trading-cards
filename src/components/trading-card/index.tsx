import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { gradientClassName } from "../../util/radial-gradient-classname";
import { CARD_STYLES } from "./card-styles";
import { useStore } from "../../store/hooks";

interface TradingCardProps {
    ref: React.RefObject<HTMLDivElement | null>;
}

export const TradingCard = ({ ref }: TradingCardProps) => {
    const { name } = useStore();
    const type = "fire";
    const { icon, iconColor } = CARD_STYLES[type];
    return (
        <div ref={ref}>
            <div className={`flex border-yellow-500 border-4 border-solid rounded-md min-h-[400px] min-w-[300px] ${gradientClassName(type)}`}>
                <div className="flex border-white border-solid border-2 rounded-sm min-h-full min-w-full">
                    <div className="m-2 h-min w-full flex gap-1 bg-zinc-200 rounded-md">
                        <FontAwesomeIcon icon={icon} className={`${iconColor} p-1`} />
                        {name}
                    </div>
                </div>
            </div>
        </div>
    );
};
