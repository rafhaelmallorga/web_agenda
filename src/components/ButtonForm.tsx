import { ButtonHTMLAttributes } from "react"
import ReactLoading from "react-loading"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    isLoading: boolean;
}

const ButtonForm = ({text, isLoading, ...rest}: ButtonProps) => {
  return (
    <button className={`bg-blue h-12 pl-4 w-80 sm:w-96 my-4 text-white font-bold hover:brightness-90 flex items-center justify-center`} {...rest}>{isLoading ? <ReactLoading type={'spinningBubbles'} color="#ffffffdc" height={35} width={35}/> : text}</button>
  )
}

export default ButtonForm