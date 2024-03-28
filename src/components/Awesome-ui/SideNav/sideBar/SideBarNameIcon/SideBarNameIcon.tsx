import React from "react";
import { Link } from "react-router-dom";
import "./SideBarNameIcon.scss";

type SideBarNameIconProps = {
    SvgIcon: React.ElementType;
    name: string;
    link: string;
    theme: "dark" | "light";
};

const SideBarNameIcon: React.FC<SideBarNameIconProps> = ({ SvgIcon, name, link, theme }) => {
    return (
        <Link
            to={link}
            className={`side-nav-type-name name-type-${theme}`}
        >
            <div
                className="name-type-icon"
            >
                {SvgIcon && <SvgIcon />}
            </div>
            <div className="name-type-text">
                <span>{name}</span>
            </div>
        </Link>
    );
};

export default SideBarNameIcon;
