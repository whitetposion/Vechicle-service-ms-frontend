import React from "react"
import { NavLink } from "react-router-dom"
import "./IconStyle.scss"
/**
 * Icon for the side nav bar
 *
 * @param {String} src
 * @param {String} name
 * @param {String} link
 */
type SideBarIconProps = {
    SvgIcon?: React.ReactNode;
    name: string;
    url: string;
};
const Icon: React.FC<SideBarIconProps> = ({ SvgIcon, name, url }) => {
    return (
        <NavLink
            to={url}
            className={({isActive}) =>(`side-nav-type-slim  ${isActive ? "type-slim-active": ""}`)}
        >
            <div className="highlight"></div>
            <div className="icon-wrapper">
                <div
                    className="slim-type-icon"
                >
                    {SvgIcon}
                </div>
            </div>
            <span className="slim-type-text" >
                {name.toUpperCase()}
            </span>
        </NavLink>
    )
}

export default Icon
