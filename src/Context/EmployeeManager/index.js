import React, { useContext, createContext } from "react";

const EmpoyeesContext = createContext();

export function EmpoyeeManager({ children }) {
  const Users = [];
  const addUser = (user) => {
    Users.push(user)
  };

  const editUser = ({ id, fName, lName, dob }) => {
    console.log("editUser");
  };

  const deleteUser = ({ id }) => {
    console.log("deleteUser");
  };

  const value = {
    Users,
    addUser,
    editUser,
    deleteUser,
  };

  return (
    <EmpoyeesContext.Provider value={value}>
      {children}
    </EmpoyeesContext.Provider>
  );
}

export function useEmployees() {
  return useContext(EmpoyeesContext);
}
