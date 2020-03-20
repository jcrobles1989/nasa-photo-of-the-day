import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Copyright from './Components/Copyright';
import Date from './Components/Date';
import Explanation from "./Components/Explanation";
import Image from './Components/Image';
import Title from './Components/Title';

function App() {

  const [nasaData, setNasaData] = useState([]);
  
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=KkdVFsCLaJjjSugXW2VhVY4Quzlm4S7D6YffH2LD').then(response => {
      // console.log(response)
      setNasaData(response.data)
    })
    .catch(error => {
      console.log('the data was not returned', error);
    })
  },[]);

  return (
    <div className="App">
      <Title title={nasaData.title}/>
      <Image src={nasaData.url} alt={nasaData.explanation}/>
      <Explanation explanation={nasaData.explanation}/>
      <Date date={nasaData.date}/>
      <Copyright copyright={nasaData.copyright}/>
    </div>
  );
}

export default App;
