import React from 'react'
import TextInput from '../component/TextInput'
import {Grid, Button, Link, Typography} from '@mui/material'
import '../styles/ForgotPaswordEmail.css'

function ResetPassword() {

    const [password, setPassword] = React.useState()
    const [ConfirmPassword, setConfirmPassword] = React.useState()

  return (
    <div className='containers'>
        <Grid align='center'>
            <img src='./assets/logo.png' alt='logo' className='logoStyle' />
            <h1>Reset password</h1>
        </Grid>
        <div >
                <TextInput
                    label='Password'
                    type='password'
                    value={password}
                    placeholder={'Enter new password'}
                    onValueChange={password}
                />
        </div>
        <div >
                <TextInput
                    label='Confirm password'
                    type='password'
                    value={ConfirmPassword}
                    placeholder={'confirm new password'}
                    onValueChange={ConfirmPassword}
                />
        </div>
        <Button
                variant="contained"
                type='submit'
                className='buttonStyle'
                fullWidth
            >
                Submit
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

export default ResetPassword