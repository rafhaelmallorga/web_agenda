import React, { useState } from 'react'
import { useModal } from '../providers/modal'
import ButtonForm from './ButtonForm'
import InputForm from './InputForm'

const UpdateClientModal = () => {
    const { modalDeleteClient, setModalDeleteClient } = useModal()
    const [isLoading, setIsLoading] = useState(false)

  return (
    <form  className='flex flex-col bg-white p-8 rounded-md'>
    <h3 className='text-[28px] font-bold text-gray-600'>Cadastrar Cliente</h3>
    <InputForm placeholder='Nome da empresa' name='full_name' error={{}} register={() => {}}/>
    <InputForm placeholder='E-mail' name='email' error={{}} register={() => {}}/>
    <InputForm placeholder='Telefone' name='phone' error={{}} register={() => {}}/>
    <div className='flex justify-around items-center mt-4'>
      <span onClick={() => setModalDeleteClient(false)} className="hover:cursor-pointer border-[3px] py-1 px-4 rounded border-[#755FFF] text-[#755FFF] font-bold h-11 text-center flex items-center hover:bg-slate-100">Voltar</span>
      <ButtonForm type='submit' text='Cadastrar' isLoading={isLoading} className={`border-[3px] mx-1 border-[#755FFF] rounded py-2 px-4 xs:px-8 font-bold text-[#fff] bg-[#755FFF] hover:brightness-90 w-[150px] flex justify-center items-center`}/>
    </div>
  </form>
  )
}

export default UpdateClientModal