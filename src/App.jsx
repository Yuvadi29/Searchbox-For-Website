import React, { useState, useEffect } from 'react';
// import { Data } from './data';
import './App.css';
import Display from './Display';
import axios from 'axios';

const App = () => {
  //UseState for setting the state for the input given
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // const result = await axios.get("http://localhost:2000");
      const result = await axios.get(`http://localhost:5000?q=${query}`);
      setData(result.data);
    };
    if (query.length === 0 || query.length > 2) fetchData();
  }, [query]);

  // const keys = ["first_name", "last_name", "email", "company_name", "phone1", "phone2"];

  // Function to search and filter data with the parameter of the input given
  // const search = (data) => {
  //   return data.filter(data=>
  //     // data.first_name.toLowerCase().includes(datasearch) || 
  //     // data.last_name.toLowerCase().includes(datasearch) || 
  //     // data.email.toLowerCase().includes(datasearch) || 
  //     // data.company_name.toLowerCase().includes(datasearch) ||
  //     // data.phone1.toLowerCase().includes(datasearch) ||
  //     // data.phone2.toLowerCase().includes(datasearch)

  //     keys.some(key => data[key].toLowerCase().includes(datasearch))
  //     );
  // }

  // This will show the data if the data includes letter je 
  // console.log(Data.filter(data=>data.first_name.toLowerCase().includes("je")));
  return (
    <div className="app">
      {/* Using this we can see that the data we input on the search box is visible accepted in the console as well */}
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      {<Display data={data} />}
    </div>
  );
}

export default App;