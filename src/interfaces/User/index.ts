export interface IUserLogin {
    email: string;
    password: string;
}
export interface IUserRegister {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    passwordConfirmation?: string;
}
export interface IUserInfos {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
}

export interface IUserPasswordForm {
    password: string;
    passwordConfirmation?: string;
}

export interface IUserPassword {
    password: string;
    passwordConfirmation?: string;
}
export interface UserContextInterface {
    isLoggedIn: any;
    setIsLoggedIn: any;
    userInfos: any;
    setUserInfos: any;
    login: (data: IUserLogin) => Promise<void>
    registerUser: (data: IUserRegister) => Promise<void>
    deleteUser: () => Promise<void>
    updateUser: (data: IUserInfos) => Promise<void>
    updateUserPassword: (data: IUserPassword) => Promise<void>
}
export interface UserProviderProps {
    children: React.ReactNode
}