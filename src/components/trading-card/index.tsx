import { NameContext } from "../../contexts/name";
import { useContext } from "react";

interface TradingCardProps {
    ref: React.RefObject<HTMLDivElement | null>;
}

export const TradingCard = ({ ref }: TradingCardProps) => {
    const { name } = useContext(NameContext);
    return (
        <div ref={ref} className="bg-transparent">
            <div className="border-yellow-500 border-4 border-solid rounded-md bg-white min-h-[400px] min-w-[300px]">
                {name}
                hello
            </div>
        </div>
    );
};
