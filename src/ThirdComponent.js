import React, { useState } from 'react'
import { Card, Button, Form } from "react-bootstrap";


export default function ThirdComponent() {
  const [value, setValue] = useState("");

  const [result, setResult] = useState(0);


  const handleChange = e => {
    setValue(e.target.value);
  }


  const handleSubmit = (e) => {
    console.log("submit clicked", e.target);
  }


  return (
    <div>
      <Card className="card-settings">
        <Card.Header>
          <h1>Card3 - Header</h1>
        </Card.Header>
        <Form>
          <Form.Label>Set an initial value</Form.Label>
          <Form.Control 
            type      = "text"
            onChange  = { handleChange}
          />
          <Card className = "card-settings">
            <Form.Label>Set the operator</Form.Label>
            <Form.Check inline label = "+" type = "radio" name = "operator" value = "+" id = "plus"/>
            <Form.Check inline label = "-" type = "radio" name = "operator" value = "-" id = "minus"/>
            <Form.Check inline label = "*" type = "radio" name = "operator" value = "*" id = "times"/>
            <Form.Check inline label = "/" type = "radio" name = "operator" value = "/" id = "divided"/>
          </Card>

          <Form.Label>Set the operand</Form.Label>
          <Form.Control 
            type      = "text"
            onChange  = { handleChange}
          />

          <Card.Footer>
            {
              value
                ? <span style = {{fontWeight: "bold", color: "green"}}>{ result }</span>
                : <br />
            }
          </Card.Footer>

          <Button
            onClick   = { handleSubmit }
          >
            Submit
          </Button>
        </Form>


      </Card>
    </div>
  )
}
