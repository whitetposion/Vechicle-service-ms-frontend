import { Anvil, HelpCircleIcon, NotebookPen, Settings, ShoppingCart, SquareGanttChart, Store, Wrench } from "lucide-react"
import { NavLink } from "react-router-dom"
import AppBar from "@/components/Awesome-ui/AppBar/AppBar"
import SideNav from "@/components/Awesome-ui/SideNav/SideNav"
import NotificationBell from "@/components/Awesome-ui/NotificationBell/NotificationBell"
import "./styles.scss"

let sideNavOptions = [
  { name: "Dasboard", link: "/", Icon: <Store/>},
  { name: "Inventory", link: "/inventory",  Icon: <Anvil/>},
  { name: "Tickets", link: "/tickets", Icon: <NotebookPen/>},
  { name: "Products", link: "/products", Icon: <ShoppingCart/> },
  { name: "Follows", link: "/follow-ups", Icon: <SquareGanttChart/>  },
  { name: "Services", link: "/services", Icon: <Wrench/>  },
  
     
]

const RightLinks = ({}) => {
  return (
      <>
          <div className="nav-icon" >
              <NavLink to="/settings">
                  <Settings />
              </NavLink>
          </div>

          <div className="nav-icon">
              <HelpCircleIcon/>
          </div>
          <div className="nav-icon">
              <NotificationBell />
          </div>
      </>
  )
}

const PrivateRouteWrapper = ({children}) => {
    return (
    <div className = "flex">
      <SideNav
        type={'named'}
        expand={true}
        navOptions={sideNavOptions}
      />
      <div className="main-app">
        <AppBar
          justify="flex-end"
        >
            <div className="userAvatar">
              <div
                className="available-credit-container"
                style={{ marginRight: "10px" }}
              >
                <div className="credit-stats-main">
                    
                </div>
              </div>
              <RightLinks/>
            </div>
        </AppBar>
        <div className="layout-main-content">{children}</div>
      </div>
    </div>
  )
}

export default PrivateRouteWrapper
