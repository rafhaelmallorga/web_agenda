import React, { useEffect, useState } from 'react'
import { useModal } from '../providers/modal'
import ButtonForm from './ButtonForm'
import InputForm from './InputForm'
import * as yup from 'yup'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useAgenda } from '../providers/agenda'
import { IContactUpdate } from '../interfaces/Agenda'
import { IClient } from '../interfaces/Agenda'

const UpdateContactModal = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { getClientList, updateContact, clientsList } = useAgenda()
    const { modalUpdateContact, setModalUpdateContact, contactHandler, setContactHandler, setModalContactSection, setClientHandler } = useModal()


    useEffect(() => {
        getClientList()
        contactHandler
      }, [])


    const schema = yup.object().shape({
        full_name: yup.string().required("Digite o nome do contato"),
        email: yup.string().required("Digite um email").email("Email Inválido"),
        phone: yup.string().required("Digite o telefone"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IContactUpdate>({
        resolver: yupResolver(schema)
    })

    const handleContactUpdate = async (data: IContactUpdate) => {
        setIsLoading(true)
        await updateContact(contactHandler.id, data)
        await getClientList()
        setIsLoading(false)
        setModalUpdateContact(false)
        setModalContactSection(false)
       
      }

  return (
    <form onSubmit={handleSubmit(handleContactUpdate)} className='flex flex-col bg-white p-8 rounded-md'>
        <h3 className='text-[28px] font-bold text-gray-600'>Atualizar Cliente</h3>
        <span className='leading-3 mt-2 font-bold text-[12px]'>Empresa:</span>
        <InputForm value={contactHandler?.full_name} onChange={(e) => setContactHandler({...contactHandler, full_name: e.target.value})} placeholder='Nome do contato' name='full_name' error={errors} register={register}/>
        <span className='leading-3 mt-2 font-bold text-[12px]'>E-mail:</span>
        <InputForm value={contactHandler?.email} onChange={(e) => setContactHandler({...contactHandler, email: e.target.value})} placeholder='E-mail' name='email' error={errors} register={register}/>
        <span className='leading-3 mt-2 font-bold text-[12px]'>Telefone:</span>
        <InputForm value={contactHandler?.phone} onChange={(e) => setContactHandler({...contactHandler, phone: e.target.value})} placeholder='Telefone' name='phone' error={errors} register={register}/>
        <div className='flex justify-around items-center mt-4'>
        <span onClick={() => setModalUpdateContact(false)} className="hover:cursor-pointer border-[3px] py-1 px-4 rounded border-[#755FFF] text-[#755FFF] font-bold h-11 text-center flex items-center hover:bg-slate-100">Voltar</span>
        <ButtonForm type='submit' text='Atualizar' isLoading={isLoading} className={`border-[3px] mx-1 border-[#755FFF] rounded py-2 px-4 xs:px-8 font-bold text-[#fff] bg-[#755FFF] hover:brightness-90 w-[150px] flex justify-center items-center`}/>
        </div>
  </form>
  )
}

export default UpdateContactModal