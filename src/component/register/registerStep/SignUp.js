import React, { useContext } from 'react'
import { Grid, Button, Radio, } from '@mui/material'
import './SignUp.css'
import TextInput from '../../inputs/TextInput'
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import validator from 'validator'
import { multiStepContext } from '../../../StepContext';
import SendIcon from '@mui/icons-material/Send';


function SignUp() {


    const { usersData, setUsersData, setStep } = useContext(multiStepContext)

    // START VALIDATION

    //First name validatiion
    const onFisrtName = React.useCallback((val) => {
        if (validator.isAlpha(val)) {
            setUsersData(state => ({
                ...state,
                fisrtName: {
                    value: val,
                    error: false,
                    helperText: 'Require'
                }
            }))
        }
        else {
            setUsersData(state => ({
                ...state,
                fisrtName: {
                    value: val,
                    error: true,
                    helperText: 'Require'
                }
            }))

        }

    }, [setUsersData])

    // Last name validatiion
    const onLastName = React.useCallback((val) => {
        if (validator.isAlpha(val)) {
            setUsersData(state => ({
                ...state,
                lastName: {
                    value: val,
                    error: false,
                    helperText: 'Require'
                }
            }))
        }
        else {
            setUsersData(state => ({
                ...state,
                lastName: {
                    value: val,
                    error: true,
                    helperText: 'Require'
                }
            }))

        }
    }, [setUsersData, validator])

    // Email's validatiion
    const onChangeEmail = React.useCallback((val) => {

        if (val.trim() === '') {
            setUsersData(state => ({
                ...state,
                email: {
                    value: val,
                    error: true,
                    helperText: 'Require'
                }
            }))
            return;
        }

        if (!validator.isEmail(val)) {
            setUsersData(state => ({
                ...state,
                email: {
                    value: val,
                    error: true,
                    helperText: 'Enter valid email'
                }
            }))
        }
        else {
            setUsersData(state => ({
                ...state,
                email: {
                    value: val,
                    error: false,
                }
            }))
        }

    }, [setUsersData])

    // Phone validatiion
    const onChangePhone = React.useCallback((val) => {

        if (val.trim() === '') {
            setUsersData(state => ({
                ...state,
                phone: {
                    value: val,
                    error: true,
                    helperText: 'Require'
                }
            }))
            return;
        }

        if (!validator.isMobilePhone(val)) {
            setUsersData(state => ({
                ...state,
                phone: {
                    value: val,
                    error: true,
                    helperText: 'Enter valid number'
                }
            }))

        }
        else {
            setUsersData(state => ({
                ...state,
                phone: {
                    value: val,
                    error: false,
                    helperText: 'Enter valid number'
                }
            }))

        }
    }, [setUsersData])

    // Password validation
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

    // Confirm password validation
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
    function validateAll() {
        if (usersData.password.value !== usersData.ConfirmPassword.value) {
            setUsersData(state => ({
                ...state,
                ConfirmPassword: {
                    ...state.ConfirmPassword,
                    error: true,
                    helperText: "Your password don't match"
                }
            }))
            return false
        }

        return (
            usersData.fisrtName.value.trim() !== '' &&
            usersData.lastName.value.trim() !== '' &&
            usersData.email.value.trim() !== '' &&
            usersData.phone.value !== '' &&
            usersData.password.value.trim() !== ''
        )
    }

    //Gender validation
    const onGenderChange = React.useCallback((val) => {
        setUsersData(state => ({
            ...state,
            gender: {
                value: val.target.value,
                error: false,
                helperText: 'Require '
            }
        }))

    }, [setUsersData])



    // FUNCTION SUBMIT 
    const onSubmit = React.useCallback(() => {
        // if (!validateAll()) return;
        setStep(2)
    }, [setStep, validateAll])

    return (
        <div className='containers' align='center'>
            <div className='blockContent'>
                {/* Entete, logo et message d'entete */}
                <Grid align='center'>
                    <img src='./assets/logo.png' alt='logo' className='logoStyle' />
                    <h1> Sign up </h1>
                    <span>Welcome, create your account now and get free online assistance with best doctors of mybesthealth</span>
                </Grid>

                {/* Div first and laast name  */}
                <div className='flNameStyle'>
                    <div className='flNameStyle1'>
                        <TextInput
                            label='Fisrt Name'
                            type='text'
                            value={usersData.fisrtName.value}
                            error={usersData.fisrtName.error}
                            placeholder={'Enter your first name'}
                            helperText={usersData.fisrtName.helperText}
                            onValueChange={onFisrtName}

                        />
                    </div>
                    <div /*className='flNameStyle1'*/>
                        <TextInput
                            label='Last Name'
                            type='text'
                            value={usersData.lastName.value}
                            error={usersData.lastName.error}
                            placeholder={'Enter your last name'}
                            helperText={usersData.lastName.helperText}
                            onValueChange={onLastName}
                        />
                    </div>
                </div>

                {/* Input email */}
                <div className='flNameStyle'>
                    <div>
                        <TextInput
                            label='Email'
                            type='email'
                            value={usersData.email.value}
                            error={usersData.email.error}
                            placeholder={'Enter your email'}
                            helperText={usersData.email.helperText}
                            onValueChange={onChangeEmail}
                        />
                    </div>

                    {/* Input phone number */}
                    <div>
                        <TextInput
                            label='Phone'
                            type='number'
                            value={usersData.phone.value}
                            error={usersData.phone.error}
                            placeholder={'Enter your phone number'}
                            helperText={usersData.phone.helperText}
                            onValueChange={onChangePhone}
                        />
                    </div>
                </div>

                {/* Password and Confirm password */}
                <div className='flNameStyle'>
                    <div>
                        <TextInput
                            label='Password'
                            type='Password'
                            value={usersData.password.value}
                            error={usersData.password.error}
                            helperText={usersData.password.helperText}
                            placeholder={'Enter your password'}
                            onValueChange={onPasswordChange}
                        />
                    </div>
                    <div>
                        <TextInput
                            label='Confirm Password'
                            type='password'
                            value={usersData.ConfirmPassword.value}
                            error={usersData.ConfirmPassword.error}
                            helperText={usersData.ConfirmPassword.helperText}
                            placeholder={'Confirm your password'}
                            onValueChange={onConfirmPasswordChange}
                        />
                    </div>
                </div>

                {/* Gender */}
                <div className='genderStyle'>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup
                        value={usersData.gender.value}
                        onChange={onGenderChange}
                    >
                        <div className='genderStyle2' >
                            <FormControlLabel value={'F'} control={<Radio />} label="Female" />
                            <FormControlLabel value={'M'} control={<Radio />} label="Male" />
                        </div>
                    </RadioGroup>
                </div>

                {/* Button */}
                <div className='buttonDivStyle1'>
                    <Button
                        variant="contained"
                        type='submit'
                        className='buttonStyle1'
                        endIcon={<SendIcon/>}
                        onClick={onSubmit}
                    >
                        NEXT
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default SignUp