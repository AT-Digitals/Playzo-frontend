import React, { useState } from "react";

import Colors from "./Colors";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import routes from "../routes/routes";
import styled from "styled-components";

const menuList = [
  { label: "Playzo 33", href: routes.PLAY33_SERVIVICES },
  { label: "Zo’s Cafe", href: routes.ZO_CAFE_SERVIVICES },
];

const HeaderLink = styled(Link)`
  text-decoration: none;
  position: relative;
  color: ${Colors.BUTTON_COLOR};
  transition: color 0.3s ease; /* Add transition for color change */

  &:hover {
    color: ${Colors.WHITE};
  }
`;

export default function BasicMenu() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        height: "100%",
      }}
    >
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ position: "relative" }}
      >
        {/* <HeaderLink to={routes.SERVICE}> */}
        <Typography
          sx={{
            color: Colors.WHITE,
            transition: "color 0.5s ease",
            textTransform: "uppercase",
            ":hover": {
              color: Colors.BUTTON_COLOR,
            },
          }}
          fontWeight={"400"}
          fontSize="14px"
          letterSpacing={"1.6px"}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            Services <KeyboardArrowDownIcon />
          </span>
        </Typography>
        {/* </HeaderLink> */}

        {isHovered && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              background: "#fff", // You can customize the background color
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // You can customize the box shadow
              zIndex: 1000,
              borderRadius: "4px",
              width: 100,
            }}
          >
            {menuList.map((menu, index) => (
              <HeaderLink to={menu.href}>
                <Typography
                  key={index}
                  sx={{
                    padding: "8px 16px",
                    cursor: "pointer",
                    color: "black",
                    whiteSpace: "nowrap",
                    "&:hover": {
                      color: Colors.BUTTON_COLOR,
                    },
                  }}
                >
                  {menu.label}
                </Typography>
              </HeaderLink>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
