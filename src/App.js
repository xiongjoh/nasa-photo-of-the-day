import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import NasaDetail from "./components/NasaDetail"

const myKey = '5WwmxoufDLmWvQcaVXlKGhEoncVjMVLu6iP0ddKn'
const demoKey = 'DEMO_KEY'

function App() {

const [nasaData, setNasaData] = useState({})
const [date, setDate] = useState(null)

const selectDate = () => {
  
}

useEffect(() => {

  const fetchNasaData = () => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${myKey}`)
    .then(res => {
      setNasaData(res.data)
      console.log(res.data)
    })
    .catch(err => {
      debugger
    })
  }

  fetchNasaData()
}, [])

useEffect(() => {}, [date])

  return (
    
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <NasaDetail url={nasaData.url} title={nasaData.title} explanation={nasaData.explanation} date={nasaData.date} author={nasaData.copyright}/>
    </div>
  );
}

export default App;
