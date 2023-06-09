import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CustomerDet.css";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";

export default function GetLoan() {
  let navigate = useNavigate();
  const [user, setUser] = useState( {
    "loantype": "",
    "applicantname": "",
    "applicantaddress": "",
    "applicantmobile": "",
    "applicantemail": "",
    "applicantaadhaar": "",
    "applicantpan": "",
    "applicantsalary": "",
    "loanamountrequired": "",
    "loanrepaymentmonths": ""
}
    );
  
    const { loantype,applicantname,applicantaddress,applicantmobile,applicantemail,applicantaadhaar,applicantpan,applicantsalary,loanamountrequired,loanrepaymentmonths } = user;
  
    const onInputChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    const onSubmit = async (e) => {
      e.preventDefault();
      await axios.post("http://localhost:8080/admin/postadmin", user);
      navigate("/Home");
    };

return (
  <div>

          <form onSubmit={(e) => onSubmit(e)}>
      <div className="cover2">
          <h1 >Get Loan</h1>
          <TextField fullwidth label="Type-of-loan" placeholder="Enter your loan type" name="loantype"
          value={loantype}
              onChange={(e) => onInputChange(e)}
          style={{width:"300px"}}/>
          <TextField fullwidth label="name" placeholder="Enter your name" name="applicantname"
          value={applicantname}
              onChange={(e) => onInputChange(e)}style={{width:"300px"}}/>
          <TextField fullwidth label="Address" placeholder="Enter your address" name="applicantaddress" value={applicantaddress}
              onChange={(e) => onInputChange(e)}
          style={{width:"300px"}}/>
          <TextField fullwidth label="Mobilenumber" placeholder="Enter your mobilenumber" name="applicantmobile"
          value={applicantmobile}
          onChange={(e) => onInputChange(e)}
          style={{width:"300px"}}/>
          <TextField fullwidth label="Email" placeholder="Enter your email" name="applicantemail"
          value={applicantemail}
          onChange={(e) => onInputChange(e)}
          style={{width:"300px"}}/>
          <TextField fullwidth label="Aadhaar" placeholder="Enter your aadhaar" name="applicantaadhaar"
          value={applicantaadhaar}
          onChange={(e) => onInputChange(e)}style={{width:"300px"}}/>
          <TextField fullwidth label="pan number" placeholder="Enter your pan number" name="applicantpan"
          value={applicantpan}
          onChange={(e) => onInputChange(e)}style={{width:"300px"}}/>
          <TextField fullwidth label="Salary" placeholder="Enter your salary" name="applicantsalary"
          value={applicantsalary}
          onChange={(e) => onInputChange(e)}style={{width:"300px"}}/>
          <TextField fullwidth label="loan amount" placeholder="Enter the amount you need" name="loanamountrequired"
          value={loanamountrequired}
          onChange={(e) => onInputChange(e)}style={{width:"300px"}}/>
          <TextField fullwidth label="repayement-months" placeholder="Enter loan-repayement-months" name="loanrepaymentmonths"
          value={loanrepaymentmonths}
          onChange={(e) => onInputChange(e)}style={{width:"300px"}}/>
          <div className="login">
          <button type="submit" className="login-btn" style={{backgroundColor:"#9D1D27",color:"white",paddingTop:"12px",fontSize:"large"}}>Apply loan</button>
          </div>
          <dr/>
          <dr/>
  </div>
          </form>
          
  </div>
)
}