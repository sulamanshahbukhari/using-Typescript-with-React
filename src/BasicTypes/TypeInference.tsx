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
   </>
  )
}

export default TypeInference