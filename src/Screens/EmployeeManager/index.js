import React, { useReducer } from "react";
import { useEmployees } from "../../Context/EmployeeManager";

const initialState = {
  createEmployee: false,
  editEmployee: false,
  deleteEmployee: false,
  fname: "",
  lname: "",
  dob: "",
  des: "",
  ppl: "",
  exp: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "createEmployee":
      return {
        ...state,
        createEmployee: true,
        editEmployee: false,
        deleteEmployee: false,
      };
    case "editEmployee":
      return {
        ...state,
        createEmployee: false,
        editEmployee: true,
        deleteEmployee: false,
      };
    case "deleteEmployee":
      return {
        ...state,
        createEmployee: false,
        editEmployee: false,
        deleteEmployee: true,
      };
    case "EmployeeData":
      return {
          ...state,
        fname: action.data.fname == "" ? "" : action.data.fname || state.fname,
        lname: action.data.lname == "" ? "" : action.data.lname || state.lname,
        dob: action.data.dob == "" ? "" : action.data.dob || state.dob,
        des: action.data.des == "" ? "" : action.data.des || state.des,
        ppl: action.data.ppl == "" ? "" : action.data.ppl || state.ppl,
        exp: action.data.exp == "" ? "" : action.data.exp || state.exp,
      };
    case "CleanEmployeeData":
      return {
        fname: "",
        lname: "",
        dob: "",
        des: "",
        ppl: "",
        exp: "",
      };
    default:
      return {
        ...state
      };
  }
}
const EmployeeManager = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { Users, addUser, editUser, deleteUser } = useEmployees();

  const getLabel = (label) => {
    return {
      "First Name": "fname",
      "Last Name": "lname",
      DOB: "dob",
      Designation: "des",
      "Profile Photo link": "ppl",
      Experience: "exp",
    }[label];
  };
  const renderInputGroup = (label) => {
    let slabel = getLabel(label);
    const onChangeAddEmployee = (event, label) => {
      dispatch({ type: "EmployeeData", data: { [label]: event.target.value } });
    };
    return (
      <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-sm">
            {label}
          </span>
        </div>
        <input
          type="text"
          onChange={(value) => onChangeAddEmployee(value, slabel)}
          value={state[slabel]}
          class="form-control"
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>
    );
  };

  const addEmployee = () => {
    const { fname, lname, dob, des, ppl, exp } = state;
    addUser({ fname, lname, dob, des, ppl, exp });
  };
  const renderCreateEmployee = () => {
    return (
      <React.Fragment>
        <div>
          {renderInputGroup("First Name")}
          {renderInputGroup("Last Name")}
          {renderInputGroup("DOB")}
          {renderInputGroup("Designation")}
          {renderInputGroup("Profile Photo link")}
          {renderInputGroup("Experience")}
        </div>
        <div>
          <button type="button" onClick={addEmployee} class="btn btn-primary">
            Add Employee
          </button>
        </div>
      </React.Fragment>
    );
  };

  const renderEditEmployee = () => {
    return (
      <div>
        <button type="button" onClick={editUser} class="btn btn-primary">
          edit Employee
        </button>
      </div>
    );
  };

  const renderDeleteEmployee = () => {
    return <h1>renderDeleteEmployee</h1>;
  };
  const { createEmployee, editEmployee, deleteEmployee } = state;
  return (
    <div>
      <div>
        <button
          type="button"
          onClick={() => dispatch({ type: "createEmployee" })}
          class="btn btn-primary"
        >
          Create Employees
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: "editEmployee" })}
          class="btn btn-primary"
        >
          Edit Employees
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: "deleteEmployee" })}
          class="btn btn-primary"
        >
          Delete Employees
        </button>
      </div>
      <div>
        {createEmployee && renderCreateEmployee()}
        {editEmployee && renderEditEmployee()}
        {deleteEmployee && renderDeleteEmployee()}
      </div>
    </div>
  );
};

export default EmployeeManager;
