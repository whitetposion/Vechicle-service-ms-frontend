import { HelpCircleIcon, Settings, ShoppingCart, SquareGanttChart, Wrench } from "lucide-react"
import { Link } from "react-router-dom"
import AppBar from "@/components/Awesome-ui/AppBar/AppBar"
import SideNav from "@/components/Awesome-ui/SideNav/SideNav"
import NotificationBell from "@/components/Awesome-ui/NotificationBell/NotificationBell"
import "./styles.scss"

let sideNavOptions = [
  { name: "Products", link: "/products", Icon: <ShoppingCart/> },
  { name: "Follow Ups", link: "/follow-ups", Icon: <SquareGanttChart/>  },
  { name: "Services", link: "/services", Icon: <Wrench/>  },
     
]
let topNavOptions = [
  { name: "Dasboard", link: "/", },
  { name: "Inventory", link: "/inventory"},
  { name: "Tickets", link: "/tickets" },
     
]
const RightLinks = ({}) => {
  return (
      <>
          <div className="nav-icon" >
              <Link to="/settings/main">
                  <Settings />
              </Link>
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
          justify="space-between"
        >
          <div className="flex h-full w-full justify-evenly">
            {topNavOptions.map((link, index) => (
              <div className="h-full text-10 flex justify-center items-center m-4 hover:text-gray-500">
                <Link
                  key={index}
                  to={link.link}
                >
                  {link.name}
                </Link>
              </div>
              
            ))}
          </div>
            <div className="userAvatar">
              <div
                className="available-credit-container"
                style={{ marginRight: "10px" }}
              >
                <div className="credit-stats-main">
                    {/* <Credit /> */}
                    <p> coins</p>
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
