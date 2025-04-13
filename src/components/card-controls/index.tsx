import { Card, Input } from "pixel-retroui";
import { useStore } from "../../store/hooks";
import { TypeDropdown } from "./type-dropdown";
export const CardControls = () => {
    const { name, setName } = useStore();
    if (!setName) return null;

    return <Card className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <Input id="name" placeholder="Pikachu" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="flex flex-col gap-1">
            <label>Type</label>
            <TypeDropdown className="w-full px-1 my-1" />
        </div>
    </Card>
};
