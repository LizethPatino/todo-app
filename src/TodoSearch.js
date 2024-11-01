import React, { useState } from 'react';

function TodoSearch({listTasks, onSearchResults}) {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

  const filteredTasks =  listTasks.filter(task => task.nameTask.toLowerCase().includes(value.toLowerCase()));
  onSearchResults(filteredTasks);
  }

    return (
      <>
        <input type="text" value={searchTerm} placeholder='Search' onChange={handleSearch}/>
      </>
    );
  }  

export default TodoSearch;