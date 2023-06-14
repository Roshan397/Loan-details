import {  useState } from "react";
import {Button, Grid,} from '@mui/material';
import './contact.css'
import Table1 from "./Table1";
import { User1 } from "./user1";
import { Link } from 'react-router-dom';
    function Favorites() {
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
        <h1><span style={{color:'Red'}}>F</span><span style={{color:'white'}}>avorites</span></h1>
      <div className="app" >
          <input
            className="search"
            placeholder="Search..." 
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
        {<Table1 data={search(User1)} />}
      </div>
      <div>
        <Link to='/Home'>
        <Button varient="contained">Back</Button></Link>
      </div>
        </Grid>
    );

}

export default Favorites;