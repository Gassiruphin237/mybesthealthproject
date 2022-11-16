import React, { useState } from 'react'
import { Grid, Paper, Link, Typography, Button } from '@mui/material'
import TextInput from './TextInput'
import '../styles/LoginPhone.css'
import validator from 'validator'
import axios from 'axios'

function LoginPhone() {

    /*
      State initialisation
    */
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

    /*
      Phone state verification 
    */
    const onPhoneChange = React.useCallback((val) => {
        if (val.trim() === '') {
            setPhone(state => ({
                ...state,
                value: val,
                error: true,
                helperText: 'Require'
            }))
            return;
        }

        if (!validator.isMobilePhone(val)) {
            setPhone(state => {
                return {
                    ...state,
                    error: true,
                    value: val,
                    helperText: 'Please enter valid number'
                }
            })
            return;
        }

        setPhone(state => {
            return {
                ...state,
                error: false,
                value: val,
            }
        })

    }, [setPhone])

    /*
      Password state verification
    */
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

        if (!validator.isStrongPassword(val)) {
            setPassword(state => {
                return {
                    ...state,
                    error: true,
                    value: val,
                    helperText: 'Your password must to contain 8 characters '
                }
            })
            return
        }

        setPassword(state => {
            return {
                ...state,
                value: val,
                error: false
            }
        })

    }, [setPassword])

    /*
      Function check validation
    */
    function validateAll() {
        return (
            phone.value.trim() !== '' &&
            password.value.trim() !== ''
        )
    }

    /*
      Fucntion submit 
    */
    const onSubmit = React.useCallback(() => {

        if (!validateAll()) {
            return
        }
        else {
            const data = {
                numberUser: phone.value,
                password: password.value
            }

            axios.post('http://172.17.4.27:8000/api/login', data)
                .then(function (res) {
                    console.log(res.data);
                })
                .catch(function (error) {
                    console.log(error);
                })

            console.log(data)
        }
    }, [phone, password])



    return (
        <Grid >
            <div className='container'>
                <Grid >
                    <div>

                        <TextInput
                            label='Phone'
                            type='number'
                            value={phone.value}
                            error={phone.error}
                            helperText={phone.helperText}
                            placeholder='Enter your Phone number'
                            onValueChange={onPhoneChange}
                        />
                    </div>
                    <div>
                        <TextInput
                            label='Password'
                            type='password'
                            value={password.value}
                            error={password.error}
                            helperText={password.helperText}
                            placeholder='Enter your password'
                            onValueChange={onPasswordChange}
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
                        <Link href="/Sign-up">Join</Link>
                    </Typography>
                </Grid>

                <div className='gridDive'>
                    <div className='div1'></div>
                    <div className='div2'><p2 className='p2'>Or log in with</p2></div>
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

export default LoginPhone