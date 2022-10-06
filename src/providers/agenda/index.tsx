import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../../api";
import { AgendaContextInterface, AgendaProviderProps, IClient, IClientUpdate, IContact, IContactUpdate, IId } from "../../interfaces/Agenda";
import { useUser } from "../user";

export const AgendaContext = createContext<AgendaContextInterface>({} as AgendaContextInterface)

export const AgendaProvider = ({children}: AgendaProviderProps) => {
    const [clientsList, setClientsList] = useState<IClient[]>([])
    const {isLoggedIn} = useUser()

    useEffect(() => {
        if (isLoggedIn) {
            getClientList()
        }
    }, [isLoggedIn])

    const getClientList = async () => {
        api.get("/clients")
                .then(res => setClientsList(res.data))
    }

    const newClient = async (data: IClient) => {
        await api.post("/clients", data)
            .then(res => toast.success('Cliente cadastrado com sucesso.'))
            .catch((_) => toast.error('Não foi possivel criar o cliente no momento.'))
    }

    const updateClient = async (id: string, data: IClientUpdate) => {
        await api.patch(`/clients/${id}`, data)
            .then(res => toast.success("Cliente atualizado com sucesso"))
            .catch((_) => toast.error("Não foi possivel atualizar o cliente"))
    }

    const deleteCLient = async (id: string) => {
        await api.delete(`/clients/${id}`)
            .then(res => toast.success("Cliente deletado com sucesso."))
            .catch((_) => toast.error("Não foi possivel deletar o cliente pois há contatos cadastrados."))
        }

    const newContact = async (id: string, data: IContact) => {
        await api.post(`/contacts/${id}`, data)
            .then((_) => toast.success("Contato criado com sucesso."))
            .catch((_) => toast.error('Não foi possivel criar um novo contato.'))
    }

    const updateContact = async (id: string, data: IContactUpdate) => {
        await api.patch(`/contacts/info/${id}`, data)
            .then((_) => toast.success('Contato atualizado com sucesso.'))
            .catch((_) => toast.error('Não foi possivel atualizar o contato.'))
    }

    const deleteContact = async (id: string) => {
        await api.delete(`/contacts/info/${id}`)
            .then(res => toast.success('Contato deletado com sucesso.'))
            .catch((_) => toast.error('Não foi possivel deletar o contato.'))
    }

    return (
        <AgendaContext.Provider value={{clientsList, setClientsList, newClient, getClientList, updateClient, deleteCLient, newContact, updateContact, deleteContact}}>
            {children}
        </AgendaContext.Provider>
    )
}

export const useAgenda = () => useContext(AgendaContext)