import { create } from "zustand"

interface RegisterModalProps {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

export const useRegisterModal = create<RegisterModalProps>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))