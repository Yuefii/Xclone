import { create } from "zustand"

interface LoginModalProps {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

export const useLoginModal = create<LoginModalProps>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))