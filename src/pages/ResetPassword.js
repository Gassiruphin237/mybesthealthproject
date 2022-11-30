import React, { useState } from 'react'
import TextInput from '../component/TextInput'
import { Grid, Button, Alert, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import '../styles/ForgotPaswordEmail.css'
import { useNavigate, useParams } from 'react-router-dom'
import validator from 'validator'
import axios from 'axios'

function ResetPassword() {


    // UseParam for the reset password 
    let { token } = useParams()

    // State feedback initialisation
    const [alert, setAlert] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [errore, setErrore] = useState("error")


    // Password state initialation
    const DEFAULT_VALUES = {
        value: '',
        error: false,
        helperText: 'Require'
    }

    const DEFAULT_CONTENT_DATAS = {
        password: DEFAULT_VALUES,
        confirmPassword: DEFAULT_VALUES
    }

    const [ResetPassword, setResetPassword] = useState(
        DEFAULT_CONTENT_DATAS
    )

    // verification password
    const onPasswordChange = React.useCallback((val) => {
        if (val.trim() === '') {
            setResetPassword(state => ({
                ...state,
                password: {
                    value: val,
                    error: true,
                    helperText: 'Require'
                }

            }))
            return;
        }

        if (!validator.isStrongPassword(val)) {
            setResetPassword(state => ({
                ...state,
                password: {
                    error: true,
                    value: val,
                    helperText: 'Your password must to contain 8 characters '
                }
            }))
            return
        }

        setResetPassword(state => ({
            ...state,
            password: {
                value: val,
                error: false
            }
        }))
    }, [setResetPassword])



    // Confirm password verifaication 
    const onConfirmPasswordChange = React.useCallback((val) => {
        if (val.trim() === '') {
            setResetPassword(state => ({
                ...state,
                confirmPassword: {
                    value: val,
                    error: true,
                    helperText: 'Require'
                }
            }))
            return;
        }

        if (!validator.isStrongPassword(val)) {
            setResetPassword(state => ({
                ...state,
                confirmPassword: {
                    error: true,
                    value: val,
                    helperText: 'Your password must to contain 8 characters '
                }
            }))
            return
        }

        if (ResetPassword.password.value !== val) {
            setResetPassword(state => ({
                ...state,
                confirmPassword: {
                    error: '',
                    value: val,
                    helperText: "Your password don't match"
                }

            }))
            return;
        }

        setResetPassword(state => ({
            ...state,
            confirmPassword: {
                error: false,
                value: val,
                helperText: 'Your password must to contain 8 characters '
            }

        }))

    }, [setResetPassword, ResetPassword])

    const wait = (duration = 1000) => {
        setTimeout(() => {
            ResetPassword.password.value = ""
            ResetPassword.confirmPassword.value = ""
            navigate('/login')
        }, duration)
    }

    //validate All tcheck if password and reset password matched
    function validateAll() {
        if (ResetPassword.password.value !== ResetPassword.confirmPassword.value) {
            setResetPassword(state => ({
                ...state,
                confirmPassword: {
                    ...state.confirmPassword,
                    error: true,
                    helperText: "Your password don't match"
                }

            }))
            return false
        }

        return (
            ResetPassword.password.value.trim() !== ''
        )
    }

    // go to login page after password updated
    const navigate = useNavigate();


    // function validation 
    const onSubmit = React.useCallback(async () => {
        if (!validateAll()) return

        const data = {
            password: ResetPassword.password.value,
            password_confirmation: ResetPassword.confirmPassword.value,
            token: token
        }

        // Use Api to talk with database
        await axios.post('http://172.17.4.96:8000/api/reset', data)
            .then(function (res) {
                setErrore("success")
                setAlert(true)
                setErrorMessage(res.data.message)
                wait(2000)
                console.log(res.data);
            })
            .catch(function (error) {
                setErrore("error")
                setAlert(true)
                setErrorMessage(error.response.data.message)
                console.log(error);
            })


    }, [ResetPassword, setResetPassword])

    return (
        <div className='containers'>
            <Grid align='center'>
                <img src='../assets/logo.png' alt='logo' className='logoStyle' />
                <h1>Reset password</h1>

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
                                            wait()
                                            // ResetPassword.password.value = ""
                                            // ResetPassword.confirmPassword.value = ""
                                            // navigate('/login')
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
            <div >
                <TextInput
                    label='New password'
                    type='password'
                    value={ResetPassword.password.value}
                    error={ResetPassword.password.error}
                    helperText={ResetPassword.password.helperText}
                    placeholder={'Enter new password'}
                    onValueChange={onPasswordChange}
                />
            </div>
            <div >
                <TextInput
                    label='Confirm new password'
                    type='password'
                    value={ResetPassword.confirmPassword.value}
                    error={ResetPassword.confirmPassword.error}
                    helperText={ResetPassword.confirmPassword.helperText}
                    placeholder={'confirm new password'}
                    onValueChange={onConfirmPasswordChange}
                />
            </div>
            <Button
                variant="contained"
                type='submit'
                className='buttonStyle'
                fullWidth
                onClick={onSubmit}
            >
                Submit
            </Button>
            <div className='gridDive'>
                <div className='div1'></div>
                <div className='div2'><p className='p2'>  .  </p></div>
                <div className='div1'></div>
            </div>


        </div>
    )
}

export default ResetPassword