import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    error?: any;
    register?: any;
}

const InputForm = ({name, error, register, ...rest}:InputProps) => {
  return (
    <>
      <input {...register(name)} {...rest} className={`bg-[#F5F5F5] h-12 pl-4 w-80 sm:w-96 my-3 border-l-[3px] ${error?.[name] ? "border-red" : "border-blue"}  outline-none shadow-inner font-sans text-blue`}/>
      <span className="text-[14px] text-red font-bold w-full leading-3">{error?.[name] && error?.[name].message}</span>
    </>
  )
}

export default InputForm