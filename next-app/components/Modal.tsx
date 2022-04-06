import type { ReactNode } from 'react'

import { Dialog } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'

interface AddProductProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export default function AddProduct({
  isOpen,
  onClose,
  children,
}: AddProductProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      {isOpen && (
        <Dialog
          static
          open={isOpen}
          onClose={onClose}
          className="fixed inset-0 z-40 overflow-y-auto p-4 pt-[10vh]"
        >
          <Dialog.Overlay
            as={motion.div}
            animate={{ opacity: [0, 1], transition: { duration: 0.2 } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          {children}
        </Dialog>
      )}
    </AnimatePresence>
  )
}
