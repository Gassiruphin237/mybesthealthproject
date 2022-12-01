import React from 'react'
import { Grid, Link, Typography, Button } from '@mui/material'
import TextInput from './TextInput'
import '../styles/LoginPhone.css'
import validator from 'validator'
import axios from 'axios'

function LoginPhone() {

    //State initialisation
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

    // disabled button after submitting
    const [disable, setDisable] = React.useState(false)

    //Phone state verification 
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

    //Password state verification
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

        setPassword(state => {
            return {
                ...state,
                value: val,
                error: false
            }
        })

    }, [setPassword])

    //Function check validation
    function validateAll() {
        return (
            phone.value.trim() !== '' &&
            password.value.trim() !== ''
        )
    }

    //Fucntion submit
    const onSubmit = React.useCallback(() => {

        if (!validateAll()) {
            return
        }
        else {
            const data = {
                numberUser: phone.value,
                password: password.value
            }

            axios.post('http://172.17.4.31:8000/api/login', data)
                .then(function (res) {
                    if(res.date){
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
                            onValueChange={(e) => {
                                if(/^[0-9]*$/.test(e)){
                                    onPhoneChange(e)
                                }
                            }}
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
                        <Link href="forgot-password">Forgot password ?</Link>
                    </Typography>

                    <Button
                        variant="contained"
                        type='submit'
                        className='buttonStyle'
                        onClick={onSubmit}
                        disabled={disable}
                        fullWidth
                    >
                        Log in
                    </Button>
                    <Typography className='memberYet'> Not a member yet ?
                        <Link href="/register"> Join</Link>
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

export default LoginPhone