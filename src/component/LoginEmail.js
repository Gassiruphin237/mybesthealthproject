import React from 'react'
import { Grid, Link, Button, Typography} from '@mui/material'
import TextInput from './TextInput'
import validator from "validator"
import axios from 'axios';
import { ResetTv, Tune } from '@mui/icons-material';

export default function LoginEmail() {

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

    // disabled button after submitting
    const [disable, setDisable] = React.useState(false)
   

    // E-mail verification 
    const onChangeEmail = React.useCallback((val) => {
        if (val.trim() === '') {
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
        if (!validateAll()) {
            return (
                email.error,
                password.error
            )
        }
        else {
            
            const data = {
                email: email.value,
                password: password.value
            }

            axios.post('http://172.17.4.31:8000/api/login', data)
                .then(function (res) {
                    if (res.data) {
                        setPassword(state => ({
                            ...state,
                            error: true,
                            helperText: 'Password isn\'t correct'
                        }))

                    } else {
                        window.location = '/'
                    }
                    console.log(res.data);
                })
                .catch(function (error) {
                    console.log(error);
                })

            console.log(data)
            setDisable(true)

        }
    }, [email, password])

    return (
        <Grid>
            <div className='container'>
                <Grid>
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

                    <Typography className='forgetPassword'  >
                        <Link href="forgot-password">Forgot password ?</Link>
                    </Typography>

                    <Button
                        variant="contained"
                        className='buttonStyle'
                        onClick={onSubmit}
                        disabled={disable}
                        fullWidth
                    >
                        Log in
                    </Button>
                    <Typography className='memberYet'> Not a member yet ?
                        <Link href="/register"> Join </Link>
                    </Typography>
                </Grid>
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
        </Grid>
    )
}
