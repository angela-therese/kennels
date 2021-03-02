import React from "react"
import "./Employee.css"

export const EmployeeCard = ({employee}) => (
    <section className="employee">
        <h3 className="Employee__name">{employee.name}</h3>
        <div className="Employee__employer">{employee.location.name}</div>
    </section>
)