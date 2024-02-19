import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from 'react'
import Alert from './components/Alert';
// import About from './components/About';

// import {
//   BrowserRouter as Router,
//   Route,
//   Routes // Import Routes instead of Switch
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'Text-Based Utility- Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'Text-Based Utility- Light Mode';
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="Text-Based Utility" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} showAlert={showAlert} />
        <div className="container my-3">
          {/* <Routes> Use Routes instead of Switch */}
            {/* /<Route exact path="/about" element={<About />} />      */}
            {/* <Route exact path="/" element={ */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
            {/* } /> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}

      //h2
    </>
  );
}

export default App;





// /users --> Component1  and /users/home -->Component2