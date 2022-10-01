import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
interface UserContextInterface {
    isLoggedIn: any;
    setIsLoggedIn: any
}
interface UserProviderProps {
    children: React.ReactNode
}

export const UserContext = createContext<UserContextInterface>({} as UserContextInterface);

export const UserProvider = ({ children }: UserProviderProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    return (
        <UserContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)