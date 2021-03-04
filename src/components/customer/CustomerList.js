import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import { CustomerCard } from "./CustomerCard"
import "./Customer.css"

export const CustomerList = () => {
  // This state changes when `getAnimals()` is invoked below

  const { customers, getCustomers } = useContext(CustomerContext)

  //useEffect - reach out to the world for something
  //function runs when the value in the array changes
  useEffect(() => {
    console.log("CustomerList: useEffect - getCustomers")
    getCustomers()

  }, [])


  return (
    <>
  
    <h3> Customers </h3>
    <div className="customers">
      {console.log("CustomerList: Render", customers)}
      {
        customers.map(customer => {
          return <CustomerCard key={customer.id} customer={customer} />
        })
      }
    </div>
    </>
  )
}