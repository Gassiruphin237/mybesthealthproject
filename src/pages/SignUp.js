import React, { useState } from 'react'
import { Grid, Typography, Link, Button, Radio, } from '@mui/material'
import '../styles/SignUp.css'
import TextInput from '../component/TextInput'
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import validator from 'validator'

function SignUp() {

               // SART INITIALISATION  

    //First name initilisation
    const [fisrtName, setFisrtName] = React.useState({
        value: '',
        error: false,
        helperText: 'Require'
    })

    //Last name initialisarion
    const [lastName, setLastName] = React.useState({
        value: '',
        error: false,
        helperText: 'Require'
    })
    //email's initialisation
    const [email, setEmail] = React.useState({
        value: '',
        error: false,
        helperText: 'Require'
    })
    // Phone's initialisation
    const [phone, setPhone] = React.useState({
        value: '',
        error: false,
        helperText: 'Require'
    })
    // Password initialisation
    const [password, setPassword] = React.useState({
        value: '',
        error: false,
        helperText: 'Require'
    })
    // Confirm password initialisation
    const [confirmPassword, setConfirmPassword] = React.useState({
        value: '',
        error: false,
        helperText: 'Require'
    })
    //Gender initialisation
    const [gender, setGender] = React.useState({
        value: '',
        error: false,
        helperText: 'Require'
    })
    

            // START VALIDATION

    // First name validatiion
    const onFisrtName = React.useCallback((val) => {
        if (validator.isAlpha(val)) {
            setFisrtName(state => {
                return {
                    ...state,
                    value: val,
                    error: false,
                    helperText: 'Require'
                }
            })
        }
        else {
            setFisrtName(state => ({
                ...state,
                value: val,
                error: true,
            }))

        }
    }, [setFisrtName, validator])

    // Last name validatiion
    const onLastName = React.useCallback((val) => {
        if (validator.isAlpha(val)) {
            setLastName(state => {
                return {
                    ...state,
                    value: val,
                    error: false,
                    // helperText: 'Require'
                }
            })
        }
        else {
            setLastName(state => ({
                ...state,
                value: val,
                error: true,
                helperText: 'Required'
            }))

        }
    }, [setLastName, validator])

    // Email's validatiion
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
        }
        else {
            setEmail(state => ({
                ...state,
                value: val,
                error: false,
                helperText: 'Require'

            }))
        }

    }, [setEmail, validator])

    // Phone validatiion
    const onChangePhone = React.useCallback((val) => {

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
                    value: val,
                    error: true,
                    helperText: 'Enter valid number'
                }
            })
        }
        else {
            setPhone(state => ({
                ...state,
                value: val,
                error: false,
                helperText: ''
            }))

        }
    }, [setPhone])

    // Password validation
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
            return;
        }

        setPassword(state => ({
            ...state,
            error: false,
            value: val,
            helperText: 'Required'
        }))
    }, [setPassword])

    // Confirm password validation
    const onConfirmPasswordChange = React.useCallback((val) => {
        if (val.trim() === '') {
            setConfirmPassword(state => ({
                ...state,
                value: val,
                error: true,
                helperText: 'Require'
            }))
            return;
        }

        if (!validator.isStrongPassword(val)) {
            setConfirmPassword(state => {
                return {
                    ...state,
                    error: true,
                    value: val,
                    helperText: 'Your password must to contain 8 characters '
                }
            })
            return;
        }

        if (password.value !== val) {
            setConfirmPassword(state => {
                return {
                    ...state,
                    error: true,
                    value: val,
                    helperText: "Your password don't match"
                }
            })
            return;
        }

        setConfirmPassword(state => {
            return {
                ...state,
                error: false,
                value: val,
                helperText: 'Your password must to contain 8 characters '
            }
        })


    }, [setConfirmPassword, password])

    //Function state and validation 
    function validateAll() {
        if (password.value !== confirmPassword.value) {
            setConfirmPassword(state => {
                return {
                    ...state,
                    error: true,
                    helperText: "Your password don't match"
                }
            })
            return false
        }

        return (
            fisrtName.value.trim() !== '' &&
            lastName.value.trim() !== '' &&
            email.value.trim() !== '' &&
            phone.value !== '' &&
            password.value.trim() !== ''
        )
    }

    //Gender validation
    const onGenderChange = React.useCallback((val) => {
        setGender(state => {
            return {
                ...state,
                error: false,
                value: val.target.value,
                helperText: 'Require'
            }
        })
    }, [setGender])

    

                      // FUNCTION SUBMIT 
    //Function submit
    const onSubmit = React.useCallback(() => {
        if (!validateAll()) return;

        const data = {
            fisrtName: fisrtName.value,
            lastName: lastName.value,
            email: email.value,
            phone: phone.value,
            password: password.value,
            confirmPassword: confirmPassword.value,
            gender: gender.value

        }
        console.log(data)
    }, [fisrtName, lastName, email, phone, password, confirmPassword, gender])



    return (
        <div className='container'>
            {/* Entete, logo et message d'entete */}
            <Grid align='center'>
                <img src='./assets/logo.png' alt='logo' className='logoStyle' />
                <h1> Sign up </h1>
                <p1>Welcome, create your account now and get free online assistance with best doctors of mybesthealth</p1>
            </Grid>

            {/* Div first and laast name  */}
            <div className='flNameStyle'>
                <div className='flNameStyle1'>
                    <TextInput
                        label='Fisrt Name'
                        type='text'
                        value={fisrtName.value}
                        error={fisrtName.error}
                        placeholder={'Enter your first name'}
                        helperText={fisrtName.helperText}
                        onValueChange={onFisrtName}
                    />
                </div>
                <div className='flNameStyle1'>
                    <TextInput
                        label='Last Name'
                        type='text'
                        value={lastName.value}
                        error={lastName.error}
                        placeholder={'Enter your last name'}
                        helperText={lastName.helperText}
                        onValueChange={onLastName}
                    />
                </div>
            </div>

            {/* Input email */}
            <div>
                <TextInput
                    label='Email'
                    type='email'
                    value={email.value}
                    error={email.error}
                    placeholder={'Enter your email'}
                    helperText={email.helperText}
                    onValueChange={onChangeEmail}
                />
            </div>

            {/* Input phone number */}
            <div>
                <TextInput
                    label='Phone'
                    type='number'
                    value={phone.value}
                    error={phone.error}
                    placeholder={'Enter your phone number'}
                    helperText={phone.helperText}
                    onValueChange={onChangePhone}
                />
            </div>

            {/* Password and Confirm password */}
            <div className='flNameStyle'>
                <div className='flNameStyle1'>
                    <TextInput
                        label='Password'
                        type='Password'
                        value={password.value}
                        error={password.error}
                        helperText={password.helperText}
                        placeholder={'Enter your password'}
                        onValueChange={onPasswordChange}
                    />
                </div>
                <div className='flNameStyle1'>
                    <TextInput
                        label='Confirm Password'
                        type='ConfirmPassword'
                        value={confirmPassword.value}
                        error={confirmPassword.error}
                        helperText={confirmPassword.helperText}
                        placeholder={'Confirm your password'}
                        onValueChange={onConfirmPasswordChange}
                    />
                </div>
            </div>

            {/* Gender */}
            <div className='flNameStyle1'>
                <FormControl>
                    <FormLabel id="gender">Gender</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={gender.value}
                        onChange={onGenderChange}
                        
                    >
                        <FormControlLabel value={'F'} control={<Radio />} label="Female" />
                        <FormControlLabel value={'M'} control={<Radio />} label="Male" />
                    </RadioGroup>
                </FormControl>
            </div>

            {/* Button */}
            <Button
                variant="contained"
                type='submit'
                className='buttonStyle'
                onClick={onSubmit}
                fullWidth
            >
                NEXT
            </Button>

            <div className='gridDive'>
                <div className='div1'></div>
                <div className='div2'><p2 className='p2'>Or sign up with</p2></div>
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
    )
}

export default SignUp