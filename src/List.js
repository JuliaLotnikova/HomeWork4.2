import React from 'react';
import './List.css';

function List() {
  return (
    <div className="list-container">
      <h2>Список дел:</h2>
      <ul className="custom-list">
        <li>Понедельник</li>
        <li>Вторник</li>
        <li>Среда</li>
        <li>Четверг</li>
        <li>Пятница</li>
      </ul>
    </div>
  );
}

export default List;
