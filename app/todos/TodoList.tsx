import Link from 'next/link';
import React from 'react';
import { Todo } from '../../types/typing';

const fetchTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos: Todo[] = await res.json();

  return todos;
};

export default async function TodoList() {
  const todos = await fetchTodos();
  return (
    <>
      {todos.map((todo) => (
        <Link
          href={`/todos/${todo.id}`}
          key={todo.id}
          className="block text-red-100 mb-4"
        >
          <h1>{todo.title}</h1>
        </Link>
      ))}
    </>
  );
}
