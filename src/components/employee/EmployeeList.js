import React, { useState, useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
import "./Employee.css"
import { useHistory } from "react-router-dom"

export const EmployeeList = ({ history }) => {
    const { getEmployees, employees } = useContext(EmployeeContext)
   history = useHistory()

    // Initialization effect hook -> Go get animal data
    useEffect(()=>{
        getEmployees()
    }, [])

    return (
        <>
            <h1>Employees</h1>

            <button onClick={() => history.push("/employees/create")}>
                Add new employee
            </button>
            <div className="employees">
                {
                    employees.map(employee => {
                        return <EmployeeCard key={employee.id} employee={employee} />
                    })
                }
            </div>
        </>
    )
}


// import React, { useContext, useEffect } from "react"
// import { useHistory } from "react-router-dom"
// import { EmployeeContext } from "./EmployeeProvider"
// import { LocationContext} from "../location/LocationProvider"
// import { EmployeeCard } from "./EmployeeCard"
// import "./Employee.css"

// export const EmployeeList = () => {
//   // This state changes when `getEmployees()` is invoked below
//   const history = useHistory()
//   const { employees, getEmployees } = useContext(EmployeeContext)
//   const { locations, getLocations} = useContext(LocationContext)

//   //useEffect - reach out to the world for something
//   //function runs when the value in the array changes
//   useEffect(() => {
//     console.log("EmployeeList: useEffect - getEmployees")
//     getEmployees()
//     .then(getLocations)

//   }, [])


//   return (
//     <>
//     <h2>Employees</h2>
//     <button onClick={() => {history.push("/employees/create")}}>
//        Add Employee
//     </button>
//     <div className="employees">
//       {console.log("EmployeeList: Render", employees)}
//       {employees.map(employee => {
          
//           return <EmployeeCard 
//                   key={employee.id} 
//                   employee={employee}
//                    />
//         })
//       }
//     </div>
//     </>
//   )
// }