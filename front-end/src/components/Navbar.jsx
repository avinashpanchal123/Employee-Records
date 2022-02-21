import React from 'react'
import {AppBar, Toolbar, IconButton, makeStyles,Typography} from  '@material-ui/core';

const useStyle = makeStyles({
  header:{
    background :'#111111'
  }
})

function Navbar() {
  const classes = useStyle()
  return (
    <>
    <AppBar className={classes.header} position="static">
      <Toolbar>
     
       <Typography component="h2">DashBoard</Typography>
       <Typography component="h2">Add Employee</Typography>
      </Toolbar>
    </AppBar>
    </>
  )
}

export default Navbar