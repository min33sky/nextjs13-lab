import React from 'react';
import { Todo } from '../../../types/typing';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    id: string;
  };
}

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    {
      next: {
        revalidate: 60,
      },
    },
  );
  return await res.json();
};

export default async function TodoPage({ params: { id } }: Props) {
  const todo: Todo = await fetchTodo(id);

  if (!todo.id) return notFound();

  return (
    <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg text-slate-800">
      <p>
        #{todo.id} : {todo.title}
      </p>
      <p>Complelted: {todo.completed ? 'Yes' : 'No'}</p>
      <p className="border-t border-black mt-5 text-right">
        By User: {todo.userId}
      </p>
    </div>
  );
}

export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos: Todo[] = await res.json();

  return todos.splice(0, 10).map((todo) => ({
    id: todo.id.toString(),
  }));
}
