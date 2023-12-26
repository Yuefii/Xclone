import { create } from 'zustand'

interface LoginModalStore {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

export const useLoginModal = create<LoginModalStore>((set) => ({
    isOpen: true, onOpen: () => set({ isOpen: true }), onClose: () => set({ isOpen: false })
}))