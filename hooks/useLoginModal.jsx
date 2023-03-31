import React from 'react'
import { create } from 'zustand'

const useLoginModal = create((set) => ({
  isOpen: false,
  onOpen: () => {console.log(`open login`); set({ isOpen: true })},
  onClose: () => set({ isOpen: false })
}))

export default useLoginModal;