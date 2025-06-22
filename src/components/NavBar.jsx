import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  Avatar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import logo from '../assets/my.jpeg'; // Your image path

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navItems = [
    { text: 'Home', path: '/' },
    { text: 'Profile', path: '/profile' },
    { text: 'Admin', path: '/admin' },
  ];

  return (
    <>
      <AppBar position="static" sx={{ mb: 2 }}>
        <Toolbar>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 2 }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* App Title */}
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            School Admission App
          </Typography>

          {/* Desktop Nav Buttons */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                component={Link}
                to={item.path}
              >
                {item.text}
              </Button>
            ))}
          </Box>

          {/* Avatar always visible */}
          <Box sx={{ ml: 2 }}>
            <Avatar alt="Logo" src={logo} sx={{ width: 40, height: 40 }} />
          </Box>

        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 200 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            {navItems.map((item) => (
              <ListItem button component={Link} to={item.path} key={item.text}>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
