import React, { ReactNode } from 'react'
import { ellipse1, ellipse2 } from '../assets'
import { Link } from 'react-router-dom'
import ClientCard from './ClientCard'
import ClientMenu from './ClientMenu'

interface Props {
    children: ReactNode;
}

const PageBody = ({ children }: Props) => {
    
  return (
    <div className='w-full h-[calc(100%-4rem)] flex flex-col justify-start items-center relative'>
        <img src={ellipse1} alt="page detail" className='absolute top-0 left-0 -z-[5] blur-[50px]'/>
        <img src={ellipse2} alt="page detail" className='absolute bottom-0 right-0 -z-[5] blur-[50px]'/>
        
        {window.location.pathname === '/' && <ClientMenu />}
        
        {children}
        
    </div>
  )
}

export default PageBody