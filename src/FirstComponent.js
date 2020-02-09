import React, { useState } from 'react';
import { Card, Button } from "react-bootstrap";

export default function FirstComponent() {
  const [counter, setCounter] = useState(0);

  const clickFunc = () => {
    // console.log("counter1 before:");
    setCounter(counter + 1);
    // setTimeout(() => {
    //   console.log("counter1 after +1s:", counter1);
    // }, 1000);
    //*** it seems at the end of the function the setCounter is gonna perform, even though set a time, the value is the old one
  }

  return (
    <div >
      <Card className="card-settings">
        <Card.Header>
          <h1>Card1 - Header</h1>
        </Card.Header>
        <Card.Body>
          Counting: { counter }
        </Card.Body>
        <Button
          // onClick = { () => setCounter(counter + 1)}
          onClick = { clickFunc }
        >
          Increase 1
        </Button>
      </Card>
      
    </div>
  )
}
