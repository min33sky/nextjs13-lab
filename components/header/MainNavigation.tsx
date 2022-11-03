import Link from 'next/link';
import React from 'react';

export default function MainNavigation() {
  return (
    <nav className="w-full max-w-2xl mx-auto px-4 py-6 text-lg">
      <ul className="flex justify-between">
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'/issues'}>Issues</Link>
        </li>
      </ul>
    </nav>
  );
}
