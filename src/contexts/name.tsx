import { createContext } from "react";

export const NameContext = createContext<{ name: string, setName: React.Dispatch<React.SetStateAction<string>> | null}>({ name: "", setName: null });
