import React from 'react'

const StronglyTypedObject = () => {
    // infered object types 
    //(if we try to add a property typeScript will raise an error because passed doesn’t exist on the type originally inferred.)
    const tomScore = {
        name: "Tom",
        score: 70
    }
    // explicit object types
    const SulamanScore: { name: string; score: number; } = {
        name: "Sulaman",
        score: 89
    }
  return (
    <>
    
    </>
  )
}

export default StronglyTypedObject