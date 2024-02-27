import axios from 'axios';
import React, { useState, ChangeEvent, KeyboardEvent } from 'react';

interface WeatherData {
  // Define the structure of the weather data here
}

function Form() {
  const [data, setData] = useState<WeatherData | {}>({});
  const [location, setLocation] = useState<string>('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=5cba9041b30635d6f8bd2e202330cec2`;

  const searchLocation = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      axios.get(url).then((resp) => {
        setData(resp.data);
      });
      setLocation('');
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
    </div>
  );
}

export default Form;
