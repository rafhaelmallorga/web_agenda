import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";

export interface ModalContextInterface {
    modalDeleteUserIsOpen: any;
    setModalDeleteUserIsOpen: any;
}

export interface ModalProviderProps {
    children: React.ReactNode
}

export const ModalContext = createContext<ModalContextInterface>({} as ModalContextInterface)

export const ModalProvider = ({children}: ModalProviderProps) => {
    const [modalDeleteUserIsOpen, setModalDeleteUserIsOpen] = useState(false)

    return (
        <ModalContext.Provider value={{modalDeleteUserIsOpen, setModalDeleteUserIsOpen}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext)