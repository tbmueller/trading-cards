import { create } from "zustand";
import { combine } from "zustand/middleware";

export const useStore = create(
  combine(
    {
      name: "",
    },
    (set) => ({
      setName: (name: string) => set({ name }),
    })
  )
);
