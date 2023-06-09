import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Loan.css";
import { Link } from "react-router-dom";

export default function LoanDetails() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/admin/getAllLoans");
    setUsers(result.data);
  };


  return (
    <div className="container1">
      <div><h2>Loan Details</h2></div>
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">LoanId</th>
              <th scope="col">Loan Type</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Mobilenumber</th>
              <th scope="col">Email</th>
              <th scope="col">Aadhar</th>
              <th scope="col">Pan</th>
              <th scope="col">Salary</th>
              <th scope="col">Amount Required</th>
              <th scope="col">Repayment Months</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td>{user.loanid}</td>
                <td>{user.loantype}</td>
                <td>{user.applicantname}</td>
                <td>{user.applicantaddress}</td>
                <td>{user.applicantmobile}</td>
                <td>{user.applicantemail}</td>
                <td>{user.applicantaadhaar}</td>
                <td>{user.applicantpan}</td>
                <td>{user.applicantsalary}</td>
                <td>{user.loanamountrequired}</td>
                <td>{user.loanrepaymentmonths}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
        <br/>
        <br/>
        <Link to="/userupdate"><button type="contained">Edit</button></Link>
        <Link to="/userdelete"><button type="contained">Delete</button></Link>
    </div>
  );
}