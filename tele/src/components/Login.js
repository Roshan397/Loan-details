import React, { Component } from 'react'
import {Avatar, Grid, TextField,Card,Button} from '@mui/material';
import {Link} from 'react-router-dom';


export default class Login extends Component {
    cardstyle={backgroundColor:"White",padding:"100px",width:"380px",height:"578px",margin:"0px",opacity:'0.7',borderRadius:"25px"}
    textstyle={marginTop:"30px"}
  render() {
    return (
        <div>
         <Grid align="center"  style={{backgroundImage:'url(../frnt.png)',
        height:'100vh',
        backgroundSize: 'cover',padding:'100px',
        backgroundRepeat: 'no-repeat'}}>
            <Card variant='outlined' style={this.cardstyle}>
              <h1><span style={{color:'red'}}>C</span>create <span style={{color:'red'}}>A</span>ccount</h1>
                <Avatar/>
            <TextField fullwidth label="Name" placeholder="Enter your name" style={this.textstyle}/>
            <TextField fullwidth label="Email" placeholder='Enter email address' style={this.textstyle}/>
            <TextField fullwidth label="Mobile number" placeholder='Enter your mobile number' style={this.textstyle}/>
            <TextField fullwidth label="Password" placeholder='Enter password' style={this.textstyle} type='password' required/>
            <TextField fullwidth label="Confirm Password" placeholder='Enter password' style={this.textstyle} type='password' required/>
            <br/>
            <br/>
            <br/>
            <div>
              <Link to='/'>
            <Button variant="contained" style={{color:'lavender'}}>Create Account</Button>

              </Link>
            </div>
            </Card>
         </Grid>
        </div>
    )
  }
}
