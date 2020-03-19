import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Copyright from './Components/Copyright';

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
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Copyright copyright={nasaData.copyright}/>
    </div>
  );
}

export default App;
