import React from 'react';

function Filter({ filter, setFilter }) {
  return (
    <div>
      <button onClick={() => setFilter('all')} disabled={filter === 'all'}>
        Все
      </button>
      <button onClick={() => setFilter('completed')} disabled={filter === 'completed'}>
        Выполненные
      </button>
      <button onClick={() => setFilter('incomplete')} disabled={filter === 'incomplete'}>
        Невыполненные
      </button>
    </div>
  );
}

export default Filter;
