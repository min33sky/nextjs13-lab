import { PrismaClient } from '@prisma/client';
import React from 'react';
import { wait } from '../../../utils/time';
import IssueDetails from './IssueDetails';

export default async function IssueDetailsPage({
  params,
}: {
  params: { issueId: string };
}) {
  const prisma = new PrismaClient();
  const issue = await prisma.issue.findUnique({
    where: {
      id: +params.issueId,
    },
  });

  console.log('issue: ', issue);

  // await wait(3); // Simulate slow network

  if (!issue) {
    throw new Error('Issue not found');
  }

  return <IssueDetails {...issue} />;
}
