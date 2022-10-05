import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ClientCard from '../components/ClientCard'
import EmptyPage from '../components/EmptyPage'
import Header from '../components/Header'
import PageBody from '../components/PageBody'
import { IClient } from '../interfaces/Agenda'
import { useAgenda } from '../providers/agenda'
import { useUser } from '../providers/user'

const Home = () => {
  const { isLoggedIn } = useUser()
  const { clientsList } = useAgenda()

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
        <div className='w-full h-fit max-h-[full-h] max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-1 xs:gap-4 overflow-x-hidden'>
              {clientsList ? 
              clientsList.map((client: IClient) => (<ClientCard key={client.id} client={client}/>))
              :
              <EmptyPage />
              }
   
          </div>
      </PageBody>
    </div>
  )
}

export default Home