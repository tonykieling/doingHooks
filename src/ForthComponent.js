import React, { useState } from 'react';
import { Card, Button, ButtonGroup, Form } from "react-bootstrap";


export default function ForthComponent() {
  const [state, setState] = useState({
    message: "this is a message",
    obj     : {
      email : "",
      name  : ""
    },
    counter : 0
  });

  const changeState = (field, value) => {
    setState({ ...state, [field]: value });
  }


  const handleChange = event => {
    const { name, value } = event.target;
    setState({ ...state, obj: {
      ...state.obj,
      [name]: value
    }});
  }


  return (
    <div>
    {console.log("state::: ", state)}
      <Card>

      </Card>

      <Card className="card-settings">
        <Card.Header>
          <h1>Card4 - Header</h1>
        </Card.Header>
        <Card.Body>
          <p>This is message: <strong> { state.message} </strong></p>
          <p>This is counter: <strong> { state.counter} </strong></p>
        </Card.Body>
        <ButtonGroup>
          <Button
            style   = {{ width: "50%"}}
            variant = "success"
            // onClick = { () => setState({ ...state, message: "Got a new message!"}) }
            onClick = { () => changeState("message", "Got a new message!")}
            >
            New Message
          </Button>
          <Button
            style   = {{ width: "50%"}}
            variant = "primary"
            // onClick = { () => setState({ ...state, counter: state.counter + 1}) }
            onClick = { () => changeState("counter", state.counter + 1) }
            >
            Increment counter
          </Button>
        </ButtonGroup>

        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type        = "text"
            placeholder = "Type the name"
            name        = "name"
            onChange    = {e => handleChange(e)}
            value       = {state.name}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type        = "email"
            placeholder = "Type the email"
            name        = "email"
            onChange    = {e => handleChange(e)}
            // onChange    = { event => setState({ ...state, obj: {email: event.target.value}})}
            value       = {state.email}
          />
        </Form.Group>

      </Card>

    </div>
  )
}
