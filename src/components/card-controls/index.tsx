import { Card, Input } from "pixel-retroui";
import { useStore } from "../../store/hooks";
export const CardControls = () => {
    const { name, setName } = useStore();
    if (!setName) return null;

    return <Card className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <Input id="name" placeholder="Pikachu" value={name} onChange={(e) => setName(e.target.value)} />
    </Card>
};
