import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"
import { useHistory } from 'react-router-dom';

export const EmployeeForm = () => {
    const { addEmployee } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)
    
    const [employee, setEmployee] = useState({
        name: "",
        locationId: 0
      
      });
  
      const history = useHistory();
      
      useEffect(() => {
       getLocations()
      }, [])

      //when a field changes, update state. The return will re-render and display based on the values in state
    //Controlled component
    const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const newEmployee = { ...employee }
     
        newEmployee[event.target.id] = event.target.value
        // update state
        setEmployee(newEmployee)
      }

        const handleClickSaveEmployee = (event) => {
      event.preventDefault() //Prevents the browser from submitting the form

      const newEmployee = { ...employee}

            
      const intLocationId = parseInt(employee.locationId)
      

      newEmployee.locationId = parseInt(employee.locationId)

      if (intLocationId === 0) {
        window.alert("Please select worksite location")
      } else {
        //invoke addEmployee passing Employee as an argument.
        //once complete, change the url and display the Employee list
        addEmployee(newEmployee)
        .then(() => history.push("/employees"))
      }
    }

    return (
      <form className="EmployeeForm">
          <h2 className="EmployeeForm__title">New Employee</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="name">Employee name: </label>
                  <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee name" value={employee.name}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="location">Assign to location: </label>
                  <select onChange={handleControlledInputChange} defaultValue={employee.locationId} name="locationId" id="locationId" className="form-control" >
                      <option value="0">Select a location</option>
                      {locations.map(l => (
                          <option key={l.id} value={l.id}>
                              {l.name}
                          </option>
                      ))}
                  </select>
              </div>
          </fieldset>
          {/* <fieldset>
              <div className="form-group">
                  <label htmlFor="customerId">Customer: </label>
                  <select onChange={handleControlledInputChange} defaultValue={employee.customerId} name="customer" id="customerId" className="form-control" >
                      <option value="0">Select a customer</option>
                      {customers.map(c => (
                          <option key={c.id} value={c.id}>
                              {c.name}
                          </option>
                      ))}
                  </select>
              </div>
          </fieldset> */}
          <button className="btn btn-primary"
            onClick={handleClickSaveEmployee}>
            Save Employee
          </button>
      </form>
    )
}