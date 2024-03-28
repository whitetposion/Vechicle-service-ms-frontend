import { HelpCircleIcon, Settings, ShoppingCart, SquareGanttChart, Wrench } from "lucide-react"
import { Link } from "react-router-dom"
import AppBar from "@/components/Awesome-ui/AppBar/AppBar"
import SideNav from "@/components/Awesome-ui/SideNav/SideNav"
import NotificationBell from "@/components/Awesome-ui/NotificationBell/NotificationBell"

let navOptions = [
  { name: "Products", link: "/products", Icon: <ShoppingCart/> },
  { name: "Follow Ups", link: "/follow-ups", Icon: <SquareGanttChart/>  },
  { name: "Services", link: "/services", Icon: <Wrench/>  },
     
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
const PrivateRouteWrapper = () => {
    return (
    <div className = "flex">
      <SideNav
        type={'named'}
        expand={true}
        theme={"light"}
        navOptions={navOptions}
      />
      <div className="main-app">
        <AppBar
          justify="space-between"
        >
          {/* insert routes here */}
            <div className="userAvatar">
              <div
                className="available-credit-container"
                style={{ marginRight: "10px" }}
              >
                <div className="credit-stats-main">
                    {/* <Credit /> */}
                    <p> coins</p>
                </div>
                <p>Credit Balance</p>
              </div>
              <RightLinks/>
            </div>
        </AppBar>
        <div className="layout-main-content">{props.children}</div>
      </div>
    </div>
  )
}

export default PrivateRouteWrapper
