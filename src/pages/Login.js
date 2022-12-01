import React from 'react'
import { Tabs, Tab, Typography, Box, Grid } from '@mui/material'
import '../styles/index.css'
import LoginEmail from '../component/LoginEmail';
import LoginPhone from '../component/LoginPhone';

function Login() {

  //Here we have the container login. on this we have loginEmail and loginPhone
  
  //state initialisation
  const [value, setValue] = React.useState(0);

  //handle change help to switching login with email or phone
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div className='indexStyle' align='center'
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box >
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }


  return (
    <div className='indexStyle'>

      <Grid align='center'>
        <img src='./assets/logo.png' alt='logo' className='logoStyle' />
        <h1>Welcome back</h1>
        <span>Enter your login credential</span>
      </Grid>

      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor='primary'
        textColor=''
      >
        <Tab
          label="Email"
          className='TabStyle'
        />
        <Tab
          label="Phone"
          className='TabStyle'
        />
      </Tabs>

      {/*login email component */}
      <TabPanel value={value} index={0} >
        <LoginEmail />
      </TabPanel>

      {/*login phone component */}
      <TabPanel value={value} index={1}>
        <LoginPhone />
      </TabPanel>
    </div>
  )
}


export default Login