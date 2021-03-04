import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom"

export const AnimalCard = ({ animal }) => (
    <section className="animal">
        <h3 className="animal__name">
          <Link to={`/animals/detail/${animal.id}`}>
            { animal.name }
          </Link>
        </h3>
        <div className="animal__breed">{ animal.breed }</div>
    </section>
)




// export const Animal = ({ animal, customer, location }) => (

//     <section className="animal">
//         <h3 className="animal__name">{animal.name}</h3>
//         <p className="animal_breed">{animal.breed}</p>
//         <p className="customer__name">{customer.name}</p>
//         <p className="location__name">{location.name}</p>
//     </section>

// )

// export const AnimalCard = ({ animal }) => (
//     <section className="animal">
//         <h3 className="animal__name">{animal.name}</h3>
//         <h5 className="animal__breed">{animal.breed}</h5>
//         <address className="location__address">{animal.location.name}</address>
//     </section>
// )

