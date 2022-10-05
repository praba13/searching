import React, { useState } from 'react';
import { Users } from '../users';

const BasicSearch = () => {
  const [query, setQuery] = useState('');
  //console.log(query);
  //console.log(Users.filter((user) => user.first_name.includes('err')));
  // console.log(Users.filter((user) => user.first_name.toLowerCase().includes('Felix')));
  return (
    <div className='app'>
      <h1>Basic Search</h1>
      <input
        type='text'
        placeholder='Search...'
        className='search'
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className='list'>
        {Users.filter((user) =>
          user.first_name.toLowerCase().includes(query)
        ).map((user) => (
          <li key={user.id} className='listItem'>
            {user.first_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BasicSearch;
