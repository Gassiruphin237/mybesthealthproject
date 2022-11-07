import React from 'react'
import { Grid, Typography, Link, Button, Radio, } from '@mui/material'
import '../styles/SignUp.css'
import TextInput from '../component/TextInput'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function SignUp() {

    const [FisrtName, setFisrtName] = React.useState('')
    const [LastName, setLastName] = React.useState('')
    const [Email, setEmail] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [Password, setPassword] = React.useState('')
    const [ConfirmPassword, setConfirmPassword] = React.useState('')


    const [value, setValue] = React.useState('female', 'male');

    const handleChange = (e) => {
      setValue((e.target.value));
    };


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

            <div>
                <TextInput
                    label='Phone'
                    type='number'
                    value={phone}
                    placeholder={'Enter your phone number'}
                    onValueChange={phone}
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