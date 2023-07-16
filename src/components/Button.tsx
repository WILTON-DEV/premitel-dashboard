import { AiFillPlusCircle } from "react-icons/ai";

function Button({title}) {
  return (
      <div className="bg-primary inline-flex items-center space-x-4 rounded-md px-4 py-2">
          <AiFillPlusCircle color={'#FFFFFF'} size={24} />
          <span className="text-white">{title}</span>
    </div>
  )
}

export default Button;