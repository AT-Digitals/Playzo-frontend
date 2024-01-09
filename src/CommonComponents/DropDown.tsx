import * as React from 'react';

import Button from '@mui/material/Button';
import Colors from './Colors';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import routes from '../routes/routes';

const menuList = [
    {
        href:routes.BADMINTON,
        label:"Badminton",
    },
    {
        href:routes.CROSSFIT,
        label:"CrossFit",
    },
    
    {
        href:routes.TURF,
        label:"Turf",
    },
    {
        href:routes.PLAYSTATION,
        label:"Play Station",
    },
 
    {
        href:routes.BOARDGAMES,
        label:"Board Games",
    },
    {
        href:routes.PARTYCENTER,
        label:"Party Center",
    },
    {
        href:routes.CAFETERIA,
        label:"Cafeteria",
    },
];
export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
                sx={{ color: Colors.WHITE, fontSize: "18px", textTransform: "none", }}
            >
                Services
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                sx={{ ".css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper": { width: "140px", height: "270px", backgroundColor: Colors.BUTTON_COLOR, color: Colors.WHITE } }}
            >
                {menuList.map((menu,index) => (
    <MenuItem to={menu.href} component={Link} key={index} onClick={handleClose}>{menu.label}</MenuItem>
   
      ))}

            </Menu>
        </div>
    );
}