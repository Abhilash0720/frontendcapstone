import React from 'react'
import Button from 'react-bootstrap/Button';
function createquery() {
  return <>
  <center>
   <h1 className='headings'>Topic</h1>
   <div>
    <label for= 'queries' id='queries'  >Category</label><br/><br/>
    <select name='queries'>
    <option>---Select Category---</option>
      <option>Zen-class Doubt</option>
      <option>Placement Related</option>
      <option>Co-ordination Related</option>
      <option>Prebootcamp Related</option>
    </select>
    </div>
     <br/>
    <div>
    <label for= 'lang'  >Preferred Voice Communication Language</label><br/><br/>
    <select name='lang'>
    <option>---Select Language---</option>
      <option>English</option>
      <option>Hindi</option>
      <option>Tamil</option>
    </select>
    </div>
    
    <h1 className='headings'>Details</h1>
    <div>
        <label for='title' id='lang'>Query Title</label><br/><br/>
        <input type='text' name='title' placeholder='Enter the Title'/>
    </div>
    <br/>
    <div>
        <label for='description' id='lang'>Query Description</label><br/><br/>
        <input type='text' name='description' placeholder='Enter the Description'/>
    </div>
    
    <Button  className='querybtn'>Cancel</Button>
    <Button className='querybtn2'>Create</Button>
    </center>
 
  </>
}

export default createquery