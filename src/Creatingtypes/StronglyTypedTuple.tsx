import React from 'react'

const StronglyTypedTuple = () => {
    // creating a simple  tuple (a tuple whose elements are fixed eg usestate hook)
    const tomScore: [string, number] = ["Tom", 70];
    // creating a open ended  tuple( a tuple whose elements are not fixed)
    const benScores: [string, ...number[]] = ["Ben", 50, 75, 85]


  return (
    <>
    <p>Creating a simple tuple</p>
    
    </>
  )
}

export default StronglyTypedTuple