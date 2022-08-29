import create from "zustand";

type BearState = {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
  removeNBears: (n: number) => void;
};

export const useBearStore = create<BearState>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  removeNBears: (n) => set((state) => ({ bears: state.bears - n })),
}));
