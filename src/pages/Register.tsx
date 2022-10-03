import style from "../style"
import { agenda_bg, vector2 } from "../assets"
import InputForm from "../components/InputForm"
import ButtonForm from "../components/ButtonForm"
import { BsEyeSlash, BsEye } from 'react-icons/bs'
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useUser } from "../providers/user"
import * as yup from "yup"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IUserRegister } from "../interfaces/User"

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const {isLoggedIn, registerUser} = useUser()

    useEffect(() => {
        if (isLoggedIn) {
            return navigate("/")
        }
    }, [])

    const schema = yup.object().shape({
        first_name: yup.string().required("Digite seu primeiro nome"),
        last_name: yup.string().required("Digite seu sobrenome"),
        email: yup.string().required("Digite um email").email("Email Inválido"),
        password: yup
          .string()
          .required("Senha obrigatória")
          .matches(/(?=.*[a-z])/, "Requer uma letra minuscula")
          .matches(/(?=.*[A-Z])/, "Requer uma letra maiuscula")
          .matches(/(?=.*[0-9])/, "Requer um numero")
          .matches(/(?=.*[!$*&@#])/, "Requer um caracter especial")
          .min(8, "Requer mínimo de 8 caracteres"),
        passwordConfirmation: yup
          .string()
          .required("Confirme sua senha")
          .oneOf([yup.ref("password"), null], "As senhas não coincidem"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IUserRegister>({
        resolver: yupResolver(schema)
    })

    const handleRegister = (data: IUserRegister) => {
        setIsLoading(true)
        registerUser(data)
        setIsLoading(false)
    }
    
    return (
        <div className={`flex flex-col sm:flex-row-reverse h-[100vh] `}>
            <div className="flex-1 flex items-center justify-center h-full">
                <img src={agenda_bg} alt="imagem_login" className="w-[150px] sm:w-full sm:h-full object-contain"/>
            </div>
            <div className={`${style.flexCenter} sm:flex-2 flex-1`}>
                <form onSubmit={handleSubmit(handleRegister)} className={`flex flex-col items-center justify-center`}>
                    <h1 className="text-blue font-poppins font-semibold text-[42px]">Criar Conta</h1>
                    <InputForm placeholder="Nome" name="first_name" register={register} error={errors} />
                    <InputForm placeholder="Sobrenome" name="last_name" register={register} error={errors} />
                    <InputForm placeholder="E-mail" name="email" register={register} error={errors} />
                    <div className={`${style.flexCenter} bg-[#F5F5F5] h-12 w-80 sm:w-96 my-4 border-l-[3px] ${errors.password ? "border-red" : "border-blue"} outline-none shadow-inner font-sans `}>
                        <input placeholder="Senha" {...register("password")} type={showPassword ? "text" : "password"} className={`w-full h-full pl-4 outline-none bg-transparent  text-blue`}/>
                        <span onClick={() => setShowPassword(!showPassword)} className="relative right-2 z-[2] p-1 bg-[#745fff28] rounded-full cursor-pointer">
                            {showPassword ?  <BsEye color="#755FFF" size={20}/> : <BsEyeSlash color="#755FFF" size={20}/> }
                        </span>
                    </div>
                    <span className={`text-[14px] text-red font-bold w-full leading-3 ${errors?.password && 'pb-3'}`}>{errors?.password && errors?.password.message}</span>
                    <InputForm placeholder="Confirme sua senha" type={'password'} name="passwordConfirmation" register={register} error={errors}/>
                    <p className={`font-poppins font-normal text-sm text-gray-500 ${errors?.passwordConfirmation && "mt-3"}`}>Já possui uma conta? <Link className="text-blue" to={"/login"}>Login</Link></p>
                    <ButtonForm type="submit" text="Cadastrar" isLoading={isLoading}/>
                </form>
                <img src={vector2} alt="vetor" className="z-[-1] absolute bottom-0 left-0 w-1/2"/>
            </div>
        </div>
    )
}


export default Register