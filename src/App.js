// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import Footer from './components/Footer';
import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter The Text To Analyze Below" />} />
            <Route exact path="/about" element={<About/>} />
          </Routes>
        </div>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
