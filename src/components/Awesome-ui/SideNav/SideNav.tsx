import React from "react";
import SideBar from "./sideBar/SideBar";
import Icon from "./sideBar/SideBarSlimIcon/SideBarSlimIcon";
import SideBarNameIcon from "./sideBar/SideBarNameIcon/SideBarNameIcon";

interface NavOption {
  name: string;
  link: string;
  Icon: React.ReactNode; // Adjust the type as per your SvgIcon component props
}

interface Props {
  type: "named" | "slim";
  expand: boolean ;
  navOptions: NavOption[];
}

const SideNav: React.FC<Props> = ({ type, expand, navOptions }) => {
  return (
    <SideBar type={type} expand={expand}>
      {type === "named" &&
        navOptions.map((link, index) => (
          <SideBarNameIcon
            key={index}
            name={link.name}
            link={link.link}
            SvgIcon={link.Icon}
          />
        ))}
      {(!type || type === "slim") &&
        navOptions.map((link, index) => (
          <Icon
            key={index}
            name={link.name}
            url={link.link}
            SvgIcon={link.Icon}
          />
        ))}
    </SideBar>
  );
};

export default SideNav;
