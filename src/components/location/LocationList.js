import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"
import "./Location.css"

export const LocationList = () => {
  // This state changes when `getEmployees()` is invoked below
  const history = useHistory()
  const { locations, getLocations} = useContext(LocationContext)

  //useEffect - reach out to the world for something
  //function runs when the value in the array changes
  useEffect(() => {
    console.log("LocationList: useEffect - getLocations")
    getLocations()

  }, [])


  return (
    <>
    <h2>Kennel Locations</h2>
    <button onClick={() => {history.push("/locations/create")}}>
       Add Location
    </button>
    <div className="locations">
      {console.log("LocationList: Render", locations)}
      {
        locations.map(location => {
          
          return <LocationCard 
                  key={location.id} 
                  location={location}/>
        })
      }
    </div>
    </>
  )
}