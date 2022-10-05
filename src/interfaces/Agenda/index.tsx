
export interface IClient {
    id?: string;
    full_name: string;
    email: string;
    phone: string;
    created_at?: string;
}

export interface IContact {
    id?: string;
    full_name: string;
    email: string;
    phone: string;
}

export interface IClientUpdate {
    id?: string;
    full_name: string;
    email: string;
    phone: string;
}

export interface IContactUpdate {
    full_name: string;
    email: string;
    phone: string;
}

export interface IId {
    id: any;
}

export interface AgendaContextInterface {
    clientsList: any; 
    setClientsList: any;
    newClient: (data: IClient) => Promise<void>
    getClientList: () => Promise<void>
    updateClient: (id: string, data: IClientUpdate) => Promise<void>
    deleteCLient: (id: string) => Promise<void>
    newContact: (id: string, data: IContact) => Promise<void>
    updateContact: (id: string, data: IContactUpdate) => Promise<void>
    deleteContact: (id: string) => Promise<void>
}
export interface AgendaProviderProps {
    children: React.ReactNode
}