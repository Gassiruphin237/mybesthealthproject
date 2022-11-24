import React, { useContext } from 'react'
import { AppBar, Toolbar, Typography, Button, Avatar, Stack } from '@mui/material';
import Auth from '../../utiles/Auth';
import logo from '../../assets/logo.png'

function Navbar() {

    const isAuthenticated = useContext(Auth)
    console.log(isAuthenticated);
    const goTo = React.useCallback((path) => {
        window.location = path
    }, [])

    return (
        <div>
            <AppBar position="static">
                <div className='homeButton'>
                    <Toolbar>

                        {!isAuthenticated ?
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

                            :

                            <>
                                <Typography>
                                    <Button color="inherit" onClick={() => {
                                        goTo('/account')
                                    }}>Account</Button>
                                </Typography>
                                <Typography>
                                    <Button variant="outlined" color="error">Log out</Button>
                                </Typography>
                                <Typography>
                                    <Stack direction="row" spacing={2}>
                                        <Avatar
                                            alt="A"
                                            src = {logo}
                                            sx={{ width: 40, height: 40 }}
                                        />
                                    </Stack>
                                </Typography>

                            </>
                        }

                    </Toolbar>
                </div>
            </AppBar>
            <div>
            </div>
        </div>
    )
}

export default Navbar