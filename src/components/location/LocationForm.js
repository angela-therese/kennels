import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useHistory } from 'react-router-dom';

export const LocationForm = () => {

    const { addLocation } = useContext(LocationContext)
   
    

    const [location, setLocation] = useState({
        name: "",
        address:""
      
      });
      const history = useHistory();
      
      
      const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const newLocation = { ...location }
     
        newLocation[event.target.id] = event.target.value
        // update state
        setLocation(newLocation)
      }

      const handleClickSaveLocation= (event) => {
        event.preventDefault() //Prevents the browser from submitting the form
  
        const newLocation = { ...location}
  
  
        //PUT AN ALERT HERE TO FILL OUT ALL FIELDS
          //invoke addEmployee passing Employee as an argument.
          //once complete, change the url and display the Employee list
          addLocation(newLocation)
          .then(() => history.push("/locations"))
        
      }


      return (

        <form className="LocationForm">
              <h2 className="LocationForm__title">New Location</h2>
               <fieldset>
              <div className="form-group">
                  <label htmlFor="name">Location name: </label>
               <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location name" value={location.name}/>
             </div>
            </fieldset>
             <fieldset>
                     <div className="form-group">
                        <label htmlFor="address">Address: </label>
                        <input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location street address" value={location.address}/>
                       </div>
                  </fieldset>
                  
             <button className="btn btn-primary"
                    onClick={handleClickSaveLocation}>
                    Save Location
                  </button>
              </form>

      )


}


