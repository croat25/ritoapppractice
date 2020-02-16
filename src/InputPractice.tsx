import React, {useState, useEffect } from 'react';
import './App.css';

const InputPractice = () => {
    const [greeting, setGreeting] = useState(
        'Hello Function Component!'
      );
    const [emptyData, setData] = useState([]);

      useEffect(() => {
          fetch('https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/call%20me%20deuce?api_key=RGAPI-d4b0fd4d-1c9c-47b9-b523-f148648be2ee',
            {
              method: "GET",
              
            }
          )
          .then(res => res.json())
          .then( data => {
              setData(data);
          })
          .catch( error => console.log(error));
      });

    //   const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => setGreeting(event.target.value);
    return (
        <div>
      {/* <h1>{greeting}</h1>
      <input
        type="text"
        value={greeting}
        onChange={handleChange}
      /> */}
            <div>{setData}</div>
    </div>
    )
}

export default InputPractice