import React, { useState } from 'react'
import { Button, Table } from 'reactstrap';
import EmpAdd from './EmpAdd';
import EmpEdit from './EmpEdit';

function Employee() {
    let [employees, setEmployees] = useState([])
    const [editActive, setEditActive] = useState(false)
    const [addActive, setAddActive] = useState(false)
    const [editEmpId, setEditEmpId] = useState(undefined)

const deleteEmployee = (id) => {
    if(window.confirm('are you sure')) {
        employees.splice(id, 1);
        setEmployees(employees);
    }
}

    return (
        <>
        {addActive && (
            <EmpAdd setEmployees={setEmployees} employees={employees} />
        )}

        {editActive && (
            <EmpEdit setEmployees={setEmployees} employees={employees} editEmpId={editEmpId} />
        )}


            {
                (!editActive && !addActive) && (
                    <>
                        <h2 className="text-center">Employee List</h2>
                        <Button onClick={() => setAddActive(true)}>Add</Button>
                        <Table bordered>
                            <thead>
                                <tr>
                                    <th>
                                        #
                                    </th>
                                    <th>
                                        First Name
                                    </th>
                                    <th>
                                        Last Name
                                    </th>
                                    <th>
                                        DOB
                                    </th>
                                    <th>
                                        Designation
                                    </th>
                                    <th>
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees.map((res, key) => (
                                    <tr>
                                        <th scope="row">
                                            {key + 1}
                                        </th>
                                        <td>
                                            {res.firstname}
                                        </td>
                                        <td>
                                            {res.lastname}
                                        </td>
                                        <td>
                                            {res.dob}
                                        </td>
                                        <td>
                                            {res.designation}
                                        </td>
                                        <td>
                                            <Button onClick={() =>  {
                                                setEditActive(true)
                                                setEditEmpId(key)
                                                }}>Edit</Button>
                                            <Button onClick={() => deleteEmployee()}>Delete</Button>
                                        </td>
                                    </tr>
                                ))}



                            </tbody>
                        </Table>
                    </>
                )
            }

        </>

    );
}

export default Employee;