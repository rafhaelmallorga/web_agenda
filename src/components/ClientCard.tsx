import React from 'react'
import { HiOutlineOfficeBuilding } from "react-icons/hi"
import {  MdOutlineLocalPostOffice } from "react-icons/md"
import { BsTelephone } from "react-icons/bs"

const ClientCard = () => {
  return (
    <div className='flex justify-center items-center h-[210px] border-2 border-l-4 border-l-[#755FFF] bg-white rounded-[5px] drop-shadow-lg hover:drop-shadow-xl'>
        <div className='flex-1 h-full p-6 flex flex-col justify-between'>
            <div>
                <p className='font-bold leading-3 flex items-center'><HiOutlineOfficeBuilding color='#755FFF' className='mr-2'/>Empresa:</p>
                <p className='overflow-hidden max-w-[17ch] xs:max-w-[30ch] text-ellipsis whitespace-nowrap'>Big tech Ltda aaaaaaaaaaaaaaaaaaaaaa</p>
            </div>
            <div>
                <p className='font-bold leading-3 flex items-center'><MdOutlineLocalPostOffice color='#755FFF' className='mr-2'/>E-mail:</p>
                <p className='overflow-hidden max-w-[17ch] xs:max-w-[30ch] text-ellipsis whitespace-nowrap'>bigtech@email.com</p>
            </div>
            <div>
                <p className='font-bold leading-3 flex items-center'><BsTelephone color='#755FFF' className='mr-2'/>Telefone:</p>
                <p className='overflow-hidden max-w-[17ch] xs:max-w-[30ch] text-ellipsis whitespace-nowrap'>(11) 3003-3003</p>
            </div>
        </div>
        <div className='flex-2 h-full p-6 flex flex-col justify-between items-end'>
            <p className='mb-4 font-bold'><span>0</span> contatos</p>
            <button className='w-[131px] bg-[#755FFF] px-4 py-1 text-white font-bold rounded hover:brightness-90'>Contatos</button>
            <button className='w-[131px] border-2 border-[#755FFF] px-4 py-1 text-[#755FFF] font-bold rounded hover:bg-slate-100'>Atualizar</button>
            <button className='w-[131px] border-2 border-red px-4 py-1 text-red font-bold rounded hover:bg-slate-100'>Deletar</button>
        </div>
    </div>
  )
}

export default ClientCard