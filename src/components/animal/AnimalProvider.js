import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const AnimalContext = createContext()

// This component establishes what data can be used by other components (props).
export const AnimalProvider = (props) => { //provider works with context to make available on other pages

    //11- defines the state (animals) and the function (setAnimals) that will define useState, which holds the array

    const [animals, setAnimals] = useState([]) //analagous to empty array in van js; setAnimals reassigns that empty array; only setAnimals can modify "animals"

    const getAnimals = () => {
        return fetch("http://localhost:8088/animals?_expand=location")
        .then(res => res.json())
        .then(setAnimals)//calling set function from state hook line 11
    }

 
    const addAnimal = animal => {
        return fetch("http://localhost:8088/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animal)
        })
        .then(response => response.json())
    }
 
    const getAnimalById = (id) => {
        return fetch(`http://localhost:8088/animals/${id}?_expand=location&_expand=customer`)
            .then(res => res.json())
    }


    const releaseAnimal = animalId => {
        return fetch(`http://localhost:8088/animals/${animalId}`, {
            method: "DELETE"
        })
            .then(getAnimals)
    }







    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    return (
        <AnimalContext.Provider value={{
            animals, getAnimals, addAnimal, getAnimalById, releaseAnimal //this is what other components can use
        }}>
            {props.children}
        </AnimalContext.Provider>
    )
}