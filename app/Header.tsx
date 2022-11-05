import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="py-8 max-w-3xl w-full mx-auto px-4 sm:px-0">
      <Link
        href={'/'}
        className="px-2 py-1 bg-slate-200 rounded-lg text-slate-800 font-bold"
      >
        Next13 Header
      </Link>
    </header>
  );
}
