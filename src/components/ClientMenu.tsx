import React from 'react'
import { MdAddCircle } from 'react-icons/md'

const ClientMenu = () => {
  return (
    <div className='w-full max-w-[1200px] flex justify-between my-10 xs:px-4'>
        <button className='bg-[#755FFF] text-white font-bold py-2 px-4 flex items-center justify-between hover:brightness-90'><MdAddCircle size={24} className="mr-2" /> Novo Cliente</button>
        <button className='border-4 border-[#755FFF] text-[#755fff] font-bold rounded py-2 px-4 hover:bg-gray-100'>Gerar Relatório</button>
    </div>
  )
}

export default ClientMenu