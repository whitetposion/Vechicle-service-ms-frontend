import React, { ReactNode } from "react"
import "./AppBar.scss"

/**
 * To be used as wrapper for the users
 *
 * @param {String} color
 * @param {String} justify Type [space-around, space-between, space-evenly]
 */
type Props = {
    color?: string;
    justify?: string;
    theme?: "light" | "dark";
    className?: string;
    props?: any
    children?: ReactNode;
}
const AppBar:React.FC<Props> = ({ justify, className, children }) => {
    return (
        <div className={`AppBar  ${className || ""}`} >
            <div className={`ToolBar ToolBar-${justify}`}>{children}</div>
        </div>
    )
}

export default AppBar
