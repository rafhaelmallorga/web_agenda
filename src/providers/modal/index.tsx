import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";

export interface ModalContextInterface {
    modalDeleteUserIsOpen: any;
    setModalDeleteUserIsOpen: any;
    modalUpdatePasswordIsOpen: any;
    setModalUpdatePasswordIsOpen: any;
    modalNewClientIsOpen: any;
    setModalNewClientIsOpen: any;
}

export interface ModalProviderProps {
    children: React.ReactNode
}

export const ModalContext = createContext<ModalContextInterface>({} as ModalContextInterface)

export const ModalProvider = ({children}: ModalProviderProps) => {
    const [modalDeleteUserIsOpen, setModalDeleteUserIsOpen] = useState(false)
    const [modalUpdatePasswordIsOpen, setModalUpdatePasswordIsOpen] = useState(false)
    const [modalNewClientIsOpen, setModalNewClientIsOpen] = useState(false)

    return (
        <ModalContext.Provider value={{modalDeleteUserIsOpen, setModalDeleteUserIsOpen, modalUpdatePasswordIsOpen, setModalUpdatePasswordIsOpen, modalNewClientIsOpen, setModalNewClientIsOpen}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext)