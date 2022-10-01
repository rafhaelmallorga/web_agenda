import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import api from "../../api"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import { IUserLogin, IUserRegister, UserContextInterface, UserProviderProps } from "../../interfaces/User";


export const UserContext = createContext<UserContextInterface>({} as UserContextInterface);

export const UserProvider = ({ children }: UserProviderProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const navigate = useNavigate()
    
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("@BearerToken") || '{}')
        if (token.token) {
            return setIsLoggedIn(true)
        }
    }, [isLoggedIn])

    const login = async (data: IUserLogin) => {
        await api.post('/user/login', data)
        .then((res) => {
            localStorage.setItem("@BearerToken", JSON.stringify(res.data))
            setIsLoggedIn(true)
            return navigate("/")
        })
        .catch((_) => toast.error("E-mail ou senha invalido!"))
    }

    const register = async (data: IUserRegister) => {
        const loginData = {
            email: data.email,
            password: data.password
        }

        await api.post("/user", data)
        .then((res) => {
            toast.success("Usuário criado com sucesso!")
            login(loginData)
        })
        .catch((_) => toast.error("Não foi possivel realizar o cadastro."))
    }


    return (
        <UserContext.Provider value={{isLoggedIn, setIsLoggedIn, login, register}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)