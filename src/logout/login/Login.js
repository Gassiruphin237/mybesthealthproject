import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LoginPhone from './loginPhone/LoginPhone';
import LoginEmail from './loginEmail/LoginEmail'



function Login() {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const boxStyle = {width:340, margin:"20px auto"}
  const tabemailStyle = {margin:'auto'}
  // const tabpanelLogin = {textAlign: 'right'}

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
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
    <Box elevation={10} style={boxStyle}>
      <div align='center'>
            <h2>  Log In </h2>
      </div>
    <Tabs
      value={value}
      onChange={handleChange}
      textColor="secondary"
      indicatorColor="secondary"
      aria-label="secondary tabs example"
    >
      <Tab label="Email" style={tabemailStyle}/>
      <Tab label="Phone" style={tabemailStyle}/>
    </Tabs>
    <TabPanel value={value} index={0}>
        <LoginEmail/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LoginPhone/>
    </TabPanel>
    
  </Box>
  )
}


export default Login