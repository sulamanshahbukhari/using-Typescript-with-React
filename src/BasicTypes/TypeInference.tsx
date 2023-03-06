import React from 'react'

const TypeInference = () => {
    // type specific for typescript
    let dateOfBirth = new Date(1990, 4, 7); //Date type doesnt exist in JS
    // types with constants
    const  name= "Sulaman"; 
    //if you hover over name var it will tell you that its type is Sulaman i.e value of var instead of string.
    // why is it so because string constants can only be that value so instead of wider type it uses its type to value
    // only works for primitive types

    const created = new Date(2023,11,2);

    // let is reassignble so it will use string if declared with string
    const first='sulaman';
    let firsName=first;
    // check first name type its string
    
    // if we dont assign any value it will be infered as any;
    let counter;
    counter=1; //counter has any type

    console.log('type of name', typeof(name)); //Js returns string | IN TS Its value i.e sulaman
    console.log('type of created', typeof(created))  //Js returns Object   | IN TS Its Date
    console.log('type of created', typeof(firsName)) //Js returns string  | IN TS Its string because let is used 

  return (
   <>
   <p>Using type inference on variable declarations</p>
   <p>typescript automatically infer types</p>
   <p>Typescript inference broke down on functions with no type annoations on params  </p>
   <code>
   {/* function addTen(a) {
             return a + 10;
    }

    const fourteen = addTen(4); */}
   </code>
   <h4>Wrap Up</h4>
   <p>TypeScript’s smart type inference can save us time and arguably make our code more readable by not having type annotations for every declaration. <br/>
   If we don’t specify a type annotation, TypeScript will infer the type from the value assignment. It is essential to be aware of this and check that the inferred type is as required. <br/>
    TypeScript generally can’t infer the type of function parameters, so we should supply type annotations for these. The exception is where the parameter has a default value that TypeScript can use to infer the type.</p>
   </>
  )
}

export default TypeInference