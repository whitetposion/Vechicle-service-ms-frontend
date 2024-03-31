import React, { ReactNode } from "react";
import { BookUser } from "lucide-react";

import "./sideBar.scss";

interface SideBarProps {
    type: "named" | "slim";
    expand: boolean;
    children?: ReactNode;
}

const SideBar: React.FC<SideBarProps> = ({ type, expand, children }) => {
    return (
        <>
            <div
                className={`sideBar ${expand && "expand"} ${
                    type === "named" ? "medium" : "slim"
                }`}
            >
                <div className="topIcons">
                    <div className="company-logo">
                        <div className="logo" >
                            {<BookUser/> }
                        </div>
                    </div>
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
