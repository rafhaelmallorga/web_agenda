import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import ModalBackground from '../components/ModalBackground'
import PageBody from '../components/PageBody'
import UserProfile from '../components/UserProfile'
import { useModal } from '../providers/modal'
import { useUser } from '../providers/user'

const Me = () => {
  const { modalDeleteUserIsOpen, setModalDeleteUserIsOpen } = useModal()
  const { deleteUser, isLoggedIn } = useUser()

  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login")
    }
  }, [])

  
  return (
    <div className='w-full h-[100vh]'>
        <Header />
        <PageBody>
          <UserProfile />
        </PageBody>
        <ModalBackground modalIsOpen={modalDeleteUserIsOpen}>
          <div className='bg-white w-[100%] h-[290px] xs:w-[400px] flex flex-col justify-center items-center p-8 rounded-lg shadow-2xl'>
            <h3 className='text-red font-bold text-[30px] pb-4'>ATENÇÃO</h3>
            <p className='text-[18px] text-center font-bold'>Esta ação irá excluir sua conta permanentemente. <br/>Deseja mesmo proseguir?</p>
            <div className='pt-[10px]'>
              <button onClick={() => setModalDeleteUserIsOpen(false)} className='border-[3px] mx-1 border-[#755FFF] rounded py-2 px-8 font-bold text-[#755fff] hover:bg-slate-100'>Voltar</button>
              <button onClick={() => {
                deleteUser()
                setModalDeleteUserIsOpen(false)  
              }} className='border-[3px] mx-1 border-red rounded py-2 px-8 font-bold text-[#fff] bg-red hover:brightness-90'>Excluir Conta</button>
            </div>
          </div>
        </ModalBackground>
    </div>
  )
}

export default Me