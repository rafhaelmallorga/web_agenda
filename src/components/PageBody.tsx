import React from 'react'
import { ellipse1, ellipse2 } from '../assets'
import { Link } from 'react-router-dom'
import { MdAddCircle } from 'react-icons/md'
import ClientCard from './ClientCard'

const PageBody = () => {
  return (
    <div className='w-full h-[calc(100%-4rem)] flex flex-col justify-start items-center relative'>
        <img src={ellipse1} alt="page detail" className='absolute top-0 left-0 -z-[5] blur-[50px]'/>
        <img src={ellipse2} alt="page detail" className='absolute bottom-0 right-0 -z-[5] blur-[50px]'/>
        <div className='w-full max-w-[1200px] flex justify-between my-10 xs:px-4'>
            <button className='bg-[#755FFF] text-white font-bold py-2 px-4 flex items-center justify-between hover:brightness-90'><MdAddCircle size={24} className="mr-2" /> Novo Cliente</button>
            <button className='border-4 border-[#755FFF] text-[#755fff] font-bold rounded py-2 px-4 hover:bg-gray-100'>Gerar Relatório</button>
        </div>
        
        <div className='w-full h-fit max-h-[full-h] max-w-[1200px] grid grid-cols-1 xs:grid-cols-2 gap-1 xs:gap-4 overflow-x-hidden'>
            <ClientCard />
            <ClientCard />
            <ClientCard />
            
        </div>
    </div>
  )
}

export default PageBody