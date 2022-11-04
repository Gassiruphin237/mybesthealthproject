import React from 'react'
import {Grid, Paper, Link, Typography, Button } from '@mui/material'
import TextInput from './TextInput'
import '../styles/LoginPhone.css'
import validator from 'validator'

function LoginPhone() {

    const [phone, setPhone] = React.useState({
        value: '',
        error: false,
        helperText: 'Require'
    })
    const [password, setPassword] = React.useState({
        value: '',
        error: false,
        helperText: 'Require'
    })

    const onPhoneChange = React.useCallback((val) => {
        if(!validator.isEmpty(val)){
            setPhone(state => {
                return {
                    ...state,
                    error: true,
                    value: val,
                    helperText: 'Please enter valid number'
                }
            })
        } else {
            setPhone(state => ({
                ...state,
                error: false,
                value: val,
                helperText: 'Require'
            }))
        }
    }, [setPhone])

    const onPasswordChange = React.useCallback((val) => {
        if(!validator.isStrongPassword(val)) {
            setPassword(state => {
                return {
                    ...state,
                    error : true,
                    value : val,
                    helperText : 'Your password must to contain 8 characters '
                }
            })
        } else {
            setPassword(state=> ({
                ...state, 
                value: val,
                error: false
            }))
        }
    }, [setPassword])

    const onSubmit = React.useCallback(() => {
        const data = {
            phone: phone.value,
            password: password.value
        }
        console.log(data)
    }, [phone, password])

  return (
    <Grid >
        <Paper className='container'>
            <Grid>
                <div>
                    <TextInput
                        label = 'phone'
                        type  = 'number'
                        value = {phone.value}
                        error = {phone.error}
                        helperText = {phone.helperText}
                        placeholder = 'Enter your Phone number'
                        onValueChange = {onPhoneChange}
                    />
                </div>
                <div>
                    <TextInput
                        label = 'password'
                        type  = 'password'
                        value = {password.value}
                        error = {password.error}
                        helperText = {password.helperText}
                        placeholder = 'Enter your password'
                        onValueChange = {onPasswordChange}
                    />
                </div>
                <Typography className='forgetPassword'  >
                    <Link href="#">Forgot password ?</Link>
                </Typography>

                <Button 
                    variant="contained" 
                    type='submit' 
                    className='buttonStyle' 
                    onClick={onSubmit}
                    fullWidth 
                    >
                        Log in
                </Button>
                <Typography className='memberYet'> Not a member yet ?
                    <Link href="#">Join</Link>
                </Typography>
            </Grid>

            <div className='gridDive'>
                <div className='div1'></div>
                <div className='div2'><p2 className='p2'>or log in with</p2></div>
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
        </Paper>
    </Grid>
  )
}

export default LoginPhone