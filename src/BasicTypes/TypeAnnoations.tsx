import React from 'react'

const TypeAnnoations = () => {
    {/* [def] : Javascript is a loosely typed language which means it doesnt have strict type checking  */}
   {/* javascript infer types on premitive type declarations */}

    {/* ---------------------------------------------------------------- */}
    {/* -----------------Assigning Types to Variables------------------- */}
    {/* ---------------------------------------------------------------- */}
    let score:number =10;
    score=0;
    // score='ten' gives type error 

    {/* ---------------------------------------------------------------- */}
    {/* -----------------Assigning Types to Functions------------------- */}
    {/* ---------------------------------------------------------------- */}


     function addTwoNumbers (a:number,b:number) {
        return a+b;
        
    }
    // OR return function type as well
    function Multiblytwonumbers (a:number, b: number) :number{
        return a * b
    }
    // arrow functions
    const subtract=(a:number,b:number):number=>a-b;

    // optional Parameters
    function add(a:number, b?:number):number {
        return a + (b || 0); //if OR operator check not applied will give error
      }
      
      

    // function calls
    console.log('add',addTwoNumbers(2,3));
    console.log('multiply',Multiblytwonumbers(2,3));
    console.log('subtract',subtract(2,3));
    console.log('optional add',add(3));

  return (
   <>  
   <h3>Type annoations Wrap up</h3>
   <p>Type annotations don’t exist in JavaScript, so they are removed during the transpilation process.</p>
   <p>TypeScript doesn’t exist at runtime as it is a development tool.</p>
   <p>So, TypeScript won’t do any type checking on the code at runtime.</p>

   </>
  )
}

export default TypeAnnoations