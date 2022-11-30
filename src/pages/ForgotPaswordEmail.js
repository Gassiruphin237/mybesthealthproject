import React, { useRef, useState } from 'react'
import TextInput from '../component/TextInput'
import { Grid, Button, Alert, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import '../styles/ForgotPaswordEmail.css'
import validator from 'validator'
import axios from 'axios'

function ForgotPaswordEmail() {

    // state initialisation
    const [Email, setEmail] = useState([""])
    const [alert, setAlert] = useState(false)

    // feedback initialisation 
    const [errorMessage, setErrorMessage] = useState("")
    const [errore, setErrore] = useState("error")


    // E-mail verification 
    const onChangeEmail = React.useCallback((val) => {
        if (val.trim() === '') {
            setEmail(state => ({
                ...state,
                value: val,
                error: true,
                helperText: 'Required'
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
    }, [setEmail])

    const form = useRef()

    // Verification if the input no empty is 
    function validateAll() {
        return (
            Email.value.trim() !== ''
        )
    }

    // Submitting button 
    const onSubmit = React.useCallback((e) => {

        if (!validateAll()) {
            return;
        } else 
        {
            e.preventDefault();
            const data = {
                email: Email.value
            }
            console.log(data)

            // Use Api to talk with database
            axios.post('http://172.17.4.96:8000/api/forgot', data)
                .then(function (res) {
                    if (res.data.message) {
                        console.log(res.data.message)
                        setEmail(state => ({
                            ...state,
                            error: true,
                            helperText: res.data.message

                        }))

                        setErrore("success")
                        setAlert(true)
                        setErrorMessage(res.data.message)
                    }
                    console.log(res.data.message);
                })
                .catch(function (error) {

                    setErrore("error")
                    setAlert(true)
                    setErrorMessage(error.response.data.message)
                })
            console.log(data)
        }
    }, [Email])




    return (
        <div className='containers'>
            <Grid align='center'>
                <img src='./assets/logo.png' alt='logo' className='logoStyle' />
                <h1>Forgot password ?</h1>


                {
                    !alert ? null
                        : (
                            <Alert
                                severity={errore}
                                onChange={(e) => setErrorMessage(e.target.value)}
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            setAlert(false);
                                        }}
                                    >
                                        <CloseIcon fontSize="inherit" />
                                    </IconButton>
                                }
                            >
                                {errorMessage}</Alert>
                        )
                }

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
                </Button>
            </form>
        </div>
    )
}

export default ForgotPaswordEmail