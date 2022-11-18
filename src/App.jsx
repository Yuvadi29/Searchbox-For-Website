import React from 'react';
import './App.css';
import { Data } from './data';
import { useState } from 'react';

const App = () => {
  //UseState for setting the state for the input given
  const [datasearch, setDatasearch] = useState('');

  // This will show the data if the data includes letter je 
  // console.log(Data.filter(data=>data.first_name.toLowerCase().includes("je")));
  return (
    // <>
      <div className="wrap">
        <div className="search">
          {/* Using this we can see that the data we input on the search box is visible accepted in the console as well */}
          <input type="text" className="searchTerm" placeholder="Search.." onChange={e=> setDatasearch(e.target.value)} />
          <ul className="list">
            {Data.filter((data) => (
              data.first_name.toLowerCase().includes(datasearch)
            )).map((data) => (
              <li key={data.id} className="listitem">{data.first_name}</li>
            ))}
          </ul>
        </div>
      </div>
    // </>
  );
}

export default App;