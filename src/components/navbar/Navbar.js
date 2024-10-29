import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  AppBar,
  Box,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material/";

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "right",
  });

  const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
  });

  const MenuItems = [
    { Name: "Home", Link: "home" },
    { Name: "About Us", Link: "aboutus" },
    { Name: "Research", Link: "research" },
    { Name: "Contact Us", Link: "contactus" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <AppBar sx={{ background: "white",display:"flex",justifyContent:"right"}} position={"sticky"} >
      <StyledToolbar>
        <MenuBox
          sx={{ display: { xs: "none", sm: "none", md: "flex" },  }}
        >
          {MenuItems.map((item, index) => (
            <Typography
              key={index}
              sx={{
                fontSize: "14px",
                color: "black",
                borderRadius: "5px",
                padding: "5px",
                '&:hover': {
                  background: "#3ebbfa",
                  color: "white",
                },
              }}
            >
              <Link to={item.Link} smooth={true} duration={500} style={{ textDecoration: "none" }}>
                {item.Name}
              </Link>
            </Typography>
          ))}
        </MenuBox>

        <MenuIcon
          sx={{
            color: "black",
            display: { xs: "block", sm: "block", md: "none" },
          }}
          onClick={() => setOpen(!open)}
        />
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box sx={{ width: 250, height: "90vh" }}>
          {MenuItems.map((item, index) => (
            <MenuItem
              key={index}
              onClick={() => setOpen(false)}
              sx={{
                cursor: "pointer",
                fontSize: "14px",
                '&:hover': {
                  background: "#3ebbfa",
                  color: "white",
                },
              }}
            >
              <Link
                to={item.Link}
                smooth={true}
                duration={500}
                style={{ textDecoration: "none", color: "black" }}
                
              >
                {item.Name}
              </Link>
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
