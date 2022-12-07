import React from 'react'
import { Grid, Link, Button, Typography } from '@mui/material'
import TextInput from './TextInput'
import validator from "validator"
import { accountService } from './services/account.service'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import '../styles/Login.css'

export default function LoginEmail() {

    const Navigate = useNavigate()

    // State initilisation 
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

    // E-mail verification 
    const onChangeEmail = React.useCallback((val) => {
        if (!val.trim() === '') {
            setEmail(state => ({
                ...state,
                value: val,
                error: true,
                helperText: 'Require'
            }))
        }

        if (!validator.isEmail(val)) {
            setEmail(state => {
                return {
                    ...state,
                    value: val,
                    error: true,
                    helperText: 'Enter valid email'
                }
            })
            return
        }
        setEmail(state => ({
            ...state,
            value: val,
            error: false,

        }))
    }, [setEmail, validator])

    // Passsword verification
    const onPasswordChange = React.useCallback((val) => {
        if (val.trim() === '') {
            setPassword(state => ({
                ...state,
                value: val,
                error: true,
                helperText: 'Require'
            }))
            return;
        }
        setPassword(state => ({
            ...state,
            value: val,
            error: false
        }))

    }, [setPassword])

    //verifcation input before submitting
    function validateAll() {

        return (
            email.value.trim() !== '' &&
            password.value.trim() !== ''
        )
    }

    //function submitting axios post 
    const onSubmit = React.useCallback(() => {
        if (!validateAll()) {return}

        else {

            const data = {
                email: email.value,
                password: password.value
            }

            axios.post('http://172.17.4.96:8000/api/login', data)
                .then(function (res) {
                    if (res.data) {
                        setPassword(state => ({
                            ...state,
                            error: false,
                            helperText: 'Password isn\'t correct'
                        }))

                        accountService.saveToken(res.data.access_token)
                        Navigate("/account")
                    } else {
                        window.location = '/'
                    }
                    console.log(res.data);
                })
                .catch(function (error) {
                    console.log(error);
                })

            console.log(data)

        }
    }, [email, password])


    return (
        <div className='indexStyle'>
            <div>
                <div>
                    <div>
                        <TextInput
                            label='Email'
                            type='email'
                            value={email.value}
                            error={email.error}
                            helperText={email.helperText}
                            placeholder={'Enter your email'}
                            onValueChange={onChangeEmail}
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
                            onValueChange={onPasswordChange}
                        />
                    </div>

                    <div className='forgetPassword'  >
                        <Link href="forgot-password">Forgot password ?</Link>
                    </div>

                    <Button
                        variant="contained"
                        className='buttonStyle2'
                        onClick={onSubmit}
                        fullWidth
                    >
                        Log in
                    </Button>

                    <Typography className='memberYet'> Not a member yet ?
                        <Link href="/register"> Join </Link>
                    </Typography>

                </div>
                
                <div className='gridDive'>
                    <div className='div1'></div>
                    <div className='div2'><span className='p2'>Or log in with</span></div>
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
        </div>
    )
}
