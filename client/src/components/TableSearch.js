import React, { useState } from 'react';
import Table from './Table';
import { Users } from '../users';

const TableSearch = () => {
  const [query, setQuery] = useState('');
  //console.log(query);

  const search = (data) => {
    return data.filter(
      (item) =>
        item.first_name.toLowerCase().includes(query) ||
        item.last_name.toLowerCase().includes(query) ||
        item.email.toLowerCase().includes(query)
    );
  };

  return (
    <div className='app'>
      <input
        type='text'
        className='search'
        placeholder='Search...'
        onChange={(e) => setQuery(e.target.value)}
      />
      {/** <Table data={Users} />*/}
      <Table data={search(Users)} />
    </div>
  );
};

export default TableSearch;
