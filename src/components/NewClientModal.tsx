import React, { useState } from 'react'
import { useModal } from '../providers/modal'
import ButtonForm from './ButtonForm'
import InputForm from './InputForm'
import * as yup from 'yup'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { IClient } from '../interfaces/Agenda'
import { useAgenda } from '../providers/agenda'

const NewClientModal = () => {
  const { modalNewClientIsOpen, setModalNewClientIsOpen } = useModal()
  const { newClient, getClientList } = useAgenda()
  const [isLoading, setIsLoading] = useState(false)

  const schema = yup.object().shape({
    full_name: yup.string().required('Digite o nome da empresa'),
    email: yup.string().required('Digite o email principal'),
    phone: yup.string().required('Digite o telefone principal')
  })

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
} = useForm<IClient>({
    resolver: yupResolver(schema)
})

    const handleNewClient = async (data: IClient) => {
        setIsLoading(true)
        await newClient(data)
        await getClientList()
        setIsLoading(false)

        reset({
          full_name: '',
          email: '',
          phone: ''
        })

        setModalNewClientIsOpen(false)
    }

  return (
    <form onSubmit={handleSubmit(handleNewClient)} className='flex flex-col bg-white p-8 rounded-md'>
    <h3 className='text-[28px] font-bold text-gray-600'>Cadastrar Cliente</h3>
    <InputForm placeholder='Nome da empresa' name='full_name' error={errors} register={register}/>
    <InputForm placeholder='E-mail' name='email' error={errors} register={register}/>
    <InputForm placeholder='Telefone' name='phone' error={errors} register={register}/>
    <div className='flex justify-around items-center mt-4'>
      <span onClick={() => setModalNewClientIsOpen(false)} className="hover:cursor-pointer border-[3px] py-1 px-4 rounded border-[#755FFF] text-[#755FFF] font-bold h-11 text-center flex items-center hover:bg-slate-100">Voltar</span>
      <ButtonForm type='submit' text='Cadastrar' isLoading={isLoading} className={`border-[3px] mx-1 border-[#755FFF] rounded py-2 px-4 xs:px-8 font-bold text-[#fff] bg-[#755FFF] hover:brightness-90 w-[150px] flex justify-center items-center`}/>
    </div>
  </form>
  )
}

export default NewClientModal