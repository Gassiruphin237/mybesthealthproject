import React, { useState } from 'react'
import { Grid, Typography, Link, Button, Radio, } from '@mui/material'
import '../styles/SignUp.css'
import TextInput from '../component/TextInput'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import validator from 'validator'

function SignUp() {

    // const [FisrtName, setFisrtName] = React.useState('')
    // const [LastName, setLastName] = React.useState('')
    // const [Email, setEmail] = React.useState('')
    // const [phone, setPhone] = React.useState('')
    // const [Password, setPassword] = React.useState('')
    // const [ConfirmPassword, setConfirmPassword] = React.useState('')

    /*
        validatiion first name 
    */
    const [fisrtName, setFisrtName] = React.useState({
        value: '',
        error: false,
        helperText: 'Require'
    })

    const onFisrtName = React.useCallback((val) => {
        if (!validator.isAlpha(val)) {
            setFisrtName(state => {
                return {
                    ...state,
                    value: val,
                    error: true,
                    helperText: 'enter valid name'
                }
            })
        }
        else {
            setFisrtName(state => ({
                ...state,
                value: val,
                error: false,
                helperText: 'Required'
            }))

        }
    }, [setFisrtName, validator])

    /*
        validatiion last name 
    */
    const [lastName, setLastName] = React.useState({
        value: '',
        error: false,
        helperText: 'Require'
    })


    const onLastName = React.useCallback((val) => {
        if (!validator.isAlpha(val)) {
            setLastName(state => {
                return {
                    ...state,
                    value: val,
                    error: true,
                    helperText: 'enter valid name'
                }
            })
        }
        else {
            setLastName(state => ({
                ...state,
                value: val,
                error: false,
                helperText: 'Required'
            }))

        }
    }, [setLastName, validator])

    /*
      validatiion email 
    */
    const [email, setEmail] = React.useState({
        value: '',
        error: false,
        helperText: 'Require'
    })


    const onChangeEmail = React.useCallback((val) => {
        if (!validator.isEmail(val)) {
            setEmail(state => {
                return {
                    ...state,
                    value: val,
                    error: true,
                    helperText: 'enter valid email'
                }
            })
        }
        else {
            setEmail(state => ({
                ...state,
                value: val,
                error: false,
                helperText: 'Required'
            }))

        }
    }, [setEmail])

    /*
    validatiion phone
    */
    const [phone, setPhone] = React.useState({
        value: '',
        error: false,
        helperText: 'Require'
    })

    const onChangePhone = React.useCallback((val) => {
        if (!validator.isMobilePhone(val)) {
            setPhone(state => {
                return {
                    ...state,
                    value: val,
                    error: true,
                    helperText: 'enter valid number'
                }
            })
        }
        else {
            setPhone(state => ({
                ...state,
                value: val,
                error: false,
                helperText: 'Required'
            }))

        }
    }, [setPhone])


    /*
      validatiion password
    */

      const [password, setPassword] = React.useState({
        value: '',
        error: false,
        helperText: 'Require'
    })
    const onPasswordChange = React.useCallback((val) => {
        if(!validator.isStrongPassword(val)) {
            setPassword(state => {
                return {
                    ...state,
                    error : true,
                    value : val,
                    helperText : 'Your password must to contain 8 characters '
                }
            })
        } else {
            setPassword(state=> ({
                ...state, 
                value: val,
                error: false
            }))
        }
    }, [setPassword])

    /*
      validatiion confirm password
    */
      const [ConfirmPassword, setConfirmPassword] = React.useState({
        value: '',
        error: false,
        helperText: 'Require'
    })

    const [value, setValue] = React.useState('female', 'male');

    /* Function submit */

    const onSubmit = React.useCallback(() => {
        const data = {
            fisrtName: fisrtName.value,
            lastName: lastName.value,
            email: email.value,
            phone: phone.value,
            password: password.value
        }
        console.log(data)
    }, [fisrtName, lastName, email, phone, password])

    return (
        <div className='container'>
            <Grid align='center'>
                <img src='./assets/logo.png' alt='logo' className='logoStyle' />
                <h1> Sign up </h1>
                <p1>Welcome, create your account now and get free online assistance with best doctors of mybesthealth</p1>
            </Grid>
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
                        value={ConfirmPassword}
                        placeholder={'Confirm your password'}
                        onValueChange={ConfirmPassword}
                    />
                </div>
            </div>
            {/*
            <div className='flNameStyle1'>
              <FormControl>
              <FormLabel id="gender">Gender</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>
              </FormControl>          
            </div>

            <FormControlLabel
                className='fieldStyle'
                control={
                    <Checkbox
                        name="TermCondition"
                    />
                }
                label="I have read and accept the terms and conditions."

            /> */}

            <Button
                variant="contained"
                type='submit'
                className='buttonStyle'
                onClick={onSubmit}
                fullWidth
            >
                Sign up
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