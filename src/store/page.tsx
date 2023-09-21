import { create } from 'zustand'

interface BearState {
  bears: number
  nuts: string[]
  increasePopulation: () => void
  addNuts: (nut: string) => void
}

export const useBearStore = create<BearState>()((set) => ({
  bears: 0,
  nuts: ['acorn', 'chestnut', 'peanut'],
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  addNuts: (nut: string) => set((state) => ({ nuts: [...state.nuts, nut] })),
  removeAllBears: () => set({ bears: 0 }),
}))
