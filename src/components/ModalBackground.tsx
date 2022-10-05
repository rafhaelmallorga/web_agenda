import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode;
    modalIsOpen: boolean
}

const ModalBackground = ({children, modalIsOpen}: Props) => {
  return (
    <div className={`${modalIsOpen ? "absolute" : "hidden"} top-0 left-0 w-full h-full bg-[#00000050] flex items-center justify-center`}>
        {children}
    </div>
  )
}

export default ModalBackground