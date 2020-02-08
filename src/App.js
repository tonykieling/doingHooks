import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import { Card, Button, Form } from "react-bootstrap";

function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState("")

  // const [field1, setField1] = useState("");

  const clickFunc1 = () => {
    // console.log("counter1 before:", counter1);
    setCounter1(counter1 + 1);
    // setTimeout(() => {
    //   console.log("counter1 after +1s:", counter1);
    // }, 1000);
    //*** it seems at the end of the function the setCounter is goinna perform, even though set a time, the value is the old one
  }

  const clickFunc2 = () => {
    setCounter2(counter2 - 3);
  }

  const handleFocus = () => {

  }

  const handleChange = event => {
    console.log("inside handleChange", !!Number(event.target.value));
    if (!Number(event.target.value))
      setCounter2(event.target.value);
      // [event.target.value] = ""
  }

  const updateValue = event => {
    console.log("*inside updateValue", counter2);
    console.log("*event", event.target.name, event.target.value);
    if (event.key === "Enter") {
      setCounter2(event.target.value);
     console.log("Enter!!") ;
    }
    if (Number(event.target.value))
      console.log(event.target.value, "is a number")
    else
      console.log(event.target.value, "is NOT a number");
  }

  return (
    <div className="form-position">
      <Card className="card-settings">
        <Card.Header>
          <h1>Card1 - Header</h1>
        </Card.Header>
        <Card.Body>
          Counting: { counter1 }
        </Card.Body>
        <Button
          // onClick = { () => setCounter1(counter1 + 1)}
          onClick = { clickFunc1 }
        >
          Increase 1
        </Button>
      </Card>

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
            onFocus       = { handleFocus }
            onChange      = { handleChange}
            value         = { counter2 }
            // onKeyPress    = { updateValue }
            onKeyUp       = { updateValue}
          />
          <br />
          <Form.Label>
            Counting: { counter2 || "<no value at all>" }
          </Form.Label>
        </Card.Body>
        <Button
          onClick = { clickFunc2 }
        >
          Decrease 3
        </Button>
      </Card>      
    </div>
  );
}

export default App;
