import React from 'react'
import { Grid, Typography, Link, Button } from '@mui/material'
import '../styles/SignUp.css'
import TextInput from '../component/TextInput'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

function SignUp() {

    const [FisrtName, setFisrtName] = React.useState('')
    const [LastName, setLastName] = React.useState('')
    const [Email, setEmail] = React.useState('')
    const [Password, setPassword] = React.useState('')
    const [ConfirmPassword, setConfirmPassword] = React.useState('')




    const onSubmit = (values, props) => {
        console.log(values)
    }

    return (
        <div className='container'>
            <Grid align='center'>
                <img src='./assets/logo.png' alt='logo' className='logoStyle' />
                <h1> Sign up </h1>
                <p1>Welcome, create your account now and get free online assistance with best doctros of mybesthealth</p1>
            </Grid>
            <div className='flNameStyle'>
                <div className='flNameStyle1'>
                    <TextInput
                        label='Fisrt Name'
                        type='FisrtName'
                        value={FisrtName}
                        placeholder={'Enter your first name'}
                        onValueChange={FisrtName}
                    />
                </div>
                <div className='flNameStyle1'>
                    <TextInput
                        label='Last Name'
                        type='LastName'
                        value={LastName}
                        placeholder={'Enter your last name'}
                        onValueChange={LastName}
                    />
                </div>
            </div>
            <div>
                <TextInput
                    label='Email'
                    type='Email'
                    value={Email}
                    placeholder={'Enter your email'}
                    onValueChange={Email}
                />
            </div>

            <div className='flNameStyle'>
                <div className='flNameStyle1'>
                    <TextInput
                        label='Password'
                        type='Password'
                        value={Password}
                        placeholder={'Enter your password'}
                        onValueChange={Password}
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
            <FormControlLabel
                className='fieldStyle'
                control={
                    <Checkbox
                        name="TermCondition"
                    />
                }
                label="I have read and accept the terms and conditions."

            />

            <Button
                variant="contained"
                type='submit'
                className='buttonStyle'
                fullWidth
            >
                Sign up
            </Button>

            <div className='gridDive'>
                <div className='div1'></div>
                <div className='div2'><p2 className='p2'>or sign up with</p2></div>
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