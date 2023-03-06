import React from 'react'

const VoidType = () => {
  function logMessage(message: string): void {
    console.log(message);
  }
  logMessage("Welcome Sulaman");
  return (
    <>
    <h3>Void type</h3>
    <p>So, the void type is to define that a function doesn’t return anything. TypeScript will correctly infer this type if a function doesn’t return anything, so we don’t need to define it explicitly.</p>
    <b>when to use Void type</b>
    <p> void is only really useful for function return types and it can be explicitly defined on functions after the parameter parentheses like in the example above:
    </p>
    
  
    </>
  )
}

export default VoidType