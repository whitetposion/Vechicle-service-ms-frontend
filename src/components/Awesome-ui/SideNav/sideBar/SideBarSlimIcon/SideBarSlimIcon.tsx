import React from "react"
import { Link } from "react-router-dom"
import "./IconStyle.scss"
/**
 * Icon for the side nav bar
 *
 * @param {String} src
 * @param {String} name
 * @param {String} link
 */
type SideBarIconProps = {
    SvgIcon: React.ElementType;
    name: string;
    url: string;
    theme: "dark" | "light";
};
const Icon: React.FC<SideBarIconProps> = ({ SvgIcon, name, url, theme }) => {
    return (
        <Link
            to={url}
            className={`side-nav-type-slim slim-type-${theme}`}
        >
            <div className="highlight"></div>
            <div className="icon-wrapper">
                <div
                    className="slim-type-icon"
                >
                    <SvgIcon/>
                </div>
            </div>
            <span className="slim-type-text" style={{ color: "#fff" }}>
                {name.toUpperCase()}
            </span>
            {/* <ToolTip
                direction="right"
                name={name.toUpperCase()}
                color={"#fff"}
                background="Default"
            /> */}
        </Link>
    )
}

export default Icon
