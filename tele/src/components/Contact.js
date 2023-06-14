import {  useState } from "react";
import { Users } from "./user";
import {Grid,Button} from '@mui/material';
import './contact.css'
import Table from "./Table";
import { Link } from 'react-router-dom';
    function Contact() {
      const [query, setQuery] = useState("");
      const keys = ["first_name","pno"];
      const search = (data) => {
        return data.filter((item) =>
          keys.some((key) => item[key].toLowerCase().includes(query))
        );
      };
    return (
      <Grid align="center"  style={{backgroundImage:'url(../bg5.jpg)',
      height:'1012',
      width:'2227',
      fontSize:'20px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'}}>
        <h1><span style={{color:'Red'}}>C</span><span style={{color:'white'}}>ontacts</span></h1>
      <div className="app" >
          <input
            className="search"
            placeholder="Search..." 
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
        {<Table data={search(Users)} />}
      </div>
      <div>
      <Link to='/Home'>
        <Button varient="contained">Back</Button></Link>
      </div>
        </Grid>
    );

}

export default Contact;