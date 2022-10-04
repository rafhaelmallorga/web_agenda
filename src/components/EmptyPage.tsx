import React from 'react'

const EmptyPage = () => {
  return (
    <div className='w-full h-full max-w-[1200px] flex flex-col justify-center items-center'>
        <span className='text-[28px] xs:text-[48px] text-[#959595] font-bold xs:w-[500px] text-center leading-[50px]'>Nenhum cliente cadastrado ainda!</span>
        <span className='text-[28px] xs:text-[48px] text-[#959595] font-bold xs:w-[500px] text-center'>:(</span>
    </div>
  )
}

export default EmptyPage