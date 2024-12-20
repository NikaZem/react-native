import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return; // Не добавляем пустую задачу
    addTodo(title);
    setTitle(''); // Очищаем поле ввода после добавления
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Введите название задачи"
      />
      <button type="submit">Добавить задачу</button>
    </form>
  );
}

export default TodoForm;
