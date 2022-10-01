import { ButtonHTMLAttributes } from "react"


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

const ButtonForm = ({text, ...rest}: ButtonProps) => {
  return (
    <button className={`bg-blue h-12 pl-4 w-80 sm:w-96 my-4 text-white font-bold hover:brightness-90`} {...rest}>{text}</button>
  )
}

export default ButtonForm