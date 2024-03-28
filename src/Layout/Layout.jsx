import { Route, Routes, useNavigate } from "react-router-dom"
import Dashboard from "@/pages/Dashboard/Dashboard.tsx"
import PrivateRouteWrapper from "./components/private-router-wrapper"


const PrivateRoute = ({ component, ...rest }) => {
     return (
         <Route
             {...rest}
               render={(props) => (
                 <PrivateRouteWrapper>
                    {React.createElement(component, props)}
                 </PrivateRouteWrapper>
             )}
         />
     )
 }
 
const PublicRoute = ({ component, ...rest }) => {
     return (
         <Route {...rest} render={(props) => React.createElement(component, props)} />
     )
 }
const Layout = () => {
     let routes 
     if (true){
          routes =  (
               <Routes>
                    <PrivateRouteWrapper>
                         <Route path="/" element={<Dashboard/>}/>
                    </PrivateRouteWrapper>
               </Routes>
          )
     }
     return (
          <div>
               {routes}
          </div>
     )
}

export default Layout;
