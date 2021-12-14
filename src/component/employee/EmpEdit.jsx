import React, { useState } from 'react'

// For Edit
function EmpEdit (props)  {
    const [firstName, setFirstName] = useState();
    const [lastname, setLastName] = useState();
    const [dob, setDob] = useState();
    const [designation, setDesignation] = useState();
    const [experience, setExperience] = useState()


  const  onSubmit = async () => {
        await fetch('api Url',{
            method: "POST",
            body : JSON.stringify( {
                firstName,
                lastname,
                dob,
                designation,
                experience
            })
        })
        
    }

    const onChangeField = (event) => {
        if (event.target.name === 'firstName') {
            setFirstName(event.target.value)
        }
        if (event.target.name === 'lastName') {
            setLastName(event.target.value)
        }
        if (event.target.name === 'dob') {
            setDob(event.target.value)
        }
        if (event.target.name === 'designation') {
            setDesignation(event.target.value)
        }
        if (event.target.name === 'experience') {
            setExperience(event.target.value)
        }
          
    }
        return ( 
            <>
             <h2 className="text-center">Employee Edit</h2>
             <form onSubmit={onsubmit}>
                <div>
                    <label>First Name </label>
                    <input type="text" placeholder="First Name" name="firstName" value={props.employees[props.editEmpId].firstName} onChange={onChangeField} />
                </div>
                <div>
                    <label>Last Name </label>
                    <input type="text" placeholder="Last Name" name="lastName" value={props.employees[props.editEmpId].lastName} onChange={onChangeField} />
                </div>
                <div>
                    <label>DOB </label>
                    <input type="text" placeholder="DOB" name="dob" value={props.employees[props.editEmpId].dob} onChange={onChangeField} />
                </div>
                <div>
                    <label>Designation </label>
                    <input type="text" placeholder="Designation" name="designation" value={props.employees[props.editEmpId].designation} onChange={onChangeField} />
                </div>
                <div>
                    <label>Experience </label>
                    <input type="text" placeholder="Experience" name="experience" value={props.employees[props.editEmpId].experience} onChange={onChangeField} />
                </div>
                <button type="submit">Submit</button>
            </form>

            </>
       
        );
}

export default EmpEdit;