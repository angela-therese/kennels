import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
   //Line 9 is like an import statement "import { get animals, useanimals} from '/animalProvider.js'"
  const { animals, getAnimals } = useContext(AnimalContext)

  //useEffect - reach out to the world for something
  //function runs when the value in the array changes
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals")
    getAnimals()

  }, [])


  return (
    <div className="animals">
      {console.log("AnimalList: Render", animals)}
      {
        animals.map(singleAnimal => {
          //AnimalCard(singleAnimalInLoop) is van js equivalent
            return <AnimalCard key={singleAnimal.id} animal={singleAnimal} /> //key attribute related to virtual DOM; prop: animal(key) = object from our singleAnimal in loop (value); use key in card
        })
      }
    </div>
  )
}