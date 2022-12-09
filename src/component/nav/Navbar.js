import React from 'react'
import { AppBar, Toolbar, Typography, Button, Avatar, Stack } from '@mui/material';
import logo from '../../assets/logo.png'
import { accountService } from '../services/account.service';
import './navbar.css'

function Navbar() {

 


    const goTo = React.useCallback((path) => {
        window.location = path
    }, [])

    const handleLogOut = () => {
        accountService.logOut();
        console.log('we are deconected !!!')
    }

    return (
        <div>
            <AppBar position="static">
                <div className='homeButton'>
                    <Toolbar>
                        
                            <>
                                <Typography>
                                    <Button onClick={() => {
                                        goTo('/login')
                                    }} color="inherit">Login</Button>
                                </Typography>
                                <Typography>
                                    <Button color="inherit" onClick={() => {
                                        goTo('/register')
                                    }}>Sign up</Button>
                                </Typography>

                            </>


                            <>

                                <Typography>
                                    <Button color="inherit" onClick={() => {
                                        goTo('/account')
                                    }}>Account</Button>
                                </Typography>

                                <div>
                                    <Button variant="outlined" color="error" onClick={handleLogOut} >Log out</Button>
                                </div>

                                <div>
                                    <Stack direction="row" spacing={2}>
                                        <Avatar
                                            alt="A"
                                            src={logo}
                                            sx={{ width: 40, height: 40 }}
                                        />
                                    </Stack>
                                </div>

                            </>

                    </Toolbar>
                </div>
            </AppBar>
            <div>
            </div>
        </div>
    )
}

export default Navbar