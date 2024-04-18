import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
 import IconButton from '@mui/material/IconButton';
//import DashboardIcon from '@mui/icons-material/Dashboard';
import Bg from './Bg/pic.jpg';
import DensityMediumSharpIcon from '@mui/icons-material/DensityMediumSharp';

const Navbar = () => {
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
      <AppBar color=''>
        <Toolbar>
          <img
                src="https://dynamic.brandcrowd.com/asset/logo/6cc0fdef-3fe7-4d1d-900d-e7f884b7bb8d/logo-search-grid-1x?logoTemplateVersion=1&v=637936305229930000&text=RED+STILLETTO&colorpalette=grayscale" alt=""
                width={150} height={130}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Typography variant='h5'>RED STILLETTO RESTURANT</Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div>
            <Button color='error'>
              <Link to={'/Homepage'} style={{ textDecoration: 'none', color: 'black' }}>HOME</Link>
            </Button>&nbsp;&nbsp;&nbsp;
            <Button>
              <Link to={'/Menubar'} style={{ textDecoration: 'none', color: 'black' }}>MENU</Link>
            </Button>&nbsp;&nbsp;&nbsp; 
            <Button> 
              <Link to={''} style={{ textDecoration: 'none', color: 'black' }}>OFFERS</Link>
            </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button>
              <Link to={'/Login'} style={{ textDecoration: 'none', color: 'black' }}>LOGIN</Link>
            </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           
            <Button>
              <Link to={'/Signup'} style={{ textDecoration: 'none', color: 'black' }}>SIGNUP</Link>
            </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button>
            <Link to={'/Dashboard'} style={{ textDecoration: 'none', color: 'black' }}>Dashboard</Link>
            
            </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton aria-label="DensityMediumSharpIcon ">
            <DensityMediumSharpIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    
    </div>
  );
}

export default Navbar;
