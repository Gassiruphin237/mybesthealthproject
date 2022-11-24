import React, { useRef, useState } from 'react'
import TextInput from '../component/TextInput'
import { Grid, Button, Typography, Link } from '@mui/material'
import '../styles/ForgotPaswordEmail.css'
import validator from 'validator'
import axios from 'axios'
import emailjs from '@emailjs/browser'

function ForgotPaswordEmail() {

    const [Email, setEmail] = useState([""])

    // E-mail verification 
    const onChangeEmail = React.useCallback((val) => {
        if (val.trim() === '') {
            setEmail(state => ({
                ...state,
                value: val,
                error: true,
                helperText: 'Require'
            }))
            return;
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

    const form = useRef()

   // gassiruphin@gmail.com
    const onSubmit = React.useCallback((e) => {
        e.preventDefault();

        const data = {
            email: Email.value
        }
        console.log(data)
        axios.post('http://172.17.4.22:8000/api/check', data, {
            headers: {
                "Content-Type" : "application/json"
            }
        })
            .then(function (res) {
                if (res.data.message) {
                    console.log(res.data.message)
                    setEmail(state => ({
                        ...state,
                        error: true,
                        helperText: res.data.message
            
                    }))
                } else {
                    // emailjs.sendForm('service_r08s7yy', 'template_t5t1ls8', form.current, 'OZ6-ZPfwBFrSlQ6p5')
                    //     .then((result) => {
                    //         console.log(result.text);
                    //     }, (error) => {
                    //         console.log(error.text);
                    //     });
                    console.log('Email envoyé')
                }
                console.log(res.data);
            })
            .catch(function (error) {
                console.log(error);
            })

        console.log(data)

    })

    return (
        <div className='containers'>
            <Grid align='center'>
                <img src='./assets/logo.png' alt='logo' className='logoStyle' />
                <h1>Forgot password ?</h1>
            </Grid>
            <form onSubmit={onSubmit} ref={form}>
                <div >
                    <TextInput
                        name='user_email'
                        label='Email'
                        type='Email'
                        value={Email.value}
                        error={Email.error}
                        placeholder={'Enter your email'}
                        helperText={Email.helperText}
                        onValueChange={onChangeEmail}
                    />
                </div>
                <Button
                    variant="contained"
                    type='submit'
                    className='buttonStyle'
                    fullWidth
                >
                    Submit

                    {/* <Typography>
                    <Link href="/">Submit</Link>
                </Typography> */}
                </Button>
            </form>
            {/* <div className='gridDive'>
                <div className='div1'></div>
                <div className='div2'><p2 className='p2'>or sign up with</p2></div>
                <div className='div1'></div>
            </div> */}

            {/* <div className='logoReaux'>
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
            </div> */}
        </div>
    )
}

export default ForgotPaswordEmail