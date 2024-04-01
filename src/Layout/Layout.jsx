import { Route, Routes} from "react-router-dom"
import Dashboard from "@/pages/Dashboard/Dashboard.tsx"
import PrivateRouteWrapper from "./components/private-router-wrapper"
import Inventory from "@/pages/Inventory/Inventory"
import Tickets from "@/pages/Tickets/Tickets"
import Products from "@/pages/Products/Products"
import FollowUps from "@/pages/FollowUps/FollowUps"
import Services from "@/pages/Services/Services"


const Layout = () => {
     let routes 
     if (true){
          routes =  (
               <Routes>
                    <Route path="/" element={<Dashboard/>}/>
                    <Route path="/inventory" element={<Inventory/>}/>
                    <Route path="/tickets" element={<Tickets/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/follow-ups" element={<FollowUps/>}/>
                    <Route path="/services" element={<Services/>}/>
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
