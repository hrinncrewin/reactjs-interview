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
interface IProps {
  user: IUser;
  addUser: () => void;
}
const UserAdd = (props: IProps) => {
  const { user } = props;
};

export default UserAdd;
