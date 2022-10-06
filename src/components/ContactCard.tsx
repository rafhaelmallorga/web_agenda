import React from 'react'
import { BsThreeDots } from "react-icons/bs"
import { RiDeleteBinFill } from "react-icons/ri"
import api from '../api'
import { useAgenda } from '../providers/agenda'
import { useModal } from '../providers/modal'

const ContactCard = ({contact}: any) => {
    const { setContactsByClientHandler, setModalUpdateContact, setContactHandler } = useModal()
    const { deleteContact } = useAgenda()

    const getContactsList = async (id: string) => {
        api.get(`/contacts/${id}`)
                .then(res => {
                    setContactsByClientHandler(res.data)
                })
    }

    const handleDelete = async (id: string) => {
        await deleteContact(id)
        await getContactsList(contact.client.id)
    }

  return (
    <div className='bg-white mx-2 my-1 rounded-md shadow-lg p-4 mr-4 flex hover:shadow-2xl'>
        <div className='flex-1'>
            <div className='text-gray-700 text-[14px]'>
                <h4 className='font-bold'>Nome: <span className='font-normal'><br/>{contact?.full_name}</span></h4>
            </div>
            <div className='text-gray-700 text-[14px]'>
                <p className='font-bold'>E-mail: <span className='font-normal'><br/>{contact?.email}</span></p>
            </div>
            <div className='text-gray-700 text-[14px]'>
                <p className='font-bold'>Telefone: <span className='font-normal'><br/>{contact?.phone}</span></p>
            </div>
        </div>
        <div className='flex flex-col justify-between'>
            <span onClick={() => {
                setContactHandler(contact)
                setModalUpdateContact(true)
                }} className='text-[#755FFF] hover:cursor-pointer'>
                <BsThreeDots />
            </span>
            <span onClick={() => handleDelete(contact.id)} className='text-red hover:cursor-pointer'>
                <RiDeleteBinFill />
            </span>
        </div>
        
    </div>
  )
}

export default ContactCard