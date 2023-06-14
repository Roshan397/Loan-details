import React from 'react'
const Table = ({ data }) => {
    return (
      <table >
        <tbody>
            <tr style={{allign:'center'}}>
              &nbsp;
              <th style={{color:'white'}} >Name</th>
              <th style={{color:'white'}}>Phone Number</th>
              <th style={{color:'white'}}>City</th>
            </tr>
          {data.map((item) => (
            <tr key={item.id}>
              &nbsp;
              <td>{item.first_name}</td>
              <td>{item.pno}</td>
              <td>{item.City}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;