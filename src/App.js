import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card1 from "./FirstComponent.js";
import Card2 from "./SecondComponent.js";
import Card3 from "./ThirdComponent.js";
import Card4 from "./ForthComponent.js";
import SysHeader from "./SysHeader.js";

const firstTitle = document.title;

function App() {

  return (
    <div>
      <SysHeader />
      <div className="form-position">
        <Card1 />
        <Card2 
          firstTitle  = { firstTitle}
        />
        <Card3 />
        <Card4 />
      </div>
    </div>
  );
}

export default App;
