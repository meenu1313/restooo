import {  Button, Card,  TextField, Typography,  } from '@mui/material'
import React from 'react'
import AccountCircle from   '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import Bg from './Bg/bac4.jpg';



const Login = () => {
  const backgroundImageStyle = {
    position: 'fixed',
    top:0,
    left:0,
    width:'100%',
    height:'100%',
    zIndex: -1,
  };

  
  return (
   <div>
    <img
    src={Bg}
    alt="background"
    style={backgroundImageStyle}
    />




    <Card variant='outlined'style={{padding:'40px',
    margin:'auto',
    marginTop:'150px',
    alignContent:'center',
  width:'300px',
  backgroundColor:'',
  border:'0.5px solid black',
  cursor:'pointer',
  borderRadius:'30px',
  opacity:'100%',}}>
   
        <Typography variant='h3'>LOGIN </Typography><b></b><b></b><br></br>
        <TextField label="username"
        InputProps={{
          startAdornment:(<InputAdornment position="start">
          <AccountCircle/>
          </InputAdornment>
          ),
        }}
        variant='standard'
      style={{cursor:'pointer'}}/><br /><br />
        <TextField label="password"type='password'InputProps={{
          startAdornment:(
            <InputAdornment position="start">
              <LockIcon/>
              </InputAdornment>
            ),
          }}
          variant='standard'style={{cursor:'pointer'}}/><br /><br /><br />
        <Button variant='contained'color='success'>LOGIN</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        

        </Card>
        </div>
        
        
      
        
        
  )
}

export default Login