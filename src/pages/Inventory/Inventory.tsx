import Toolbar from "@/components/CustomToolbar/Toolbar"
import InventoryTable from "@/components/InventoryTable/InventoryTable"
import { useState } from "react"


const Inventory:React.FC = () => {
  const [search , setSearch] = useState<string>("")
  return (
    <div className="relative h-full w-full">
      <div className="relative h-full w-full">
          <Toolbar searchValue={search} onSearchChange={setSearch}/>
          <InventoryTable/>
      </div>
    </div>
  )
}

export default Inventory
