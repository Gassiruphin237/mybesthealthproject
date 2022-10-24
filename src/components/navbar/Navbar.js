import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/logo.png'

function Navbar() {
  const ToolStyle = { justifyContent: 'space-around', color: '#04A3BD'
  }
  const logoStyle = {marginRight: 'auto', height: 40, width: 40, color: '#04A3BD'}
  
 
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar  position="static" >
      <Toolbar style={ToolStyle} >
      <img src={logo} alt='logo' style={logoStyle}/>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
        <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar