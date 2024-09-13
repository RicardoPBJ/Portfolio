import * as React from "react";
import "../Styles/MobileNavBar.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import { IconRender } from "../helpers";
import { FiAlignJustify } from "react-icons/fi";

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <IconRender icon={FiAlignJustify} size={50} />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        sx={{
          "& .MuiMenu-paper": {
            backgroundColor: "rgb(0, 3, 15)",
            blockSize: "10em",
            inlineSize: "10em",
          },
        }}
      >
        <Box
          sx={{
            display: "block",
            justifyContent: "space-between",
            textAlign: "center",
          }}
          className="l-label"
        >
          <Link to="/frontend">
            <MenuItem onClick={handleClose}>Front-End</MenuItem>
          </Link>
          <Link to="/backend">
            <MenuItem onClick={handleClose}>Back-End</MenuItem>
          </Link>
          <Link to="/about">
            <MenuItem onClick={handleClose}>Sobre</MenuItem>
          </Link>
        </Box>
      </Menu>
    </div>
  );
}
