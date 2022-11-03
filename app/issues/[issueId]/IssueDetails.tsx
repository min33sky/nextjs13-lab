import { Issue } from '@prisma/client';

interface Props extends Issue {}

export default function IssueDetails({ title, summary, description }: Props) {
  return (
    <article className="p-12 ">
      <header>
        <h1>Title: {title}</h1>
        <p>Summary: {summary}</p>
      </header>
      <p>Description: {description}</p>
    </article>
  );
}
