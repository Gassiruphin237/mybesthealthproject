import React from 'react'
import {Grid, Link, Button, Typography } from '@mui/material'
import '../styles/LoginEmail.css'
import TextInput from './TextInput'
import validator from "validator"

export default function LoginEmail() {


   

    const [email, setEmail] = React.useState({
        value: '',
        error: false,
        helperText: 'Required'
    })
    const [password, setPassword] = React.useState({
        value: '',
        error: false,
        helperText: 'Required'
   })

    
    const onEmailChange = React.useCallback((val) => {
        if(!validator.isEmail(val)){
            setEmail(state => {
                return {
                    ...state,
                    error: true,
                    value: val,
                    helperText: 'Please enter valid email!'
                }
            })
        }else{
            setEmail(state=> ({
                ...state, 
                value: val,
                error: false,
                helperText: 'Required'
            }))
        }
    }, [setEmail])

    const onPasswordChange = React.useCallback((val) => {
        if(!validator.isStrongPassword(val)){
            setPassword(state => {
                return {
                    ...state,
                    error: true,
                    value: val,
                    helperText: 'Your password must contain minimum 8 characters and must contain only special chars (., _, # and @)'
                }
            })
        }else{
            setPassword(state=> ({
                ...state, 
                value: val,
                error: false
            }))
        }
    }, [setPassword])

    const onSubmit = React.useCallback(() => {
        const data = {
            email: email.value,
            password: password.value
        }
        console.log(data)
    }, [email, password])

  return (
    <Grid>
        <div className='paperStyle'>
               <div>
               <TextInput
                    label='Email'
                    type='email'
                    value={email.value}
                    error={email.error}
                    helperText={email.helperText}
                    placeholder={'Enter your email'}
                    onValueChange = {onEmailChange}
                />
               </div>
               <div>
               <TextInput
                    label='Password'
                    type='password'
                    value={password.value}
                    error={password.error}
                    helperText={password.helperText}
                    placeholder={'Enter your password'}
                    onValueChange = {onPasswordChange}
                />
               </div>

                <Typography className='forgetPassword'  >
                    <Link href="forgot-password">Forgot password ?</Link>
                </Typography>

                <Button variant="contained" className='buttonStyle' onClick={onSubmit} fullWidth >Log in</Button>
                <Typography className='memberYet'> Not a member yet ?
                    <Link href="/Sign-up">Join</Link>
                </Typography>

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
        </div>
        
    </Grid>
  )
}
