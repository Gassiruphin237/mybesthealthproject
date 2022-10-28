import React from 'react'
import { Grid, TextField, Button, Typography, FormHelperText, Paper } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup' // pour les gestion des regex
import './SignUp.css'

// initialisation des valeur des inputs 
function SignUp() {

    const initialValues = {
        fName: '',
        LName: '',
        email: '',
        phone: '',
        password: '',
        Cpassword: '',
        TermCondition: false
    }

    // validation et message d'erreur des inputs 

    const validationSchema = Yup.object().shape({
        fName: Yup.string().min(3, "'it's too short").required("Required"),
        LName: Yup.string().min(3, "Last name it's too short").required("Required"),
        email: Yup.string().email('Enter valid email').required('Required'),
        phone: Yup.number().typeError('Enter valid number').required('Required'),
        password: Yup.string().min(8, 'Password minimum length should be 8').required('Required'),
        Cpassword: Yup.string().oneOf([Yup.ref('password')], "Password not matched").required("Required"),
        TermCondition: Yup.string().oneOf(['true'], "Accept terms & codition")
    })

    // gestion du bouton on submit 
    const onSubmit = (values, props) => {
        console.log(values)
    }

    return (
        <Grid className='gridContainer'>
            <Paper className="container">

                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}
                    className='formikStyle'
                >

                    {(props) => (
                        <Form className='formStyle'>
                            <h2 align='center'>Sign Up</h2>
                            <Field as={TextField} label="First Name" name='fName' placeholder='First Name'
                                fullWidth className='fieldStyle'
                                helperText={<ErrorMessage name='fName' />}
                            />
                            <Field as={TextField} label="Last Name" name='LName' placeholder='Last Name'
                                fullWidth className='fieldStyle'
                                helperText={<ErrorMessage name='LName' />}
                            />
                            <Field as={TextField} label="Email" name='email' type='email' placeholder='Email'
                                fullWidth className='fieldStyle'
                                helperText={<ErrorMessage name='email' />}
                            />
                            <Field as={TextField} label="Phone" name='phone' type='number' placeholder='Phone'
                                fullWidth className='fieldStyle'
                                helperText={<ErrorMessage name='phone' />}
                            />
                            <Field as={TextField} label="Password" name='password' type="password" placeholder='Password'
                                fullWidth className='fieldStyle'
                                helperText={<ErrorMessage name='password' />}
                            />
                            <Field as={TextField} label="Confirm Password" name='Cpassword' type="password" placeholder='Confirm Password'
                                fullWidth className='fieldStyle'
                                helperText={<ErrorMessage name='Cpassword' />}
                            />
                            <FormControlLabel
                                control={
                                    <Field as={Checkbox} name="TermCondition" />
                                }
                                label="I have read and accept the terms of service and privacy policy"
                                className='fieldStyle'
                            />
                            <FormHelperText>{<ErrorMessage name='TermCondition' />}</FormHelperText>
                            <Button type='submit' variant='contained' fullWidth className='buttonStyle' >Sign up</Button>
                            <Typography calssName='linkStyle'> Already a member ?
                                <Link to="/" > Log in</Link>
                            </Typography>
                        </Form>
                    )}
                </Formik>

            </Paper>
        </Grid>
    )
}

export default SignUp