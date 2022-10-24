import React from 'react'
import { Grid, TextField, Button, Typography} from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import {Link} from 'react-router-dom'
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'

function SignUp() {

    const container = {padding: 10}
    const texfieldStyle = {marginBottom:15}
    const buttonStyle = {backgroundColor: '#9FACAF', color: 'black', fontWeight: 'bold', borderRadius: 5, marginBottom: 10}
    const checkboxStyle = {marginBottom: 10, textAlign: 'justify'}
    const typoStyle = {marginTop: 30, textAlign: 'center'}

    const initialValues = {
        fName: '',
        LName: '',
        email: '',
        phone: '',
        password: '',
        Cpassword: '',
        TermCondition: false
    }

    const validationSchema =Yup.object().shape({
        fName: Yup.string().required("Required")
    })

    const onSubmit = (values, props) => {
        console.log(values)
    }

    return (
        <Grid style={container}>
            <h2 align='center'>Sign Up</h2>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) =>(
                        <Form>
                        <Field as={TextField} label="First Name" name ='fName' placeholder='First Name' fullWidth style={texfieldStyle} required />
                        <Field as={TextField} label="Last Name" name ='LName' placeholder='Last Name' fullWidth style={texfieldStyle} />
                        <Field as={TextField} label="Email" name='email' type='email' placeholder='Email' fullWidth style={texfieldStyle} />
                        <Field as={TextField} label="Phone" name='phone' type='number' placeholder='Phone' fullWidth style={texfieldStyle} />
                        <Field as={TextField} label="Password" name='password' type="password" placeholder='Password' fullWidth style={texfieldStyle} />
                        <Field as={TextField} label="Confirm Password" name='Cpassword' type="password" placeholder='Confirm Password' fullWidth style={texfieldStyle} />
                        <FormControlLabel 
                            control={
                                <Field as={Checkbox} name="TermCondition"  />
                            }
                            label="I have read and accept the terms of service and privacy policy" style={checkboxStyle} 
                          />
                        <Button type='submit' variant='contained' fullWidth style={buttonStyle}>Sign up</Button>

                    </Form>
                    )}
                </Formik>
                <Typography style={typoStyle} > Already a member ?
                    <Link to="/" > Log in</Link>
                </Typography>
            
        </Grid>
    )
}

export default SignUp