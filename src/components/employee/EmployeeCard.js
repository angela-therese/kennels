import React from "react"
import "./Employee.css"
import { Link } from "react-router-dom"

export const EmployeeCard = ({ employee }) => (
    <section className="employee">
        <h3 className="employee__name">
          <Link to={`/employees/detail/${employee.id}`}>
            { employee.name }
          </Link>
        </h3>
    </section>
)


// import React from "react"
// import "./Employee.css"

// export const EmployeeCard = ({employee}) => (
//     <section className="employee">
//         <h3 className="Employee__name">{employee.name}</h3>
//         <div className="Employee__employer">{employee.location.name}</div>
//     </section>
// )