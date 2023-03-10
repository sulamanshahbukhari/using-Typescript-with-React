import React from 'react'

const TypeAlias = () => {
    // use to increase code readability

    //create a type aliase
    type Score ={name:string,score:number};
    
    const SulamanScore : Score = { name :'Sulaman', score:90}

  return (
    <>
    <p>Type aliases</p>
    </>
  )
}

export default TypeAlias