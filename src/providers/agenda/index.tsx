import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../../api";
import { AgendaContextInterface, AgendaProviderProps, IClient } from "../../interfaces/Agenda";
import { useUser } from "../user";

export const AgendaContext = createContext<AgendaContextInterface>({} as AgendaContextInterface)

export const AgendaProvider = ({children}: AgendaProviderProps) => {
    const [clientsList, setClientsList] = useState<IClient[]>([])
    const {isLoggedIn} = useUser()

    useEffect(() => {
        if (isLoggedIn) {
            api.get("/clients")
                .then(res => setClientsList(res.data))
                .catch((_) => toast.error('Não foi possivel acessar a lista de clientes.'))
        }
    }, [isLoggedIn])

    return (
        <AgendaContext.Provider value={{clientsList, setClientsList}}>
            {children}
        </AgendaContext.Provider>
    )
}

export const useAgenda = () => useContext(AgendaContext)