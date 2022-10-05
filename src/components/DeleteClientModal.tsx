import React, { useState } from 'react'
import { useAgenda } from '../providers/agenda'
import { useModal } from '../providers/modal'
import ButtonForm from './ButtonForm'
import InputForm from './InputForm'

const DeleteClientModal = () => {
    const { updateClient, deleteCLient, getClientList } = useAgenda()
    const { modalDeleteClient, setModalDeleteClient, clientHandler, setClientHandler } = useModal()
    const [isLoading, setIsLoading] = useState(false)

    const handleDelete = async (id: string) => {
        setIsLoading(true)
        await deleteCLient(id)
        await getClientList()
        setIsLoading(false)
        setModalDeleteClient(false)
    }

  return (
    <div  className='flex flex-col justify-center items-center bg-white p-8 rounded-md'>
    <h3 className='text-[28px] font-bold text-red'>Atenção</h3>
    <p className='font-bold'>Esta ação é irreversível, deseja prosseguir?</p>
    <div className='flex justify-around items-center mt-4'>
      <span onClick={() => setModalDeleteClient(false)} className="hover:cursor-pointer border-[3px] py-1 px-4 mr-4 rounded border-[#755FFF] text-[#755FFF] font-bold h-11 text-center flex items-center hover:bg-slate-100">Voltar</span>
      <ButtonForm onClick={() => {
            handleDelete(clientHandler.id)
      }} text='Excluir' isLoading={isLoading} className={`border-[3px] mx-1 border-red rounded py-2 px-4 xs:px-8 font-bold text-[#fff] bg-red hover:brightness-90 w-[150px] flex justify-center items-center`}/>
    </div>
  </div>
  )
}

export default DeleteClientModal