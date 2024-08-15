import Dashboard from "@/pages/Dashboard/Dashboard.tsx"
import Inventory from "@/pages/Inventory/Inventory"
import Tickets from "@/pages/Tickets/Tickets"
import Products from "@/pages/Products/Products"
import FollowUps from "@/pages/FollowUps/FollowUps"
import Services from "@/pages/Services/Services"
import InventoryForm from "@/pages/Inventory/InventoryForm"
import ServiceForm from "@/pages/Services/ServicesForm"

import { createPortal } from "react-dom"
import { useSelector } from "react-redux"
import { Route, Routes} from "react-router-dom"


const Layout = () => {

     const activeModal = useSelector((state) => state.modal.modal)
     let routes 

     if (true){
          routes =  (
               <Routes>
                    <Route path="/dasboard" element={<Dashboard/>}/>
                    <Route path="/inventory" element={<Inventory/>}/>
                    <Route path="/" element={<Tickets/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/follow-ups" element={<FollowUps/>}/>
                    <Route path="/services" element={<Services/>}/>
               </Routes>
          )
     }
     return (
          <>
               {createPortal(activeModal === null ? 
                    <ServiceForm type="Save"/> :
                    <InventoryForm type = "Save"/>, document.body)

               }
               {routes}
          </>
     )
}

export default Layout;
