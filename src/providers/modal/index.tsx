import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import api from "../../api";
import { IClient, IContact } from "../../interfaces/Agenda";

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
    modalUpdateClient: any;
    setModalUpdateClient: any;
    modalContactSection:any;
    setModalContactSection: any;
    contactsByClientHandler: any;
    setContactsByClientHandler: any;
    modalNewContact: any; 
    setModalNewContact: any;
    contactHandler: any; 
    setContactHandler: any;
    modalUpdateContact: any;
    setModalUpdateContact: any;
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
    const [modalUpdateClient, setModalUpdateClient] = useState(false)
    const [modalContactSection, setModalContactSection] = useState(false)
    const [modalNewContact, setModalNewContact] = useState(false)
    const [modalUpdateContact, setModalUpdateContact] = useState(false)

    const [clientHandler, setClientHandler] = useState<IClient>()
    const [contactsByClientHandler, setContactsByClientHandler] = useState([])
    const [contactHandler, setContactHandler] = useState<IContact>()


    return (
        <ModalContext.Provider value={{modalDeleteUserIsOpen, setModalDeleteUserIsOpen, modalUpdatePasswordIsOpen, setModalUpdatePasswordIsOpen, modalNewClientIsOpen, setModalNewClientIsOpen, modalDeleteClient, setModalDeleteClient, clientHandler, setClientHandler, modalUpdateClient, setModalUpdateClient, modalContactSection, setModalContactSection, contactsByClientHandler, setContactsByClientHandler, modalNewContact, setModalNewContact, contactHandler, setContactHandler, modalUpdateContact, setModalUpdateContact}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext)