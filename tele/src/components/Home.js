import React, { Component } from 'react'
import {Grid,Box, css} from '@mui/material';
import { Link } from 'react-router-dom';
export default class Home extends Component {
  render() {
    return (
      <div> 
        <Grid align="center"  style={{backgroundImage:'url(../Home-1.png)',
      height:'100vh',
      fontSize:'20px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    opacity:'1',color:'red',border:'20px',backgroundColor:'#CCDDED'}}>
      <div style={{padding:'200px'}}>
      <h1>T<span style={{color:'#FFF8DC'}}>ele - </span>D<span style={{color:'#FFF8DC'}}>irecto</span></h1>
      <Link to='/Contact'>  <Box 
                                component="img"
                                  
                                sx={{
                                  position: 'absolute',
                                  width: '145px',
                                  height: '143px',
                                  left: '500px',
                                  top: '504px',
                                  borderRadius:'50%',
                                }}
                                alt="The house from the offer."
                                src="./con.png" /></Link>
                                <h4 style={{position: 'absolute',
                                  width: '145px',
                                  height: '200px',
                                  left: '500px',
                                  top: '620px'}}>C<span style={{color:'white'}}>ontacts</span></h4>
          </div>
          <div >
        <Link to='/Favorites'><Box 
                                component="img"
                                  
                                sx={{
                                  position: 'absolute',
                                  width: '145px',
                                  height: '143px',
                                  left: '954px',
                                  top: '504px',
                                  borderRadius:'50%'
                                  
                                }}
                                alt="The house from the offer."
                                src="./faavo.png" /></Link>
                                <h4 style={{position: 'absolute',
                                  width: '145px',
                                  height: '200px',
                                  left: '954px',
                                  top: '620px'}}>F<span style={{color:'white'}}>avorites</span></h4>
                      </div>
        </Grid>

    </div>
    )
  }
}
