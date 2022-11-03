'use client';

export default function IssueErrorPage({ error }: { error: Error }) {
  return <div>Error.... {error.message}</div>;
}
