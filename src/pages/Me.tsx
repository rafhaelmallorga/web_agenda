import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import DeleteUserModal from '../components/DeleteUserModal'
import Header from '../components/Header'
import ModalBackground from '../components/ModalBackground'
import PageBody from '../components/PageBody'
import UpdatePasswordModal from '../components/UpdatePasswordModal'
import UserProfile from '../components/UserProfile'
import { useModal } from '../providers/modal'
import { useUser } from '../providers/user'

const Me = () => {
  const { modalDeleteUserIsOpen, setModalDeleteUserIsOpen, modalUpdatePasswordIsOpen, setModalUpdatePasswordIsOpen } = useModal()
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
          <DeleteUserModal />
        </ModalBackground>
        <ModalBackground modalIsOpen={modalUpdatePasswordIsOpen}>
          <UpdatePasswordModal />
        </ModalBackground>
    </div>
  )
}

export default Me