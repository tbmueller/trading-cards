import { NameContext } from "../../contexts/name";
import { useContext } from "react";

export const TradingCard = () => {
    const { name } = useContext(NameContext);
    return (
        <div className="border-5 border-yellow-500 rounded-md">
            {name}
        </div>
    );
};