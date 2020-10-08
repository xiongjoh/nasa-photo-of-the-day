import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import NasaDetail from "./components/NasaDetail"
import NasaHeader from "./components/NasaHeader"
import NasaFooter from "./components/NasaFooter"
import DatePicker from 'react-datepicker'
import months from './pageObjects/months'

const myKey = '5WwmxoufDLmWvQcaVXlKGhEoncVjMVLu6iP0ddKn'
const demoKey = 'DEMO_KEY'
const apodAPI = 'https://api.nasa.gov/planetary/apod?api_key='

function App() {

const [nasaData, setNasaData] = useState({})
const [date, setDate] = useState(new Date())
const [selectedDate, setSelectedDate] = useState('')

const changeDate = () => {
  let theDate = String(date).split(' ').slice(1,4).reverse()
  theDate[2] = months[theDate[2].toLowerCase()]
  theDate = [theDate[0],theDate[2],theDate[1]]
  console.log('You selected the date ' + theDate.join('-'))
  setSelectedDate(theDate.join('-'))

}

useEffect(() => {

  const fetchNasaData = () => {
    axios.get(`${apodAPI}${myKey}&date=${selectedDate}`)
    .then(res => {
      setNasaData(res.data)
      console.log(res.data)
    })
    .catch(err => {
      console.log('unable to show future dates')
      axios.get(`${apodAPI}${myKey}`)
      .then(res => {
        setNasaData(res.data)
        console.log(res.data)
      })
      .catch(err => {
        debugger
      })
      debugger
    })
  }

  fetchNasaData()
}, [selectedDate])

// const MyContainer = ({ className, children}) => {
//   return (
//     <div style={{ padding: '16px', background: '#216ba5', color:'#fff'}}>
//       <CalendarContainer className={className}>
//         <div style={{background:'#f0f0f0'}}>
//           What is your favorite day?
//         </div>
//         <div style={{ position: 'relative'}}>{children}</div>
//       </CalendarContainer>
//     </div>
//   )
// }

  return (
    
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <div>{'Select Your Date '}
        <DatePicker selected={date} onChange={d => setDate(d)}/>
        <button onClick={() => changeDate()}>Enter</button>
      </div>
      
      <NasaHeader></NasaHeader>
      <NasaDetail url={nasaData.url} title={nasaData.title} explanation={nasaData.explanation} date={nasaData.date} author={nasaData.copyright}/>
      <NasaFooter hdURL={nasaData.hdurl}/>
    </div>
  );
}

export default App;
