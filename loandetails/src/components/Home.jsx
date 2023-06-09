import React from 'react'
import "./Home.css"
import { Box } from '@mui/material'

import { Link } from "react-router-dom"
export default function () {
  return (
    <div className='Main'><nav className="navbar ">
    <div className="navbarcomp1" >
     <div className="one"> <Link className="navlink"to="/"> <p>Login</p></Link></div> 
     <div className="two"> <Link className="navlink"to="/userldet"> <p>Loan-details</p></Link></div> 
     <div className="three"> <Link className="navlink"to="/user/viewLoan/1"><p>Search</p></Link></div> 
     <div className="four"> <Link className="navlink"to="/usercdet">  <p>Get-Loan</p></Link></div> 
    </div>
  </nav>
  <br/>
  <div className="header">
  <h2>Smart Finace </h2></div>
  <div className="searchbar">
    <input type="search" placeholder='Search your loan details' style={{width:"800px",height:"50px",borderRadius:"5px",borderBlockColor:"rgb(224, 53, 70)"}}/>
  </div>
  <div className='Box'> <Box component="img"
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',borderRadius:'50%'
      }}src="./loan.jpg" 
    /></div>
    <div className='loandet'>
      <p style={{padding:"30px",color:"white",fontWeight: "300", fontSize:"xx-large",paddingTop:"70px"}}>Champion your future with us !</p>
      <div style={{fontSize:"larger",padding:"20px"}}> 
      <p>Attractive student loan interest rates, starting 9% p.a.*</p>
      <p>Collateral free loans of up to ₹75 lakhs*</p>
      <p>Faster loan sanction via seamless application process</p>
      <p>Loans upto ₹1 Cr. available with collateral*</p></div>
      </div>
  </div>
  )
}

