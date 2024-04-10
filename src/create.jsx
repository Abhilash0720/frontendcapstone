import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
function Create() {
  return <>
    <center>
    <h1>Zen Class Ticketing System</h1>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="FirstName" />
    </Form.Group>
     <br></br>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control type="text" placeholder="LastName" />
    </Form.Group>
   <br></br>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control type="email" placeholder="Email" />
    </Form.Group>
    <br></br>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <br></br>
    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Confirm Password" />
    </Form.Group>
    <br></br>
    <Link to='/Login'>
      <Button variant="primary" type="submit">
        Register
      </Button>
      </Link>
    </Form>
    </center>
  </>
}

export default Create
