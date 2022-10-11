import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/logo.png'

function Navbar() {
  const logoStyle = {height: 40, width: 40, backgroundColor: 'blue'}
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div"  >
           <img src={logo} alt='logo' style={logoStyle}/>
        </Typography> 
        <Button color="inherit" sx={{ flexGrow: 10 }}></Button>
       
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