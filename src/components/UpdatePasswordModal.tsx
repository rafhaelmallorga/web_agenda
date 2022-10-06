import React, { useState } from 'react'
import { useModal } from '../providers/modal'
import { useUser } from '../providers/user'
import InputForm from './InputForm'
import * as yup from 'yup'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { IUserPassword, IUserRegister } from '../interfaces/User'
import style from '../style'
import { BsEyeSlash, BsEye } from 'react-icons/bs'
import ButtonForm from './ButtonForm'

const UpdatePasswordModal = () => {
    const { setModalUpdatePasswordIsOpen } = useModal()
    const { updateUserPassword } = useUser()
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const schema = yup.object().shape({
        password: yup
        .string()
        .required("Digite a nova senha")
        .matches(/(?=.*[a-z])/, "Requer uma letra minuscula")
        .matches(/(?=.*[A-Z])/, "Requer uma letra maiuscula")
        .matches(/(?=.*[0-9])/, "Requer um numero")
        .matches(/(?=.*[!$*&@#])/, "Requer um caracter especial")
        .min(8, "Requer mínimo de 8 caracteres"),
      passwordConfirmation: yup
        .string()
        .required("Confirme sua nova senha")
        .oneOf([yup.ref("password"), null], "As senhas não coincidem"),
    })

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors }
    } = useForm<IUserPassword>({
        resolver: yupResolver(schema)
    })

    const handleUpdate = async (data: IUserPassword) => {
        const { password } = data
        setIsLoading(true)
        await updateUserPassword({password: password})
        setIsLoading(false)

        reset({
            password: '',
            passwordConfirmation: ''
          })

        setModalUpdatePasswordIsOpen(false)
    }

    return (
        <div className='bg-white w-[100%] h-[340px] xs:w-[400px] flex flex-col justify-center items-center p-8 rounded-lg shadow-2xl'>
            <form onSubmit={handleSubmit(handleUpdate)} className="flex flex-col justify-center items-center">
                <h3 className='text-[#755FFF] font-bold text-[24px] pb-4'>Digite a nova senha</h3>
                <div className={`${style.flexCenter} bg-[#F5F5F5] h-12 w-80 sm:w-96 my-4 border-l-[3px] ${errors?.password ? "border-red" : "border-blue"} outline-none shadow-inner font-sans `}>
                    <input placeholder="Senha" type={showPassword ? "text" : "password"} {...register('password')} className={`w-full h-full pl-4 outline-none bg-transparent text-blue`}/>
                    <span onClick={() => setShowPassword(!showPassword)} className="relative right-2 z-[2] p-1 bg-[#745fff28] rounded-full cursor-pointer">
                        {showPassword ?  <BsEye color="#755FFF" size={20}/> : <BsEyeSlash color="#755FFF" size={20}/> }
                    </span>
                </div>
                <span className={`text-[14px] text-red font-bold w-full leading-3 ${errors?.password && 'pb-3'}`}>{errors?.password && errors?.password.message}</span>
                <InputForm type={'password'} placeholder='Confirme sua senha' name='passwordConfirmation' register={register} error={errors}/>

                <div className='pt-[10px] flex justify-center'>
                    <span onClick={() => setModalUpdatePasswordIsOpen(false)} className='border-[3px] mx-1 border-[#755FFF] rounded py-2 px-4 xs:px-8 font-bold text-[#755fff] hover:bg-slate-100 hover:cursor-pointer'>Voltar</span>
                    <ButtonForm type='submit' isLoading={isLoading} text={'Atualizar'} className={`border-[3px] mx-1 border-[#755FFF] rounded py-2 px-4 xs:px-8 font-bold text-[#fff] bg-[#755FFF] hover:brightness-90 w-[150px] flex justify-center items-center`}/>
                </div>
            </form>
        </div>
    )
}

export default UpdatePasswordModal