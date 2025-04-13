import { create } from "zustand";
import { combine } from "zustand/middleware";
import { CardType } from "../types/card-type";

export const useStore = create(
  combine(
    {
      name: "",
      type: "fire" as CardType,
    },
    (set) => ({
      setName: (name: string) => set({ name }),
      setType: (type: CardType) => set({ type }),
    })
  )
);
