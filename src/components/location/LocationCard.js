import React from "react"
import "./Location.css"
import { Link } from "react-router-dom"





export const LocationCard = ({location}) => (

    <section className="location">
        <h3 className="Location__name">
            <Link to={`locations/detail/${location.id}`}>
            {location.name}
            </Link>
            </h3>
        <div className="Location__number__employees"><b> Number of Employees: </b>{location.employees.length}</div>
        <div className="Location__number__animals"><b>Number of Animals: </b>{location.animals.length} </div>
    </section>
)