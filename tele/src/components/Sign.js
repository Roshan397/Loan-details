import React, { Component } from 'react'
import {Avatar, Grid, TextField,Card,Button} from '@mui/material';
import {Link} from 'react-router-dom';


export default class Sign extends Component {
    cardstyle={backgroundColor:"White",width:"500px",height:"650px",opacity:'0.7'}
    textstyle={marginTop:"30px"}
  render() {
    return (
      <div >
        <Grid align="center"  style={{backgroundImage:'url(../frnt.png)',
        height:'100vh',
        backgroundSize: 'cover',padding: '150px',
        backgroundRepeat: 'no-repeat'}}>
            <Card variant='outlined' style={this.cardstyle}>
              <h1 style={{fontSize:'40px'}}><span style={{color:'red'}}>L</span>ogin</h1>
                <Avatar/>
            <br/>
            <TextField fullwidth label="User Name" placeholder="Enter your name" style={this.textstyle}/>
            <br/>
            <br/>
            <TextField fullwidth label="Password" placeholder='Enter password' style={this.textstyle} type='password' required/>
            <br/>
            <br/>
            <br/>
            <br/>
            
            <p style={{position: 'absolute',
              width: '214px',
              height: '30px',
              left: '750px',
              top: '510px',
              fontSize:'15px'}}>
             <Link to='Forget'>  Forget Password?</Link></p>
            <Link to='Home'>
            <Button variant="contained" >Login</Button>
            </Link>
            <h4>OR</h4>
            <Link to='Login'><Button variant='text'>Don't have account? Sign up</Button></Link>
            </Card>
         </Grid>
        </div>
    )
  }
}