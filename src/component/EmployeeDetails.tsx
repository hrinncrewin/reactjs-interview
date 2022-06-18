import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  tdHeading: {
    padding: "5px"
  },
  rowContainer: {
    padding: "3px 1px"
  }
}));
interface IUser {
  id: number;
  fname: string;
  lname: string;
  dob: string;
  designation: string;
  pic: string;
  experience: string;
}
const EmployeeDetails = () => {
  const classes = useStyles();
  const [isUpdated, setUpdated] = useState(0);
  const user: IUser = {
    fname: "",
    lname: "",
    dob: "",
    designation: "",
    pic: "",
    experience: ""
  };
  const getUsers = () => {
    const users = [];
    for (let x = 0; x <= 3; x++) {
      const u = { ...user };
      u.id = x;
      u.fname = `Fname-User-${x}`;
      u.lname = `Lname-User-${x}`;
      u.dob = `DOB-User-${x}`;
      u.designation = `Designation-User-${x}`;
      u.pic = `Pic-User-${x}`;
      u.experience = `Experience-User-${x}`;
      users.push(u);
    }
    return users;
  };
  const [users, setUsers] = useState(getUsers());

  const onAddClickHandler = (user) => {
    // return <UserAdd />;
  };
  const onEditClickHandler = (user) => {
    // return <UserEdit user={user} />;
  };
  const onDeleteClickHandler = (user) => {
    const confirmText = "Please confirm to delete";
    if (window.confirm(confirmText) === true) {
      const idx = users.findIndex((obj) => obj.id === user.id);

      users.splice(idx, 1);
      console.log(users);
      setUsers(users);
      setUpdated(!isUpdated);
      alert("removed");
    } else {
      alert("ignore delete");
    }
  };
  return (
    <>
      <table>
        <tr>
          <th className={classes.tdHeading}>First Name</th>
          <th className={classes.tdHeading}>Last Name</th>
          <th className={classes.tdHeading}>DOB</th>
          <th className={classes.tdHeading}>Designation</th>
          <th className={classes.tdHeading}>Profile Photo Link</th>
          <th className={classes.tdHeading}>Experience</th>
          <th className={classes.tdHeading}>Action</th>
        </tr>
        {users.map((user) => {
          return (
            <tr className={`${classes.rowContainer}`}>
              <td className={classes.tdHeading}>{user.fname}</td>
              <td className={classes.tdHeading}>{user.lname}</td>
              <td className={classes.tdHeading}>{user.dob}</td>
              <td className={classes.tdHeading}>{user.designation}</td>
              <td className={classes.tdHeading}>{user.pic}</td>
              <td className={classes.tdHeading}>{user.experience}</td>
              <td className={classes.tdHeading}>
                <button
                  onClick={() => {
                    onAddClickHandler(user);
                  }}
                >
                  Add
                </button>
                <button
                  onClick={() => {
                    onEditClickHandler(user);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    onDeleteClickHandler(user);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default EmployeeDetails;
