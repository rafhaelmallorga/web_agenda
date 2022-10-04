import React from 'react'
import { CgProfile } from "react-icons/cg"
import { ImExit } from "react-icons/im"
import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../providers/user'

const Header = () => {
    const {userInfos, setUserInfos, isLoggedIn, setIsLoggedIn} = useUser()
    const navigate = useNavigate()

    const logOut = () => {
        setUserInfos({})
        setIsLoggedIn(false)
        localStorage.clear()
        return navigate('/login')
    }

    return (
        <section className='w-full h-16 bg-white flex justify-center items-center border-b-[3px] border-[#755FFF]'>
            <div className='max-w-[1200px] w-full flex justify-between items-center'>
                <div className='flex justify-center items-center'>
                    <CgProfile color={"#755FFF"} className="mx-2 xs:mx-4 text-[26px] xs:text-[44px]"/>
                    <h3 className='text-[18px] xs:text-[28px] font-bold'>Olá, <span className='text-gradient'>{userInfos?.first_name}</span></h3>
                </div>
                
                <nav className='flex items-center'>
                    <Link className='font-bold text-gray-500 hover:text-[#755FFF] mx-2' to={"/"}>Home</Link>
                    <Link className='font-bold text-gray-500 hover:text-[#755FFF]' to={"/me"}>Perfil</Link>
                    <button onClick={logOut} className='bg-[#755FFF] text-white text-[14px] xs:text-[18px] font-bold py-[5px] px-3 xs:mx-4 mx-1 ml-4 hover:brightness-90'>
                        <ImExit size={20} color={"#ffffff"} className="block xs:hidden"/>
                        <span className="hidden xs:block">Sair</span>
                    </button>
                </nav>
            </div>
        </section>
    )
}

export default Header