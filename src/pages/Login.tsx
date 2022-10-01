import style from "../style"
import { agenda_bg, vector } from "../assets"
import InputForm from "../components/InputForm"
import ButtonForm from "../components/ButtonForm"
import { BsEyeSlash, BsEye } from 'react-icons/bs'
import { useState } from "react"
import { Link } from "react-router-dom"

const Login = () => {

    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = (e: any) => {
        e.preventDefault()
    }

    return (
        <div className={`flex flex-col sm:flex-row h-[100vh] `}>
            <div className="flex-1 flex h-full">
                <img src={agenda_bg} alt="imagem_login" className="w-[400px] sm:w-full sm:h-full object-contain"/>
            </div>
            <div className={`${style.flexCenter} sm:flex-2 flex-1`}>
                <form onSubmit={handleSubmit} className={`flex flex-col items-center justify-center`}>
                    <h1 className="text-blue font-poppins font-semibold text-[48px]">Login</h1>
                    <InputForm placeholder="E-mail"/>
                    <div className={`${style.flexCenter} bg-[#F5F5F5] h-12 w-80 sm:w-96 my-4 border-l-[3px] border-blue outline-none shadow-inner font-sans `}>
                        <input placeholder="Senha" type={showPassword ? "text" : "password"} className={`w-full h-full pl-4 outline-none bg-transparent text-blue`}/>
                        <button onClick={() => setShowPassword(!showPassword)} className="relative right-2 z-[2] p-1 bg-[#745fff28] rounded-full">
                            {showPassword ?  <BsEye color="#755FFF" size={20}/> : <BsEyeSlash color="#755FFF" size={20}/> }
                        </button>
                    </div>
                    <p className="font-poppins font-normal text-sm text-gray-500">Ainda não possui uma conta? <Link className="text-blue" to={"/register"}>Registre-se</Link></p>
                    <ButtonForm text="Entrar"/>
                </form>
                <img src={vector} alt="vetor" className="z-[-1] absolute bottom-0 right-0 w-1/2"/>
            </div>
        </div>
    )
}


export default Login