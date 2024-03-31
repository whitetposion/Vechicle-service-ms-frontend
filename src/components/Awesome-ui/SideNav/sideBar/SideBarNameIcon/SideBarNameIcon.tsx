import React from "react";
import { NavLink } from "react-router-dom";
import "./SideBarNameIcon.scss";

type SideBarNameIconProps = {
    SvgIcon: React.ReactNode;
    name: string;
    link: string;
};

const SideBarNameIcon: React.FC<SideBarNameIconProps> = ({ SvgIcon, name, link }) => {
    return (
        <NavLink
            to={link}
            className={({isActive}) =>(`side-nav-type-name name-type ${isActive ? "type-name-active": ""}`)}
        >
            <div className="highlight"></div>
            <div
                className="name-type-icon"
            >
                {SvgIcon}
            </div>
            <div className="name-type-text">
                <span>{name}</span>
            </div>
        </NavLink>
    );
};

export default SideBarNameIcon;
