import React from 'react'
import TextInput from '../component/TextInput'
import {Grid, Button} from '@mui/material'
import '../styles/ForgotPaswordEmail.css'

function ForgotPaswordEmail() {

    const [Email, setEmail] = React.useState()

  return (
    <div className='containers'>
        <Grid align='center'>
            <img src='./assets/logo.png' alt='logo' className='logoStyle' />
            <h1>Forgot password ?</h1>
        </Grid>
        <div >
                <TextInput
                    type='Email'
                    value={Email}
                    placeholder={'Enter your email'}
                    onValueChange={Email}
                />
        </div>
        <Button
                variant="contained"
                type='submit'
                className='buttonStyle'
                fullWidth
            >
                Log in
            </Button>
    </div>
  )
}

export default ForgotPaswordEmail