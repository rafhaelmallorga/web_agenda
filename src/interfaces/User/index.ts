export interface IUserLogin {
    email: string;
    password: string;
}
export interface IUserRegister {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}
export interface UserContextInterface {
    isLoggedIn: any;
    setIsLoggedIn: any
    login: (data: IUserLogin) => Promise<void>
    register: (data: IUserRegister) => Promise<void>
}
export interface UserProviderProps {
    children: React.ReactNode
}