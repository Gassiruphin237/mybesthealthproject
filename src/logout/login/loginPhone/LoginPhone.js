import React from 'react'
import { Button, Grid, Paper, TextField, Typography, Avatar } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
// import * as Yup from 'yup'
import google from '../../../assets/google.png'



function LoginPhone() {

  const paperStyle = { padding: 20, height: '70vh', width: 300, margin: "0  auto" }
  const btnStyle = { margin: "20px 0", backgroundColor: '#04A3BD' }
  const typStyle = { align: 'center', borderBottom: "solid black 2px", paddingBottom: '60px' }
  const TextFieldStyle = { marginBottom: 20 }
  const linkStyle = { display: 'flex', marginTop: 50, justifyContent: 'space-around', paddingBottom: '50px' }
  const facebookstyle = { backgroundColor: '#04A3BD', width: '50px', height: '50px' }
  const googleStyle = { width: '60px', height: '60px' }



  const initialValues = {
    phone: '',
    password: ''
  }

  const onSubmit = (values, props) => {
    console.log(values)
    setTimeout(() => {
      props.resetForm()
      props.setSubmitting(false)
    }, 2000)
    console.log(props)
  }


  return (
    <Grid>
      <Paper style={paperStyle}>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {(props) => (
            <Form>

              <Field as={TextField} label="phone" name="phone" type="number"
                placeholder="Phone" size='300' required style={TextFieldStyle} fullWidth />
              <Field as={TextField} label="password" name="password" type="password"
                placeholder="Password" required style={TextFieldStyle} fullWidth />
              <Typography fullwidth>
                <Link href="#" >Forgot password ?</Link>
              </Typography>
              <Button type='submit' variant="contained" fullWidth style={btnStyle}
                disabled={props.isSubmitting}
              >{props.isSubmitting ? "Loading..." : "Sign in"}</Button>
              <Typography style={typStyle}> Not a members yet ?
                <Link to="/SignUp" > Sign Up </Link>
              </Typography>

            </Form>
          )}
        </Formik>

        <Grid style={linkStyle}>

          <Typography>
            <Link href="#" >
              <img src={google} alt='logo' style={googleStyle} />
              {/* <FacebookIcon /> */}
            </Link>
          </Typography>

          <Typography>
            <Link href="#" >
              <Avatar style={facebookstyle}>
                <FacebookIcon />
              </Avatar>
            </Link>
          </Typography>

        </Grid>


      </Paper>
    </Grid>
  )
}

export default LoginPhone