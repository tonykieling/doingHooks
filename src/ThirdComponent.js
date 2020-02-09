import React, { useState, useEffect } from 'react'
import { Card, Button, Form } from "react-bootstrap";


// function add(x , y) {
//   console.log("inside add func");
//   // return x + y
// };
// const sub = (x , y) => x - y;
// const mult = (x , y) => x * y;
// const div = (x , y) => x / y;


export default function ThirdComponent() {
  const [iValue, setIValue] = useState("");
  const [operand, setOperand] = useState("");

  const [result, setResult] = useState(0);

  const [operator, setOperator] = useState("");

  const add = (x , y) => x + y;
  const sub = (x , y) => x - y;
  const mult = (x , y) => x * y;
  const div = (x , y) => x / y;
  


  const handleChange = e => {
    if (e.target.name === "operator") {
      switch (e.target.value){
        case "add":
          setOperator("add");
          break;
        case "sub":
          setOperator("sub");
          break;
        case "mult":
          setOperator("mult");
          break;
        case "div":
          setOperator("div");
          break;
        default:
      }
    } else if (e.target.name === "iValue")
      setIValue(e.target.value);
    else if (e.target.name === "operand")
      setOperand(e.target.value);
  }


  const handleSubmit = () => {
    // tryed to use window[operator], but it did not work, so need to check and perform for each one
    // window[x]();
    if (operator === "add")
      setResult(result ? add(Number(result), Number(operand)) : add(Number(iValue), Number(operand)) );
    else if (operator === "sub")
      setResult(result ? sub(Number(result), Number(operand)) : sub(Number(iValue), Number(operand)) );
    else if (operator === "mult")
      setResult(result ? mult(Number(result), Number(operand)) : mult(Number(iValue), Number(operand)) );
    else if (operator === "div")
      setResult(result ? div(Number(result), Number(operand)) : div(Number(iValue), Number(operand)) );

  }

  useEffect(() => {
    console.log("this message will run olny once");
    console.log("add:", add(1, 2));
  }, []);
  // useEffect(first callbacl, empty array means it will run only once)
  /**
   * If passing a second argument (array), React will run the callback after the first render and every time one of the elements in the array is changed. for example when placing useEffect(() => console.log('hello'), [someVar, someOtherVar]) - the callback will run after the first render and after any render that one of someVar or someOtherVar are changed.

    * By passing the second argument an empty array, React will compare after each render the array and will see nothing was changed, thus calling the callback only after the first render.
    * https://stackoverflow.com/questions/53120972/how-to-call-loading-function-with-react-useeffect-only-once
   */
  

  return (
    <div>
      <Card className="card-settings">
        <Card.Header>
          <h1>Card3 - Header</h1>
        </Card.Header>
        <Form>
          <Form.Label>Set an initial value</Form.Label>
          <Form.Control 
            type        = "text"
            name        = "iValue"
            onChange    = { handleChange}
          />
          <Card className = "card-settings">
            <Form.Label>Set the operator</Form.Label>
            <Form.Check inline label = "+" type = "radio" name = "operator" value = "add" id = "plus" onChange = { handleChange }/>
            <Form.Check inline label = "-" type = "radio" name = "operator" value = "sub" id = "minus" onChange = { handleChange }/>
            <Form.Check inline label = "*" type = "radio" name = "operator" value = "mult" id = "times" onChange = { handleChange }/>
            <Form.Check inline label = "/" type = "radio" name = "operator" value = "div" id = "divided" onChange = { handleChange }/>
          </Card>

          <Form.Label>Set the operand</Form.Label>
          <Form.Control 
            type        = "text"
            name        = "operand"
            onChange    = { handleChange}
          />

          <Card.Footer>
            {
              result
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
