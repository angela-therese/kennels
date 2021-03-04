
import React, { useState, useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { AnimalContext } from "./AnimalProvider"
import { AnimalCard } from "./Animal"
import "./Animal.css"

export const AnimalList = ({ history }) => {
    const { getAnimals, animals } = useContext(AnimalContext)
    history = useHistory()
    
    // Initialization effect hook -> Go get animal data
    useEffect(()=>{
        getAnimals()
    }, [])

    return (
        <>
            <h1>Animals</h1>

            <button onClick={() => history.push("/animals/create")}>
                Add an animal
            </button>
            <div className="animals">
                {
                    animals.map(animal => {
                        return <AnimalCard key={animal.id} animal={animal} />
                    })
                }
            </div>
        </>
    )
}



// import React, { useContext, useEffect} from "react"
// import { useHistory } from "react-router-dom"
// import { AnimalContext } from "./AnimalProvider"
// import { LocationContext } from "../location/LocationProvider"
// import { CustomerContext } from "../customer/CustomerProvider"
// import { Animal } from "./Animal"
// import "./Animal.css"

// export const AnimalList = () => {
//     const { animals, getAnimals } = useContext(AnimalContext)
//     const { locations, getLocations } = useContext(LocationContext)
//     const { customers, getCustomers } = useContext(CustomerContext)

//     const history = useHistory()
   

//     useEffect(() => {
//         console.log("AnimalList: Initial render before data")
//         getLocations()
//         .then(getCustomers)
//         .then(getAnimals)
//     }, [])
    



//    return (
 
//         <>
//          <h2>Animals</h2>
// 		<button onClick={() => {history.push("/animals/create")}}>
//             Add Animal
//         </button>
//     <div className="animals">
//     {animals.map(animal => {
//         const owner = customers.find(c => c.id === animal.customerId)
//         const clinic = locations.find(l => l.id === animal.locationId)
      
    
//         return <Animal key={animal.id}
//                     location={clinic}
//                     customer={owner}
//                     animal={animal} />
//     })}
//     </div>
//     </>
//    )
// }







