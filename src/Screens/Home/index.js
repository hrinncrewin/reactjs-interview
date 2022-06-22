import React from 'react'
import { useNavigate } from "react-router-dom";

const Home = () => {
    let navigate = useNavigate()
    const goToEmployeeManger = () => {
        navigate("EmployeeManager")
    }
    const goToAllEmployees = () => {
        navigate("EmployeeManager")
    }
    return (<React.Fragment>
            <button type="button" onClick={goToEmployeeManger} class="btn btn-primary">Manage Employees</button>
            <button type="button" onClick={goToAllEmployees} class="btn btn-primary">All Employees</button>
        </React.Fragment>)
}

export default Home