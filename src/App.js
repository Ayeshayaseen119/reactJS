import './App.css';
import React, { useState } from 'react'
import About from './customComponents/About';
import NavBar from './customComponents/NavBar';
// import Sample from './customComponents/Sample';
import TextForm from './customComponents/TextForm';
import Alert from './customComponents/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [textColor, setTextColor] = useState('black')
  const [btnText, setBtnText] = useState('Enable Dark Mode')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>
  {
    setAlert({
      message: message,
      type: type
    })

    setTimeout(()=>
    {
        setAlert(null)
    },1500)
  }

  const [myStyle, setMyStyle] = useState({
      color: 'black',
      backgroundColor: 'white'
  })
  

  const toggleMode = () =>
  {
    if(mode === "light")
    {
      setMode('dark')
      setTextColor('white')
      document.body.style.backgroundColor = '#2f3a60';
      setBtnText('Enable light Mode')
      showAlert(": Dark mode has been enabled" , "success")
      document.title = "TextUtils - DarkMode"
    }
    else
    {
      setMode('light')
      setTextColor('black')
      document.body.style.backgroundColor = 'white';
      setBtnText('Enable Dark Mode')
      showAlert(": Light mode has been enabled" , "success")
      document.title = "TextUtils - LightMode"

    }

    if(myStyle.color === "black")
      {
          setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
          })
          setBtnText("Enable Light Mode")
      }
      else
      {
          setMyStyle({
                color: 'black',
              backgroundColor: 'white',
                border: '1px solid black'
          })
          document.body.style.backgroundColor = 'white';
          setBtnText("Enable Dark Mode")
      }

  }
  return (
    <>

      <Router>
        <NavBar mode={mode} toggleMode={toggleMode} textColor={textColor} btnText={btnText} />
        <div className='container'>
          <Routes>
            <Route exact path="/About" element={<About myStyle={myStyle} />} />
            <Route exact path="/TextForm" element={<TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode} />} />
          </Routes>
        </div>
      </Router>
      
      {/* <Sample fname = "Ayesha" lname = "Yaseen" /> */}
      </>
    );
}

export default App;
