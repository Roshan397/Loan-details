import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Search.css";
export default function Search() {
  const [users, setUsers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  });

  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:8080/user/viewLoan/${id}`);
    setUsers(result.data);
  };
  return (
    <div className="container3">
      <table className="table2 ">
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
            <tr>
              <td>{users.loanid}</td>
              <td>{users.loantype}</td>
              <td>{users.applicantname}</td>
              <td>{users.applicantaddress}</td>
              <td>{users.applicantmobile}</td>
              <td>{users.applicantemail}</td>
              <td>{users.applicantaadhaar}</td>
              <td>{users.applicantpan}</td>
              <td>{users.applicantsalary}</td>
              <td>{users.loanamountrequired}</td>
              <td>{users.loanrepaymentmonths}</td>

            </tr>
        </tbody>
      </table>
    </div>
  )
}
