import React, { Component } from 'react'
import {Avatar, Grid, TextField,Card,Button} from '@mui/material';
import { Link } from 'react-router-dom';


export default class Forget extends Component {
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
              <h1>Enter New Password</h1>
                <Avatar/>
            <TextField fullwidth label="New Password" placeholder='Enter New password' style={this.textstyle} type='password' required/>
            <TextField fullwidth label="Confirm Password" placeholder='Enter password' style={this.textstyle} type='password' required/>
            <br/>
            <br/>
            <br/>
            <div>
            <Link to='/'><Button variant="contained" style={{color:'lavender'}}>Confirm</Button></Link>
            </div>
            </Card>
         </Grid>
        </div>
    )
  }
}