import { NameContext } from "../../contexts/name";
import { useContext } from "react";

export const TradingCard = () => {
    const { name } = useContext(NameContext);
    return (
        <div className="border-yellow-500 border-4 border-solid rounded-md bg-white min-h-[400px] min-w-[300px]">
            {name}
            hello
        </div>
    );
};
