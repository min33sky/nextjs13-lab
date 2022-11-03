import { PrismaClient } from '@prisma/client';
import React from 'react';
import IssuesList from './IssuesList';
import { prisma } from '../../lib/db';

interface Props {
  children: React.ReactNode;
}

export default async function IssuesLayout({ children }: Props) {
  const issues = await prisma.issue.findMany();

  return (
    <div className="flex flex-col h-screen">
      <div className="grid grid-cols-[25%,75%] h-full ">
        <aside className="bg-slate-700 px-8 flex-1">
          <IssuesList issues={issues} />
        </aside>
        {children}
      </div>
    </div>
  );
}
