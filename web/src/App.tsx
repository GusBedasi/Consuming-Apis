import React, { useState, useEffect } from 'react';

const App = () => {

  const initialValues =   {
    "id": 0,
    "name": "",
    "username": "",
    "email": "",
    "address": {
      "street": "",
      "suite": "",
      "city": "",
      "zipcode": "",
      "geo": {
        "lat": "",
        "lng": ""
      }
    }
  }

  const [name, setName] = useState([initialValues]);

  const getNames = async () => {
    try {
      const response = await fetch('http://localhost:3333')
      const data = await response.json()
      setName(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getNames()
  }, [])

  return (
    <div className="App">
          {name.map((name) => {
            return (
              <li key={`${name.id}`}>
                {name.name}
              </li>
            );
          })}
    </div>
  );
}

export default App;
