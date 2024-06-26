import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
      
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            StudentApp
          </Typography>
          <Button><Link style={{textDecoration:"none", color:'white'}} >Login</Link></Button>
          <Button><Link style={{textDecoration:"none", color:'white'}}>SignUp</Link></Button>
          <Button><Link style={{textDecoration:"none", color:'white'}} to={'/'} >Producs</Link></Button>
          <Button><Link style={{textDecoration:"none", color:'white'}} to={'/view'} >View Students</Link></Button>
          <Button><Link style={{textDecoration:"none", color:'white'}} to={'/add'} >Add Students</Link></Button>
          

        </Toolbar>
      </AppBar>
    </Box>

    </div>
  )
}

export default Navbar
