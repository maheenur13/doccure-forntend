import React from "react";
import { Container } from "react-bootstrap";
import { Route } from "react-router-dom";
import AddDoctor from "./AddDoctor";
import DoctorList from "./DoctorList";

const AdminView = () => {
  return (
    <>
      <Route exact path="/admin">
        <AddDoctor />
      </Route>
      <Route path="/admin/add-doctor">
        <AddDoctor />
      </Route>
      <Route path="/admin/doctor-list">
        <DoctorList />
      </Route>
    </>
  );
};

export default AdminView;
