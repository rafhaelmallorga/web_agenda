
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
}
export interface AgendaProviderProps {
    children: React.ReactNode
}