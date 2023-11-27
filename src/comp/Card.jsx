import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";

function Cards({ id, name, dece, status, updateTask }) {
  const [selecte, setselecte] = useState(status);

  const cardChange = (e) => {
    const newStatus = e.target.value;
    setselecte(newStatus);
    updateTask(id, newStatus);
  };

  return (
    <div key={id}>
      <Card
        style={{ width: "14rem", height: "15rem" }}
        className="my-2 shadow-lg p-3 mb-5 bg-white"
      >
        <Card.Body>
          <Row>
            <div className="d-flex justify-content-between">
              <div>
                <Card.Title>{name}</Card.Title>
              </div>
              <div>
                <Card.Title>:</Card.Title>
              </div>
            </div>
          </Row>
          <Card.Text>{dece}</Card.Text>
          <Form.Select
            aria-label="Selected task state"
            onChange={(e) => cardChange(e)}
          >
            <option selected value={status}>
              {status}
            </option>
            <option value="pending">is pending</option>
            <option value="hold">is hold</option>
            <option value="progress">is progress</option>
            <option value="complete">is complete</option>
          </Form.Select>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
