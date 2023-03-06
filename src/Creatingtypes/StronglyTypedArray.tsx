import React from 'react'

const StronglyTypedArray = () => {
    // generic type array
    const numbers:Array<number> =[];
    numbers.push(1);
    //  square bracket notation
    const items : number[]=[1,2,3];
    const arr :string[]=["one","two","three"];

    // using type inference
    const array = [1,2,3]

    // strongly typing rest parameters
        function logScore(firsName:string,...scores:number[]){
            console.log(firsName,scores);
        }
        logScore("Sulaman",10,35,45)   // outputs Sulaman and [10, 35, 45] 
        // logScores("Mike", 90, 65, "65") gives error
  return (
    <>
    <h3> StronglyTypedArray </h3>
    <p>Array can hold mix values</p>
    
   </>
  )
}

export default StronglyTypedArray