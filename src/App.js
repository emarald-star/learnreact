import './App.css';
import Form from "./Form";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <br />
        <br />
        <div className='container'>
          
          <Form />
        </div>
      </header>
      <footer>
        <div className='footer'>
          This project is created by <strong>Ranjana Joshi</strong> and is <a href='https://github.com/emarald-star/learnreact.git' target="_blank" rel='noopener noreferrer'>open-sourced on Github</a> and <a href='https://velvety-griffin-5c8e51.netlify.app/'>hosted on Netlify</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
