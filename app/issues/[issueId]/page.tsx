import React, { Suspense } from 'react';
import { wait } from '../../../utils/time';
import IssueDetails from './IssueDetails';
import { prisma } from '../../../lib/db';
import IssueLoading from './loading';

export default async function IssueDetailsPage({
  params,
}: {
  params: { issueId: string };
}) {
  console.log('Params: ', params);
  try {
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

    console.log('시ㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣ발');

    return (
      <Suspense fallback={<IssueLoading />}>
        <IssueDetails {...issue} />
      </Suspense>
    );
  } catch (error) {
    console.log('에러 시ㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣ발: ', error);
  }
}
