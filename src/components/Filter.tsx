import { TiFilter } from "react-icons/ti"; 

function Filter() {
  return (
      <div className="px-2 items-center space-x-2 bg-white inline-flex border-[1px] rounded-md">
      <TiFilter size = {30} color={'#C92B27'} />
      <span >Filter</span>
    </div>
  )
}

export default Filter;