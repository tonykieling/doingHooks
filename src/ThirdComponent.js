import React, { useState, useEffect, useRef } from 'react'
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
  const iValueRef = useRef(null);

  const [operand, setOperand] = useState("");
  const operandRef = useRef(null);
  const [colorOperator, setColorOperator] = useState("");

  const [operator, setOperator] = useState("");
  const operatorRef = useRef(null);

  const [result, setResult] = useState(0);

  const btnRef  = useRef(null);


  const add = (x , y)   => (x + y) % 1 === 0 ? ( x + y) : (x + y).toFixed(2);
  const sub = (x , y)   => (x + y) % 1 === 0 ? ( x - y) : (x - y).toFixed(2);
  const mult = (x , y)  => (x + y) % 1 === 0 ? ( x * y) : (x * y).toFixed(2);
  const div = (x , y)   => (x + y) % 1 === 0 ? ( x / y) : (x / y).toFixed(2);

  const [color, setColor] = useState("");
  
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
    } else if (e.target.name === "iValue") {
      if (!!Number(e.target.value))
        setIValue(e.target.value);
      else if (e.target.value === "")
        setIValue("");
    }
    else if (e.target.name === "operand")
      if (!!Number(e.target.value))
        setOperand(e.target.value);
      else if (e.target.value === "")
        setOperand("");        
  }

  const clearMessage = () => {
    setTimeout(() => {
      setResult("");
      setColor("");
      setColorOperator("");
    }, 1500);
  }

  const notFilled = message => {
    setColor("red");
    setResult(message);
    clearMessage();
  }

  const handleSubmit = () => {
    // tryed to use window[operator], but it did not work, so need to check and perform for each one
    // window[x]();
    if (!iValue) {
      iValueRef.current.focus();
      notFilled("Please, set an initial value");
      return;
    } else if (!operator) {
      operatorRef.current.focus();
      setColorOperator("red");
      notFilled("Need to Set operator");
      return;
    } else if (!operand) {
      operandRef.current.focus();
      notFilled("Please fill operand");
      return;
    }

    if (operator === "add")
      setResult(result ? add(Number(result), Number(operand)) : add(Number(iValue), Number(operand)) );
    else if (operator === "sub")
      setResult(result ? sub(Number(result), Number(operand)) : sub(Number(iValue), Number(operand)) );
    else if (operator === "mult")
      setResult(result ? mult(Number(result), Number(operand)) : mult(Number(iValue), Number(operand)) );
    else if (operator === "div")
      setResult(result ? div(Number(result), Number(operand)) : div(Number(iValue), Number(operand)) );
  }

  const handleEnter = e => {
    if (e.target.name === "iValue" || e.target.name === "operand")
      if (e.key === "Enter")
        btnRef.current.click();
  }

  useEffect(() => {
    // console.log("this message will run olny once");
    // console.log("add:", add(1, 2));

    // function add(x , y) {
    //   console.log("inside add!!!");
    //   return x + y;
    // }

    // window.addEventListener("sum", add);

    // return () => window.removeEventListener("sum", add);
      
    // const sub = (x , y) => x - y;
    // const mult = (x , y) => x * y;
    // const div = (x , y) => x / y;

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
        {/* <Form> */}
          <Form.Label>Set an initial value</Form.Label>
          <Form.Control 
            autoComplete  = { "off"}
            type          = "text"
            name          = "iValue"
            onChange      = { handleChange}
            value         = { iValue}
            ref           = { iValueRef}
            onKeyPress    = { handleEnter}
          />
          <Card className = "card-settings">
            <Form.Label
              style = {colorOperator ? {color: colorOperator, fontWeight: "bold"} : {color: "black"}}
            >Set the operator</Form.Label>
            <Form.Check inline label = "+" type = "radio" name = "operator" value = "add" id = "plus" 
              onChange  = { handleChange }
              ref       = { operatorRef}
            />
            <Form.Check inline label = "-" type = "radio" name = "operator" value = "sub" id = "minus" onChange = { handleChange }/>
            <Form.Check inline label = "*" type = "radio" name = "operator" value = "mult" id = "times" onChange = { handleChange }/>
            <Form.Check inline label = "/" type = "radio" name = "operator" value = "div" id = "divided" onChange = { handleChange }/>
          </Card>

          <Form.Label>Set the operand</Form.Label>
          <Form.Control
            autoComplete  = { "off"}
            type          = "text"
            name          = "operand"
            onChange      = { handleChange}
            ref           = { operandRef}
            value         = { operand}
            onKeyPress    = { handleEnter}
          />

          <Card.Footer style={{margin: "1rem 0 1rem 0"}}>
            {
              result
                ? <p style = {{fontWeight: "bold", color: color || "green", textAlign: "center", marginBottom: 0}}>{ result }</p>
                : <br />
            }
          </Card.Footer>

          <Button
            onClick   = { handleSubmit }
            // className = { "btn-block"}
            // style     = {{ width: "100%"}}
            ref       = { btnRef}
            >
            Submit
          </Button>
        {/* </Form> */}


      </Card>
    </div>
  )
}
