import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Colors from './Colors';

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
                <MenuItem onClick={handleClose}>Badminton</MenuItem>
                <MenuItem onClick={handleClose}>CrossFit</MenuItem>
                <MenuItem onClick={handleClose}>Turf</MenuItem>
                <MenuItem onClick={handleClose}>PlayStation</MenuItem>
                <MenuItem onClick={handleClose}>Board Games</MenuItem>
                <MenuItem onClick={handleClose}>Party Center</MenuItem>
                <MenuItem onClick={handleClose}>Cafeteria</MenuItem>

            </Menu>
        </div>
    );
}