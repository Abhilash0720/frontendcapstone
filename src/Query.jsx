import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
function Query() {
  return <>
  <center>
    <h1 className='myQuery'>My Queries</h1>
    </center>
   <Link to='/createquery'>
    <Button className='query'>Create a Query</Button>
    <input className='intype' placeholder='Search' type='text'/>
    </Link>
    
  </>
}

export default Query