import { Issue } from '@prisma/client';
import Link from 'next/link';

interface Props {
  issues: Issue[];
}

export default function IssuesList({ issues }: Props) {
  return (
    <ul className="space-y-6 text-center">
      {issues.map((issue) => (
        <li key={issue.id}>
          <article className="flex flex-col space-y-3 bg-slate-600">
            <h2>{issue.title}</h2>
            <p>{issue.summary}</p>
            <p className="bg-slate-400 py-4">
              <Link className="block" href={`/issues/${issue.id}`}>
                View Details
              </Link>
            </p>
          </article>
        </li>
      ))}
    </ul>
  );
}
