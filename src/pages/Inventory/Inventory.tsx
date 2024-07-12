import { createPortal } from "react-dom"
import Toolbar from "@/components/CustomToolbar/Toolbar"
import InventoryTable from "@/components/InventoryTable/InventoryTable"
import { useState } from "react"
import InventoryForm from "./InventoryForm"


const Inventory:React.FC = () => {
  const [search , setSearch] = useState<string>("")
  const [inventoryForm, setInventoryForm] = useState<boolean>(true)
  return (
    <div className="relative h-full w-full">
      {inventoryForm && createPortal(<InventoryForm/>, document.body)}
      <div className="relative h-full w-full">
          <Toolbar searchValue={search} onSearchChange={setSearch}/>
          <InventoryTable/>
      </div>
    </div>
  )
}

export default Inventory
