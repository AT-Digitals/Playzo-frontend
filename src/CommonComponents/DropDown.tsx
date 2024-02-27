import { Button, Typography } from "@mui/material";
import React, { useState } from "react";

import Colors from "./Colors";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import routes from "../routes/routes";

const menuList = [
  { label: "Badminton" },
  { label: "CrossFit" },
  { label: "Turf" },
  { label: "Play Station" },
  { label: "Board Games" },
  { label: "Party Center" },
  { label: "Cafeteria" },
];

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
      <Link style={{ textDecoration: "none" }} to={routes.SERVICE}>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ position: "relative" }}
        >
          <Button
            endIcon={<KeyboardArrowDownIcon />}
            sx={{
              fontSize: "14px",
              letterSpacing: "1.6px",
              textTransform: "uppercase",
              color: Colors.WHITE,
              transition: "color 0.5s ease",
              border: "none",
              boxShadow: "none",
              background: "transparent",
              ":hover": {
                color: Colors.BUTTON_COLOR,
              },
            }}
          >
            Services
          </Button>

          {isHovered && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                width: "100%",
                background: "#fff", // You can customize the background color
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // You can customize the box shadow
                zIndex: 1000,
                borderRadius: "4px",
              }}
            >
              {menuList.map((menu, index) => (
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
              ))}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}