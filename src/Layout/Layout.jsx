import { Route, Routes} from "react-router-dom"
import Dashboard from "@/pages/Dashboard/Dashboard.tsx"
import Inventory from "@/pages/Inventory/Inventory"
import Tickets from "@/pages/Tickets/Tickets"
import Products from "@/pages/Products/Products"
import FollowUps from "@/pages/FollowUps/FollowUps"
import Services from "@/pages/Services/Services"
import ServiceForm from "@/pages/Services/ServicesForm"


const Layout = () => {
     let routes 
     if (true){
          routes =  (
               <Routes>
                    <Route path="/dasboard" element={<Dashboard/>}/>
                    <Route path="/inventory" element={<Inventory/>}/>
                    {/* <Route path="/inventory/:partId" element={<InventoryForm/>}/> */}
                    <Route path="/" element={<Tickets/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/follow-ups" element={<FollowUps/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/services/:partId" element ={<ServiceForm/>}/>
               </Routes>
          )
     }
     return (
          <>
               {routes}
          </>
     )
}

export default Layout;
