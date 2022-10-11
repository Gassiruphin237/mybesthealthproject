import React from 'react'
import { Grid, TextField, Button, Typography, Link } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
// import './SignUp.css'


function SignUp() {

    const container = {padding: 10}
    const texfieldStyle = {marginBottom:15}
    const buttonStyle = {backgroundColor: '#9FACAF', color: 'black', fontWeight: 'bold', borderRadius: 5, marginBottom: 10}
    const checkboxStyle = {marginBottom: 10, textAlign: 'justify'}
    const typoStyle = {marginTop: 30, textAlign: 'center'}

    return (
        <Grid style={container}>
            <h2 align='center'>Sign Up</h2>
                <TextField label="First Name" name='fName' placeholder='First Name' fullWidth style={texfieldStyle} />
                <TextField label="Last Name" name='LName' placeholder='Last Name' fullWidth style={texfieldStyle} />
                <TextField label="Email" name='email' type='email' placeholder='Email' fullWidth style={texfieldStyle} />
                <TextField label="Phone" name='phone' type='number' placeholder='Phone' fullWidth style={texfieldStyle} />
                <TextField label="Password" name='password' type="password" placeholder='Password' fullWidth style={texfieldStyle} />
                <TextField label="Confirm Password" name='Cpassword' type="password" placeholder='Confirm Password' fullWidth style={texfieldStyle} />
                <Button type='submit' variant='contained' fullWidth style={buttonStyle}>Sign up</Button>
                <FormControlLabel 
                    control={
                        <Checkbox name="gilad"  />
                    }
                    label="I have read and accept the terms of service and privacy policy" style={checkboxStyle} 
                />
                <Typography style={typoStyle} > Already a member ?
                    <Link href='#' >Log in</Link>
                </Typography>
            
        </Grid>
    )
}

export default SignUp