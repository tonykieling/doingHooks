import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Card, Button, Form } from "react-bootstrap";

const firstTitle = document.title;

function App() {
  const [counter1, setCounter1] = useState(0);

  const [counter2, setCounter2] = useState("")
  useEffect(() => {
    console.log("useEffect", counter2);
    if (field)
      document.title = field;
    else document.title = firstTitle;
  });


  const [field, setField] = useState("");
  const fiedlRef = useRef(null);

  const clickFunc1 = () => {
    // console.log("counter1 before:", counter1);
    setCounter1(counter1 + 1);
    // setTimeout(() => {
    //   console.log("counter1 after +1s:", counter1);
    // }, 1000);
    //*** it seems at the end of the function the setCounter is gonna perform, even though set a time, the value is the old one
  }

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
  );
}

export default App;
