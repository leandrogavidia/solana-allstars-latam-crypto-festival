"use client"

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface ModalInterface {
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const ModalContext = createContext({} as ModalInterface);

function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={{
      isOpen,
      setIsOpen
    }}>
      {children}
    </ModalContext.Provider>
  );
}

export { ModalContext, ModalProvider };