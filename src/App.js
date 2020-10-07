import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import NasaDetail from "./components/NasaDetail"

const myKey = '5WwmxoufDLmWvQcaVXlKGhEoncVjMVLu6iP0ddKn'

function App() {
const [nasaData, setNasaData] = useState({})

useEffect(() => {
  // console.log('fetching')
  const fetchNasaData = () => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${myKey}`)
    .then(res => {
      console.log(res.data)
      setNasaData(res.data)
    })
    .catch(err => {
      debugger
    })
  }

  fetchNasaData()
}, [])

  return (
    <div className="App">
      <NasaDetail url={nasaData.url} title={nasaData.title} explanation={nasaData.explanation} date={nasaData.date} author={nasaData.copyright}/>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
