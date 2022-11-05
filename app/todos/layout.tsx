import React from 'react';
import TodoList from './TodoList';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="flex gap-x-2">
      <aside className="w-52 py-4">
        {/* @ts-ignore */}
        <TodoList />
      </aside>
      <div className="flex-1">{children}</div>
    </div>
  );
}
