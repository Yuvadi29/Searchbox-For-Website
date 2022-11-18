import React from 'react';
import './App.css';
import { Data } from './data';
import { useState } from 'react';
import Display from './Display';

const App = () => {
  //UseState for setting the state for the input given
  const [datasearch, setDatasearch] = useState('');

  const keys = ["first_name", "last_name", "email", "company_name", "phone1", "phone2"];

  // Function to search and filter data with the parameter of the input given
  const search = (data) => {
    return data.filter(data=>
      // data.first_name.toLowerCase().includes(datasearch) || 
      // data.last_name.toLowerCase().includes(datasearch) || 
      // data.email.toLowerCase().includes(datasearch) || 
      // data.company_name.toLowerCase().includes(datasearch) ||
      // data.phone1.toLowerCase().includes(datasearch) ||
      // data.phone2.toLowerCase().includes(datasearch)
    
      keys.some(key => data[key].toLowerCase().includes(datasearch))
      );
  }

  // This will show the data if the data includes letter je 
  // console.log(Data.filter(data=>data.first_name.toLowerCase().includes("je")));
  return (
    <div className="app">
          {/* Using this we can see that the data we input on the search box is visible accepted in the console as well */}
          <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setDatasearch(e.target.value.toLowerCase())}
      />
          <Display data={search(Data)}/>
          </div>
  );
}

export default App;