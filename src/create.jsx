import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function create() {

  
  return<>
  <center>
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
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
    </center>

   
  </>
}

export default create