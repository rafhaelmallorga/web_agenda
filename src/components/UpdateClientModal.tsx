import React, { useEffect, useState } from 'react'
import { useModal } from '../providers/modal'
import ButtonForm from './ButtonForm'
import InputForm from './InputForm'
import * as yup from 'yup'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { IClientUpdate } from '../interfaces/Agenda'
import { useAgenda } from '../providers/agenda'

const UpdateClientModal = () => {
    const { modalUpdateClient, setModalUpdateClient, clientHandler, setClientHandler } = useModal()
    const { updateClient, getClientList } = useAgenda()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
      getClientList()
    }, [])

    const schema = yup.object().shape({
      full_name: yup.string().required("Digite o nome da empresa"),
      email: yup.string().required("Digite um email").email("Email Inválido"),
      phone: yup.string().required("Digite o telefone"),
  });

  const {
      register,
      handleSubmit,
      formState: { errors },
  } = useForm<IClientUpdate>({
      resolver: yupResolver(schema)
  })

    const handleClientUpdate = (data: IClientUpdate) => {
      setIsLoading(true)
      updateClient(clientHandler.id, data)
      getClientList()
      setIsLoading(false)
      setModalUpdateClient(false)
    }

    

  return (
    <form onSubmit={handleSubmit(handleClientUpdate)} className='flex flex-col bg-white p-8 rounded-md'>
    <h3 className='text-[28px] font-bold text-gray-600'>Atualizar Cliente</h3>
    <span className='leading-3 mt-2 font-bold text-[12px]'>Empresa:</span>
    <InputForm value={clientHandler?.full_name} onChange={(e) => setClientHandler({...clientHandler, full_name: e.target.value})} placeholder='Nome da empresa' name='full_name' error={errors} register={register}/>
    <span className='leading-3 mt-2 font-bold text-[12px]'>E-mail:</span>
    <InputForm value={clientHandler?.email} onChange={(e) => setClientHandler({...clientHandler, email: e.target.value})} placeholder='E-mail' name='email' error={errors} register={register}/>
    <span className='leading-3 mt-2 font-bold text-[12px]'>Telefone:</span>
    <InputForm value={clientHandler?.phone} onChange={(e) => setClientHandler({...clientHandler, phone: e.target.value})} placeholder='Telefone' name='phone' error={errors} register={register}/>
    <div className='flex justify-around items-center mt-4'>
      <span onClick={() => setModalUpdateClient(false)} className="hover:cursor-pointer border-[3px] py-1 px-4 rounded border-[#755FFF] text-[#755FFF] font-bold h-11 text-center flex items-center hover:bg-slate-100">Voltar</span>
      <ButtonForm type='submit' text='Atualizar' isLoading={isLoading} className={`border-[3px] mx-1 border-[#755FFF] rounded py-2 px-4 xs:px-8 font-bold text-[#fff] bg-[#755FFF] hover:brightness-90 w-[150px] flex justify-center items-center`}/>
    </div>
  </form>
  )
}

export default UpdateClientModal