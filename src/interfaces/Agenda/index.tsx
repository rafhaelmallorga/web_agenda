
export interface IClient {
    id?: string;
    full_name: string;
    email: string;
    phone: string;
    created_at?: string;
}

export interface AgendaContextInterface {
    clientsList: any; 
    setClientsList: any;
    newClient: (data: IClient) => Promise<void>
    getClientList: () => Promise<void>
}
export interface AgendaProviderProps {
    children: React.ReactNode
}