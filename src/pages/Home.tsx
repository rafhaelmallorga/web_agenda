import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonForm from '../components/ButtonForm'
import ClientCard from '../components/ClientCard'
import DeleteClientModal from '../components/DeleteClientModal'
import EmptyPage from '../components/EmptyPage'
import Header from '../components/Header'
import InputForm from '../components/InputForm'
import ModalBackground from '../components/ModalBackground'
import NewClientModal from '../components/NewClientModal'
import PageBody from '../components/PageBody'
import UpdateClientModal from '../components/UpdateClientModal'
import { IClient } from '../interfaces/Agenda'
import { useAgenda } from '../providers/agenda'
import { useModal } from '../providers/modal'
import { useUser } from '../providers/user'

const Home = () => {
  const { isLoggedIn } = useUser()
  const { clientsList } = useAgenda()
  const { modalNewClientIsOpen, setModalNewClientIsOpen, modalDeleteClient, modalUpdateClient, setModalUpdateClient } = useModal()
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@BearerToken") || '{}')
    if (!token.token) {
      navigate("/login")
    }
  }, [])

  return (
    <div className='w-full h-[100vh]'>
      <Header />
      <PageBody>
        <div className='w-full h-fit max-h-[full-h] max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-1 xs:gap-4 overflow-x-hidden'>
              {clientsList ? 
              clientsList.map((client: IClient) => (<ClientCard key={client.id} client={client}/>))
              :
              <EmptyPage />
              }
   
          </div>
      </PageBody>
      <ModalBackground modalIsOpen={modalNewClientIsOpen}>
             <NewClientModal />
      </ModalBackground>
      <ModalBackground modalIsOpen={modalDeleteClient}>
              <DeleteClientModal />
      </ModalBackground>
      <ModalBackground modalIsOpen={modalUpdateClient}>
              <UpdateClientModal />
      </ModalBackground>
    </div>
  )
}

export default Home