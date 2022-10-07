import React, { useEffect } from 'react'
import api from '../api'
import { useModal } from '../providers/modal'
import { AiOutlineCloseCircle } from "react-icons/ai"
import { IoMdPersonAdd } from "react-icons/io"
import ContactCard from './ContactCard'
import { IContact } from '../interfaces/Agenda'

const ContactsSection = () => {
    const {modalContactSection, setModalContactSection, clientHandler, setClientHandler, contactsByClientHandler, setContactsByClientHandler, modalNewContact, setModalNewContact, contactHandler, setContactHandler} = useModal()


    const getContactsList = async (id: string) => {
        api.get(`/contacts/${id}`)
                .then(res => {
                    setContactsByClientHandler(res.data)
                })
    }
    
    useEffect(() => {
        if(clientHandler) {
            getContactsList(clientHandler.id)
        }
    }, [clientHandler])

  return (
    <div className='bg-white w-[400px] h-[600px] rounded-md p-8'>
        <span className='flex justify-end'>
            <AiOutlineCloseCircle onClick={() => {
                setModalContactSection(false)
                }} className='relative bottom-4 left-4 text-[24px] text-gray-500 hover:cursor-pointer'/>
        </span>
        <h3 className='text-gray-700 text-[14px]'>Lista de contatos: <span className='font-bold text-[16px]'><br/>{clientHandler?.full_name}</span></h3>
        <div className='flex justify-end my-2'>
            <button onClick={() => setModalNewContact(true)} className='flex justify-center items-center bg-[#755FFF] text-white font-bold py-1 px-4 hover:brightness-90'>
                <span className='pr-2 relative bottom-[1px]'>
                    <IoMdPersonAdd/>
                </span>
                Novo contato
            </button>
        </div>
        <div className='bg-gray-50 rounded h-[80%] shadow-inner flex flex-col scrollbar-thin scrollbar-track- scrollbar-thumb-rounded scrollbar-thumb-[#745fff2f] scrollbar-track-gray-100'>
            {   
                contactsByClientHandler?.length > 0 ?
                contactsByClientHandler?.map((contact: IContact) => <ContactCard key={contact?.id} contact={contact}/>)
                :
                <div className='w-full h-full flex justify-center items-center'>
                    <span className='font-bold text-gray-500'>
                        Nenhum contato cadastrado.
                    </span>
                </div>
            }
        </div>
    </div>
  )
}

export default ContactsSection

export {}