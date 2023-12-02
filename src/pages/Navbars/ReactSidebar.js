import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";

const ReactSidebar = ({ sidebarItems, onClick }) => {
  const location = useLocation();
  console.log(sidebarItems, "sidebarItems");

  const renderMenuItems = (items) => {
    return items.map((item) => {
      const isActive = location.pathname === item.url;
      if (item.children && item.children.length > 0) {
        return (
          <SubMenu
            className="fs-15 text-bolder"
            active={isActive}
            rootStyles={{
              backgroundColor: "#2c3e50",
              color: "white",
              ":hover": {
                color: "black",
              },
            }}
            key={item.id}
            title={item.label}
            label={item.label}
            icon={item.icon}
          >
            {renderMenuItems(item.children)}
          </SubMenu>
        );
      } else {
        return (
          <Link className="textDecoration-none color-white" to={item.url}>
            <MenuItem
              onClick={onClick}
              className="fs-15 text-bolder"
              active={isActive}
              rootStyles={{
                backgroundColor: "#2c3e50",
                color: "white",
                ":hover": {
                  color: "black",
                  
                },
              }}
              key={item.id}
              icon={item.icon}
            >
              {item.label}
            </MenuItem>
          </Link>
        );
      }
    });
  };

  return (
    <div>
      <Sidebar
        backgroundColor="#2c3e50"
        rootStyles={{
          backgroundColor: "#2c3e50",
          color: "white",
          fontWeight: "bolder",
          borderColor: "#2c3e50",
        }}
      >
        <Menu iconShape="circle">{renderMenuItems(sidebarItems)}</Menu>
      </Sidebar>
    </div>
  );
};

export default ReactSidebar;
