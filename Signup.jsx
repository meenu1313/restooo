import { Button, Card, TextField, Typography } from '@mui/material'
import React from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import Bg from './Bg/bac4.jpg';
import { Link } from 'react-router-dom';


const SignUp = () => {
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
     
     <Card variant='outlined'style={{padding:'20px',
    margin:'auto',
    marginTop:'150px',
    alignContent:'center',
  width:'300px',
  backgroundColor:'white',
  border:'0.5px solid black',
  cursor:'pointer',
  borderRadius:'30px',
  opacity:'100%',}}>
        
        <Typography variant='h3'>SIGN UP</Typography><b></b><b></b><br></br>
        <TextField label="first name"
         InputProps={{
          startAdornment:(<InputAdornment position="start">
          <AccountCircle/>
          </InputAdornment>
          ),
        }}
        variant='standard'
      style={{cursor:'pointer'}}/><br /><br />
        <TextField label="last name"
         InputProps={{
          startAdornment:(<InputAdornment position="start">
          <AccountCircle/>
          </InputAdornment>
          ),
        }}
        variant='standard'
      style={{cursor:'pointer'}}/><br /><br />
        <TextField label="email"type='gmail' InputProps={{
          startAdornment:(
            <InputAdornment position="start">
              <EmailIcon/>
              </InputAdornment>
            ),
          }}
          variant='standard'style={{cursor:'pointer'}}/><br /><br />
        <TextField label="password"type='password'
        InputProps={{
          startAdornment:(
            <InputAdornment position="start">
              <LockIcon/>
              </InputAdornment>
            ),
          }}
          variant='standard'style={{cursor:'pointer'}}/><br /><br /><br />
        <Button variant='contained'color='success'>SIGNUP</Button><br></br><br/><br /><br />
            <Typography variant='h8'> Already have an account 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <Button variant= 'contained'color='warning'> 
     <Link to={'/Login'} style={{ textDecoration: 'none', color: 'white' }}>LOGIN</Link>
     </Button></Typography>
    
    </Card>
        </div>
  )
}

export default SignUp