import React, { useState, useEffect, useRef } from 'react'
import { Card, Button, Form } from "react-bootstrap";


export default function SecondComponent(props) {
  const [counter2, setCounter2] = useState("");

  useEffect(() => {
    // console.log("useEffect", counter2);
    if (field)
      document.title = field;
    else document.title = props.firstTitle;
  });


  const [field, setField] = useState("");
  const fiedlRef = useRef(null);

  const clickFunc2 = () => {
    if (counter2 !== "")
      setCounter2(counter2 - 3);
    else{
      if (field)
        setCounter2(field - 3);
      else {
        setCounter2(<span style={{color: "green", fontWeight:"bolder"}}>need to specify above</span>);
        setTimeout(() => {
          setCounter2("");
          fiedlRef.current.focus();
        }, 1500);
      }
    }
  }


  const handleChange = event => {
    if (!!Number(event.target.value))
      setField(event.target.value);
    else if (event.target.value === "")
      setField("");
  }


  const updateValue = event => {
    if (event.key === "Enter") {
      setCounter2(event.target.value);
    }
  }


  return (
    <div>
      <Card className="card-settings">
        <Card.Header>
          <h1>Card2 - Header</h1>
        </Card.Header>
        <Card.Body>
          <Form.Label> Set a value to decrease</Form.Label>
          <Form.Control
            type          = "text"
            placeholder   = "Type a initial value"
            name          = "counter2"
            onChange      = { handleChange }
            onKeyPress    = { updateValue }
            value         = { field }
            ref           = { fiedlRef }
          />
          <br />
          <Form.Label>
            Counting: { (counter2 >= 0 
                ? <span style={{color: "blue", fontWeight: "bold"}}>{counter2}</span> 
                : <span style={{color: "red" , fontWeight: "bold"}}>{counter2}</span>  )
              || "<no value at all>" }
          </Form.Label>
        </Card.Body>
        <Button
          onClick = { clickFunc2 }
        >
          Decrease 3
        </Button>
      </Card>
    </div>
  )
}
