import React from 'react';

export default function NotFound() {
  return (
    <div className="grid gap-6 place-items-center place-content-center h-screen">
      <span className="animate-bounce text-5xl font-bold text-rose-300">
        Whoops!!
      </span>{' '}
      we could not find the TODO you are looking for
    </div>
  );
}
