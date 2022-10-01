import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
}

const InputForm = ({placeholder, ...rest}:InputProps) => {
  return (
    <input placeholder={placeholder} {...rest} className='bg-[#F5F5F5] h-12 pl-4 w-80 sm:w-96 my-4 border-l-[3px] border-blue outline-none shadow-inner font-sans text-blue'/>
  )
}

export default InputForm