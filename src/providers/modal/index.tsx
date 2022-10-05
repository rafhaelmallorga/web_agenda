import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";

export interface ModalContextInterface {
    modalDeleteUserIsOpen: any;
    setModalDeleteUserIsOpen: any;
    modalUpdatePasswordIsOpen: any;
    setModalUpdatePasswordIsOpen: any;
    modalNewClientIsOpen: any;
    setModalNewClientIsOpen: any;
    modalDeleteClient: any; 
    setModalDeleteClient: any;
    clientHandler: any;
    setClientHandler: any;
}

export interface ModalProviderProps {
    children: React.ReactNode
}

export const ModalContext = createContext<ModalContextInterface>({} as ModalContextInterface)

export const ModalProvider = ({children}: ModalProviderProps) => {
    const [modalDeleteUserIsOpen, setModalDeleteUserIsOpen] = useState(false)
    const [modalUpdatePasswordIsOpen, setModalUpdatePasswordIsOpen] = useState(false)
    const [modalNewClientIsOpen, setModalNewClientIsOpen] = useState(false)
    const [modalDeleteClient, setModalDeleteClient] = useState(false)

    const [clientHandler, setClientHandler] = useState()

    return (
        <ModalContext.Provider value={{modalDeleteUserIsOpen, setModalDeleteUserIsOpen, modalUpdatePasswordIsOpen, setModalUpdatePasswordIsOpen, modalNewClientIsOpen, setModalNewClientIsOpen, modalDeleteClient, setModalDeleteClient, clientHandler, setClientHandler}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext)