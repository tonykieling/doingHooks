import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card1 from "./FirstComponent.js";
import Card2 from "./SecondComponent.js";
import Card3 from "./ThirdComponent.js";

const firstTitle = document.title;

function App() {

  return (
    <div className="form-position">
      <Card1 />
      <Card2 
        firstTitle  = { firstTitle}
      />
      <Card3 />
    </div>
  );
}

export default App;
