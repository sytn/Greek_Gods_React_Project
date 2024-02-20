// App.js
import './App.css';
import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import SearchBar from './components/Searchbar'; // Ensure the correct casing here


function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(process.env.PUBLIC_URL + '/data/data.json');
      const jsonData = await response.json();
      setData(jsonData);
      setFilteredData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Handle search functionality
  const handleSearch = (searchTerm) => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <Fragment>
      <Header />
      <SearchBar handleSearch={handleSearch} />
      {filteredData.map((god) => (
        <div key={god.id}>
          <h2>{god.name}</h2>
          <p>{god.description}</p>
        </div>
      ))}
    </Fragment>
  );
}

export default App;
