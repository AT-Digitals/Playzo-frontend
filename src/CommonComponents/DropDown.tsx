import { Button } from "@mui/material";
import Colors from "./Colors";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import routes from "../routes/routes";

const menuList = [
  {
    label: "Badminton",
  },
  {
    label: "CrossFit",
  },

  {
    label: "Turf",
  },
  {
    label: "Play Station",
  },

  {
    label: "Board Games",
  },
  {
    label: "Party Center",
  },
  {
    label: "Cafeteria",
  },
];
export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuEnter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div>
      <Link style={{ textDecoration: "none" }} to={routes.SERVICE}>
        <Button
          // aria-controls={open ? "basic-menu" : undefined}
          // aria-haspopup="true"
          // aria-expanded={open ? "true" : undefined}
          onMouseEnter={handleMenuEnter}
          onClick={handleClick}
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

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          onMouseLeave={handleClose}
          sx={{
            ".css-9wsdfz-MuiButtonBase-root-MuiMenuItem-root:hover": {
              color: Colors.BUTTON_COLOR,
              transition: "color 0.5s ease",

              border: "none",
              boxShadow: "none",
              background: "transparent",
            },
          }}
        >
          {menuList.map((menu, index) => (
            <MenuItem
              style={{
                border: "none",
                boxShadow: "none",
                background: "transparent",
              }}
              key={index}
              onClick={handleClose}
            >
              {menu.label}
            </MenuItem>
          ))}
        </Menu>
      </Link>
    </div>
  );
}
