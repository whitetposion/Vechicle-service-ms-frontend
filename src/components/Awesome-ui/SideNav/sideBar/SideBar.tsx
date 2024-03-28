import React, { ReactNode } from "react";

import "./sideBar.scss";

interface SideBarProps {
    type: "named" | "slim";
    expand: boolean;
    theme: string;
    children?: ReactNode;
}

const SideBar: React.FC<SideBarProps> = ({ type, expand, theme, children }) => {
    return (
        <>
            <div
                className={`sideBar ${expand && "expand"} ${
                    type === "named" ? "medium" : "slim"
                } theme-${theme}`}
            >
                <div className="topIcons">
                    {children}
                </div>
            </div>
            <div
                className={`spacer ${
                    expand
                        ? "space-expand"
                        : type === "named"
                        ? "space-medium"
                        : "space-slim"
                }`}
            ></div>
        </>
    );
};

export default SideBar;
