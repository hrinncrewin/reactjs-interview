import React, { Component } from 'react'

class AddEmployee extends Component {

    state = {
        employee : []
    };

    onEmpAdd = () => {
        this.setState({
            employee : [...this.state.employee, { 
                firstName : document.getElementById("empNameEl").value,
                lastName : document.getElementById("lastNameEl").value,
                dob : document.getElementById("dobEl").value,
                designation : document.getElementById("designationEl").value,
                profilePhotoLink : document.getElementById("profilePhotoLinkEl").value,
                experience : document.getElementById("experienceEl").value,
            }]
        });
    }

    render() {
        return (
        <div>
            <h2 className="text-center">Employee Module</h2>
            <div>
                <label for="empNameEl">First name</label>
                <input type="text" id="empNameEl"/><br />
                
                <label for="lastNameEl">Last name</label>
                <input type="text" id="lastNameEl"/><br />
                
                <label for="dobEl">Date of birth</label>
                <input type="text" id="dobEl"/><br />
                
                <label for="designationEl">Designation</label>
                <input type="text" id="designationEl"/><br />
                
                <label for="profilePhotoLinkEl">Profile photo</label>
                <input type="text" id="profilePhotoLinkEl"/><br />
                
                <label for="experienceEl">Experience</label>
                <input type="text" id="experienceEl"/><br />
                
                <button onClick={this.onEmpAdd}> Add </button>
            </div>
            <ul>
                {this.state.employee.map(e => <li>Employee Details : {e.firstName} | {e.lastName} | {e.dob} | {e.designation} | {e.profilePhotoLink} | {e.experience}</li>)}
            </ul>
        </ div>
        );
    }

}

export default AddEmployee;