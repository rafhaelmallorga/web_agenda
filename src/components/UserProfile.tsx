import React, { FormEvent, useEffect, useState } from 'react'
import { BsEyeSlash, BsEye } from 'react-icons/bs'
import InputForm from './InputForm'
import * as yup from 'yup'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import ButtonForm from './ButtonForm'
import { useUser } from '../providers/user'
import { IUserInfos, IUserRegister } from '../interfaces/User'
import style from '../style'
import api from '../api'
import toast from 'react-hot-toast'
import ModalBackground from './ModalBackground'
import { useModal } from '../providers/modal'


const UserProfile = () => {
    const { userInfos, setUserInfos, updateUser } = useUser()
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const { modalDeleteUserIsOpen, setModalDeleteUserIsOpen } = useModal()
    const [updatedInfo, setUpdatedInfo] = useState({...userInfos})

    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem("@BearerToken") || '{}')

        if (token.token) {
            api.defaults.headers.common = {
                Authorization: `Bearer ${token.token}`
            }
        api.get('/user/me')
            .then(res => {
                setUserInfos(res.data)
                setUpdatedInfo(res.data)
            })
            .catch((_) => toast.error('Não foi possivel acessar as informações do usuario.'))

        }
    },[])

    const schema = yup.object().shape({
        first_name: yup.string().required("Digite seu primeiro nome"),
        last_name: yup.string().required("Digite seu sobrenome"),
        email: yup.string().required("Digite um email").email("Email Inválido")
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IUserInfos>({
        resolver: yupResolver(schema)
    })

    const update = (data:IUserInfos) => {
        setIsLoading(true)
        updateUser(data)
        setIsLoading(false)
    }


    return (
        <section className='w-full h-full flex flex-col justify-center items-center'>
            <div>
                <h2 className='text-[30px] font-bold mb-4 text-gray-700'>Dados cadastrais:</h2>
                <form onSubmit={handleSubmit(update)} className="flex flex-col">
                    <span className='leading-3 mt-2 font-bold text-[12px]'>Nome:</span>
                    <InputForm value={updatedInfo?.first_name} onChange={(e) => setUpdatedInfo({...updatedInfo, first_name: e.target.value})} name='first_name' register={register} error={errors}/>
                    <span className='leading-3 mt-2 font-bold text-[12px]'>Sobrenome:</span>
                    <InputForm value={updatedInfo?.last_name} onChange={(e) => setUpdatedInfo({...updatedInfo, last_name: e.target.value})} name='last_name' register={register} error={errors}/>
                    <span className='leading-3 mt-2 font-bold text-[12px]'>E-mail:</span>
                    <InputForm value={updatedInfo?.email} onChange={(e) => setUpdatedInfo({...updatedInfo, email: e.target.value})} name='email' register={register} error={errors}/>
                    <ButtonForm type='submit' text='Atualizar Dados' isLoading={isLoading}/>
                </form>

                <div className='flex justify-between'>
                    <span onClick={() => setModalDeleteUserIsOpen(true)} className='text-red font-bold cursor-pointer'>Excluir conta!</span>
                    <span className='text-red font-bold cursor-pointer'>Atualizar senha</span>
                </div>
            </div>

        </section>
    )
}

export default UserProfile