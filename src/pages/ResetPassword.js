import React, { useContext } from 'react'
import TextInput from '../component/TextInput'
import { Grid, Button } from '@mui/material'
import '../styles/ForgotPaswordEmail.css'
import { useParams } from 'react-router-dom'
import validator from 'validator'
import { multiStepContext } from '../StepContext'

function ResetPassword() {

    const { usersData, setUsersData, setStep} = useContext(multiStepContext)

    // useParam for the reset password 
    let { token } = useParams()

    // verification password
    const onPasswordChange = React.useCallback((val) => {
        if (val.trim() === '') {
            setUsersData(state => ({
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
            setUsersData(state => ({
                ...state,
                password: {
                    value: val,
                    error: true,
                    elperText: 'Your password must to contain 8 characters '
                }
            }))

            return;
        }

        setUsersData(state => ({
            ...state,
            password: {
                value: val,
                error: false,
                elperText: 'Your password must to contain 8 characters '
            }
        }))
    }, [setUsersData])


    // Confirm password verifaication 
    const onConfirmPasswordChange = React.useCallback((val) => {
        if (val.trim() === '') {
            setUsersData(state => ({
                ...state,
                ConfirmPassword: {
                    value: val,
                    error: true,
                    helperText: 'Require'
                }
            }))
            return;
        }

        if (!validator.isStrongPassword(val)) {
            setUsersData(state => ({
                ...state,
                ConfirmPassword: {
                    value: val,
                    error: true,
                    helperText: 'Your password must to contain 8 characters '
                }
            }))

            return;
        }

        if (usersData.password.value !== val) {
            setUsersData(state => ({
                ...state,
                ConfirmPassword: {
                    value: val,
                    error: true,
                    helperText: "Your password don't match"
                }
            }))

            return;
        }

        setUsersData(state => ({
            ...state,
            ConfirmPassword: {
                value: val,
                error: false,
                helperText: 'Your password must to contain 8 characters '
            }
        }))


    }, [setUsersData, usersData])

    //Function state and validation 
    


    // function validation 
   
    return (
        <div className='containers'>
            <Grid align='center'>
                <img src='../assets/logo.png' alt='logo' className='logoStyle' />
                <h1>Reset password</h1>
            </Grid>
            <div >
                <TextInput
                    label='New password'
                    type='password'
                    value={usersData.phone.value}
                    error={usersData.phone.error}
                    helperText={usersData.phone.helperText}
                    placeholder={'Enter new password'}
                    onValueChange={onPasswordChange}
                />
            </div>
            <div >
                <TextInput
                    label='Confirm new password'
                    type='password'
                    value={usersData.ConfirmPassword.value}
                    error={usersData.ConfirmPassword.error}
                    helperText={usersData.ConfirmPassword.helperText}
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