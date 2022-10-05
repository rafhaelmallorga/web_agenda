import React from 'react'
import { MdAddCircle } from 'react-icons/md'
import api from '../api'
import { useModal } from '../providers/modal'

const ClientMenu = () => {
  const { modalNewClientIsOpen, setModalNewClientIsOpen } = useModal()
  
  return (
    <div className='w-full max-w-[1200px] flex justify-between my-10 xs:px-4'>
        <button onClick={() => setModalNewClientIsOpen(true)} className='bg-[#755FFF] text-white font-bold py-2 px-4 flex items-center justify-between hover:brightness-90'><MdAddCircle size={24} className="mr-2" /> Novo Cliente</button>
        <button onClick={async () => {
          await api.get("/report/clients")
          .then(res => {
            let report = window.open("/report/clients")
            report?.document.write(`${res.data}`)
          })
        }} className='border-4 border-[#755FFF] text-[#755fff] font-bold rounded py-2 px-4 hover:bg-gray-100'>Gerar Relatório</button>
    </div>
  )
}

export default ClientMenu