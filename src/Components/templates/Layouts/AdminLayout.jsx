import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import AdminHeader from "../../organisms/AdminPanel/AdminHeader";
import SideBar from "../../organisms/AdminPanel/SideBar";

const AdminLayout = ({ children }) => {
  return (
    <Wrapper>
      <AdminHeader />
      <Row className="h-100 w-100 ">
        <Col md={2}>
          <SideBar />
        </Col>
        <Col md={10}>{children}</Col>
      </Row>
    </Wrapper>
  );
};

export default AdminLayout;

const Wrapper = styled.div`
  height: calc(100vh - 55px);
`;
