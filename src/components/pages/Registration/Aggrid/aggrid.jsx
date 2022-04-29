import React, { Component, useEffect, useState } from "react";
import {
  Deleteprofile,
  editProfile,
  editUser,
  fetchProfiles,
  fetchUser,
} from "../../../../redux/users/action";
import { Grid } from "../../../common";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import FormDialog from "./dialog";
export default function Agcrud() {
  const initialValue = { name: "", mobile: "", city: "" };

  const [rowdata, setRowdata] = useState([]);
  const [formData, setFormData] = useState(initialValue);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormData(initialValue);
  };

  const columnDefs = [
    { headerName: "Name", field: "name" },
    { headerName: "mobile", field: "mobile" },
    { headerName: "city", field: "city" },
    {
      headerName: "Actions",
      field: "id",
      cellRendererFramework: (params) => (
        <div>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => handleUpdate(params.data)}
          >
            Update
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => handleDelete(params.data._id)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];
 


  
  const onChange = (e) => {
    const { value, id } = e.target;
    // console.log(value,id)
    setFormData({ ...formData, [id]: value });
  };
 // console.log(formData);
 // console.log(rowdata);

  const handleUpdate = (oldData) => {
    setFormData(oldData);
   // console.log(oldData);
    handleClickOpen();
  };

  const handleDelete = (id) => {
    dispatch(Deleteprofile(id));
    dispatch(fetchProfiles()).then((res) => {
      setRowdata(res.payload);
    });
  };

  const handleFormSubmit = () => {
    dispatch(editProfile(formData._id, formData));
   // console.log(formData);
    dispatch(fetchProfiles()).then((res) => {
      setRowdata(res.payload);
      handleClose();
    });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfiles()).then((res) => {
      setRowdata(res.payload);
      //console.log(res.payload)
    });
  }, []);
 // console.log(rowdata);
  return (
    <div>
      <Grid data={rowdata} header={columnDefs} sorting />
      <FormDialog
        open={open}
        handleClose={handleClose}
        data={formData}
        onChange={onChange}
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  );
}
