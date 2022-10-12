import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './Table';

const SearchFromApi = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get('http://localhost:6532');
      console.log(res.data);
      setData(res.data);
    };
    fetchUsers();
  }, []);

  return (
    <div className='app'>
      <input
        className='search'
        placeholder='Search...'
        onChange={(e) => setQuery(e.target.value)}
      />
      {<Table data={data} />}
    </div>
  );
};

export default SearchFromApi;
