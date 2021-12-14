import React, { useState } from 'react'
// For Add
function EmpAdd(props) {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [dob, setDob] = useState();
    const [designation, setDesignation] = useState();
    const [experience, setExperience] = useState()


    const onSubmit = async () => {

        await fetch('api Url', {
            method: "POST",
            body: JSON.stringify({
                firstName,
                lastName,
                dob,
                designation,
                experience
            })
        })
        let emparray = Object.assign([], props.employee)
        emparray.push({
            firstName,
            lastName,
            dob,
            designation,
            experience
        })
        props.setEmployees(emparray)

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
            <h2 className="text-center">Employeeb Add</h2>
            <form onSubmit={onsubmit}>
                <div>
                    <label>First Name </label>
                    <input type="text" placeholder="First Name" name="firstName" onChange={onChangeField} />
                </div>
                <div>
                    <label>Last Name </label>
                    <input type="text" placeholder="Last Name" name="lastName" onChange={onChangeField} />
                </div>
                <div>
                    <label>DOB </label>
                    <input type="text" placeholder="DOB" name="dob" onChange={onChangeField} />
                </div>
                <div>
                    <label>Designation </label>
                    <input type="text" placeholder="Designation" name="designation" onChange={onChangeField} />
                </div>
                <div>
                    <label>Experience </label>
                    <input type="text" placeholder="Experience" name="experience" onChange={onChangeField} />
                </div>
                <button type="submit">Submit</button>
            </form>

        </>

    );
}

export default EmpAdd;