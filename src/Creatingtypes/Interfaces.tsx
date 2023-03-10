import React from 'react'

const Interfaces = () => {
    // creating an Interface
    // An interface allows a new type to be created with a name and structure. The structure includes all the properties and methods that the type has without any implementation.
    interface ButtonProps {
        text:string,
        onClick:()=>void
    }
    // obj
    const BuyButton:ButtonProps ={
        text:'Buy',
        onClick:()=>console.log('buy')

    }

// ------------------optional parameter in interface---------------

interface ButtonPropsTwo {
    text: string;
    onClick?: () => void; //optional
  }

    // ----------------------------------------
  //----------Readonly properties-----------

  interface ButtonPropsThree {
    readonly text: string;
    onClick?: () => void;
  }
  const BuyButtonThree:ButtonPropsThree ={
    text:'Buy',
    onClick:()=>console.log('buy')

}
  BuyButton.text = "＄20";  // is this okay? no typescript will complain because its already assined a value


//  Read only with arrays
interface Result {
    readonly name: string;
    readonly scores: number[];
  }
  let billScores: Result = {
    name: "Bill",
    scores: [90, 65, 80]
  }
  billScores.scores.push(70);
//   No type error is generated. Why do you think this is?
// Putting the readonly keyword before an array or object property name only ensures its reference won’t change. So, we can mutate the array but we can’t set the scores property to a different array.

// ___________________________________________________________________
// ___________________interface extends ______________________________
// ___________________________________________________________________

// TODO -  create a ColoredButtonProps interface that extends ButtonProps
interface ButtonProps{
    text:string;
    onClick:()=>void;
  }
  interface ColoredButtonProps extends ButtonProps{
    color:string;
  }
  const GreenBuyButton: ColoredButtonProps = {
    color: "Green",
    text: "Buy",
    onClick: () => console.log("Buy")
  }

  return (
   <>
   <p>Interfaces</p>
   <div>Interfaces vs type aliases
Interfaces create types like type aliases do, but interfaces seem more powerful. If this is the case, should we always use interfaces and forget about type aliases?

Historically, the capabilities of type aliases and interfaces were different, but now they are very similar. For example, type aliases can have optional and read-only properties, just like an interface. You can extend type aliases by using intersection, which we’ll learn about later in this category of lessons.

So, it is generally personal preference as to which approach to use when creating types. Just be consistent with which method you use so that the code isn’t confusing.</div>
   </>
  )
}

export default Interfaces