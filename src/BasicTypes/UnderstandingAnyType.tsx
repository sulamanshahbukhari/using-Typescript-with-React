import React from 'react'

const UnderstandingAnyType = () => {
let something;
something = "Bob"; //type any
something = "Bob"; //type any
something = 33;  //type any
something = false;  //type any
something = new Date(2019, 5, 8);  //type any
// -----
const formValues: { [field: string]: any } = {
    firstName: "Bob",
    surname: "Smith",
    age: 30
  };


  return (
  <>
  <h3>UNDERSTANDING ANY TYPE</h3>
  <p>TypeScript doesn’t carry out type checking on items that have the any type. The any type is a way of opting out of the type checking process</p>
  <p>An example where we may see any being used is when we are dealing with dynamic data.<br></br> 
    This is data that is defined by end-users rather than developers. <br/>
    The ability for end-users to create custom forms is an example of where code would need to deal with dynamic data. The code snippet below is an example of how we could type a custom form’s values:</p>
  </>
  )
}

export default UnderstandingAnyType