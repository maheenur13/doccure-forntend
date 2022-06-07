import React from "react";
import { Col, Form, Row } from "react-bootstrap";

const AddDoctor = () => {
  return (
    <div className="my-3">
      <h5 className="mb-3">Add Doctor</h5>
      <Form>
        <Row>
          <Col md={4}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Doctor Name</Form.Label>
              <Form.Control
                type="text"
                name="doctorName"
                placeholder="Doctor Name"
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default AddDoctor;
