import React from 'react'
import TextInput from '../component/TextInput'
import {Grid, Button, Typography, Link} from '@mui/material'
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
                    label='Email'
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
                
                <Typography>
                    <Link href="/reset-password">Submit</Link>
                </Typography>
        </Button>
        <div className='gridDive'>
                <div className='div1'></div>
                <div className='div2'><p2 className='p2'>or sign up with</p2></div>
                <div className='div1'></div>
            </div>

            <div className='logoReaux'>
                <Typography>
                    <Link href="#" >
                        <img src='./assets/google.png' alt='logoGoogle' className='googleStyle' />
                    </Link>
                </Typography>
                <Typography>
                    <Link href="#" >
                        <img src='./assets/facebook.png' alt='logoFacebook' className='facebookStyle' />
                    </Link>
                </Typography>
        </div>
    </div>
  )
}

export default ForgotPaswordEmail