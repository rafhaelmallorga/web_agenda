import React from 'react'
import { HiOutlineOfficeBuilding } from "react-icons/hi"
import {  MdOutlineLocalPostOffice } from "react-icons/md"
import { BsTelephone } from "react-icons/bs"
import { IClient, IId } from '../interfaces/Agenda'
import { useAgenda } from '../providers/agenda'
import { useModal } from '../providers/modal'

interface client {
    client: IClient
}

const ClientCard = ({client}: client) => {
    const { updateClient, deleteCLient, getClientList } = useAgenda()
    const { setModalDeleteClient, clientHandler, setClientHandler, modalUpdateClient, setModalUpdateClient, modalContactSection, setModalContactSection } = useModal()

    const handleDelete = async (id: string) => {
        await deleteCLient(id)
        await getClientList()
    }

  return (
    <div className='flex justify-center items-center h-[210px] border-2 border-l-4 border-l-[#755FFF] bg-white rounded-[5px] drop-shadow-lg hover:drop-shadow-xl'>
        <div className='flex-1 h-full p-6 flex flex-col justify-between'>
            <div>
                <p className='font-bold leading-3 flex items-center'><HiOutlineOfficeBuilding color='#755FFF' className='mr-2'/>Empresa:</p>
                <p className='overflow-hidden max-w-[17ch] xs:max-w-[30ch] text-ellipsis whitespace-nowrap'>{client.full_name}</p>
            </div>
            <div>
                <p className='font-bold leading-3 flex items-center'><MdOutlineLocalPostOffice color='#755FFF' className='mr-2'/>E-mail:</p>
                <p className='overflow-hidden max-w-[17ch] xs:max-w-[30ch] text-ellipsis whitespace-nowrap'>{client.email}</p>
            </div>
            <div>
                <p className='font-bold leading-3 flex items-center'><BsTelephone color='#755FFF' className='mr-2'/>Telefone:</p>
                <p className='overflow-hidden max-w-[17ch] xs:max-w-[30ch] text-ellipsis whitespace-nowrap'>{client.phone}</p>
            </div>
        </div>
        <div className='flex-2 h-full p-6 flex flex-col justify-between items-end'>
            <p className='mb-4 font-bold'><span>0</span> contatos</p>
            <button value={client.id} onClick={() => {
                setModalContactSection(true)
                setClientHandler(client)
                }} className='w-[131px] bg-[#755FFF] px-4 py-1 text-white font-bold rounded hover:brightness-90'>Contatos</button>
            <button value={client.id} onClick={() => {
                setModalUpdateClient(true)
                setClientHandler(client)
            }} className='w-[131px] border-2 border-[#755FFF] px-4 py-1 text-[#755FFF] font-bold rounded hover:bg-slate-100'>Atualizar</button>
            <button value={client.id} onClick={() => { 
                setModalDeleteClient(true)
                setClientHandler(client)
                }} className='w-[131px] border-2 border-red px-4 py-1 text-red font-bold rounded hover:bg-slate-100'>Deletar</button>
        </div>
    </div>
  )
}

export default ClientCard