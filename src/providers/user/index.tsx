import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import api from "../../api"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import { IUserInfos, IUserLogin, IUserRegister, UserContextInterface, UserProviderProps } from "../../interfaces/User";


export const UserContext = createContext<UserContextInterface>({} as UserContextInterface);

export const UserProvider = ({ children }: UserProviderProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [userInfos, setUserInfos] = useState<IUserInfos>({} as IUserInfos)

    const navigate = useNavigate()
    
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("@BearerToken") || '{}')
        if (token.token) {
            api.get('/user/me')
                .then(res => setUserInfos(res.data))
                .catch((_) => toast.error('Não foi possivel acessar as informações do usuario.'))
            return setIsLoggedIn(true)
        }
    }, [isLoggedIn])

    console.log(userInfos)

    const login = async (data: IUserLogin) => {
        await api.post('/user/login', data)
        .then((res) => {
            localStorage.setItem("@BearerToken", JSON.stringify(res.data))
            api.defaults.headers.common = {
                Authorization: `Bearer ${res.data.token}`
            }
            setIsLoggedIn(true)
            return navigate("/")
        })
        .catch((_) => toast.error("E-mail ou senha invalidos!"))
    }

    const registerUser = async (data: IUserRegister) => {
        const loginData = {
            email: data.email,
            password: data.password
        }

        await api.post("/user", data)
        .then((res) => {
            toast.success("Usuário criado com sucesso!")
            login(loginData)
        })
        .catch((res) => {
            if (res.response.data.message === "E-mail already exists!") {
                return toast.error("E-mail já cadastrado.")
            }
            return toast.error("Não foi possivel realizar o cadastro.")
        
        })
    }


    return (
        <UserContext.Provider value={{isLoggedIn, setIsLoggedIn, login, registerUser, userInfos, setUserInfos}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)