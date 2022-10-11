import React from 'react'
import {Button, Grid, Paper,TextField,Typography,Link, Avatar} from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';



function Login() {
  const paperStyle = {padding: 20, height: '70vh', width: 300, margin: "0 auto"}
  const btnStyle = {margin: "8px 0", backgroundColor: '#04A3BD'}
  const typStyle = {align: 'center', borderBottom:"solid black 2px", paddingBottom: '50px' }
  const TextFieldStyle = {marginBottom: 10}
  const linkStyle = {display: 'flex', marginTop: 50, justifyContent: 'space-around', borderBottom:"solid black 2px", paddingBottom: '50px'}
  const facebookstyle = {backgroundColor: '#04A3BD', width: '50px', height: '50px'}
  const googleStyle = {backgroundColor: '#D9D9D9', width: '50px', height: '50px'}

  return (
    <Grid>
        <Paper style={paperStyle}>
          <TextField label="Email" name="email" placeholder="Email" size='300' required style={TextFieldStyle} fullWidth/>
          <TextField label="password" name="password" type="password" placeholder="Password" required style={TextFieldStyle} fullWidth/>
          <Typography fullwidth>
            <Link href="#" >Forgot password ?</Link>
          </Typography>
          <Button type='submit' variant="contained" fullWidth style={btnStyle}>Log In </Button>
          <Typography style={typStyle}> Not a members yet ?
            <Link href="#" >Sign Up </Link>
          </Typography>

          <Grid style={linkStyle}>

            <Typography> 
              <Link href="#" >
                <Avatar style={googleStyle} >
                  <GoogleIcon/>
                </Avatar>
              </Link>
            </Typography>

            <Typography> 
              <Link href="#" >
                <Avatar style={facebookstyle}>
                <FacebookIcon/>
                </Avatar>
              </Link>
            </Typography>

          </Grid>
    

        </Paper>
    </Grid>
  )
}

export default Login