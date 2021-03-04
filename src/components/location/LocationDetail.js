import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams, useHistory } from "react-router-dom"

export const LocationDetail = () => {
  const { getLocationById } = useContext(LocationContext)
  


	const [location, setLocation] = useState({})

    const { getLocations, locations } = useContext(LocationContext)
  
   

	const {locationId} = useParams();
	const history = useHistory();


  useEffect(() => {
    
    getLocationById(locationId)
    .then((response) => {
      setLocation(response)
    })
 
    }, [])

   const employees = location.employees
    console.log(employees)
   

  return (
    <>
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <div className="employee__names"><h4>Employees: </h4>
        {location.employees?.map(emp => 
         <p>{emp.name}</p>
        )}
        
      </div>

       <div className="animal__names"><h4>Animals: </h4> 
       {location.animals?.map(a => 
         <p>{a.name}</p>
        )}
        
         
       </div>

      
    </section>
    </>
  )
}