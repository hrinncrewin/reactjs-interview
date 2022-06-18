import React, { useRef, useState } from "react";
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
interface IProps {
  user: IUser;
  editUser: () => void;
}
const UserEdit = (props: IProps) => {
  const { user } = props;
  const fname = useRef();
  const lname = useRef();
  const dob = useRef();
  const designation = useRef();
  const experience = useRef();
  const pic = useRef();

  const onClickHandler = () => {
    // u.id = x;
    u.fname = fname.current.value;
    u.lname = lname.current.value;
    u.dob = fname.current.value;
    u.designation = fname.current.value;
    u.pic = fname.current.value;
    u.experience = fname.current.value;
    // editUser(user)
  };
  return (
    <>
      <input type="text" ref={fname} />
      <input type="text" ref={lname} />
      <input type="text" ref={dob} />
      <input type="text" ref={designation} />
      <input type="text" ref={pic} />
      <input type="text" ref={experience} />
      <button onClick={onClickHandler}>Add Record</button>
    </>
  );
};

export default UserEdit;
