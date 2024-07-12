import { Plus, Search } from "lucide-react"
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

type props = {
     searchValue: string;
     onSearchChange: Dispatch<SetStateAction<string>>;
}
const Toolbar:React.FC<props> = ({
     searchValue,
     onSearchChange,
}) => {
     const navigate = useNavigate()
     const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
          onSearchChange(e.target.value)
     }
     return (
          <div className="relative flex w-full h-[10%] justify-between items-center px-4">
               <div className="min-w-[200px] w-1/4 bg-secondary border border-gray-300 h-[60%] rounded-full flex justify-start items-center">
                    <Search className="w-[10%] h-[60%] flex justify-start"/>
                    <input 
                         value = {searchValue} 
                         onChange={handleChange}
                         placeholder="Search..."
                         className="border-none w-[80%] focus:outline-none bg-secondary"
                    />
               </div>
               <button onClick={()=> navigate(`/inventory/new`)}className="h-10 w-10 flex items-center justify-center bg-secondary text-foreground rounded-full font-bold text-4xl">
                    <Plus />
               </button>
          </div>
     )
}

export default Toolbar
