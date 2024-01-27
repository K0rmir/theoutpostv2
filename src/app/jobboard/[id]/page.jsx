import { db } from "@/lib/db";
import JobBtns from "@/app/components/JobBtns";

export default async function JobPage({ params }) {
  const jobs = await db.query(
    `SELECT * FROM jobs
      JOIN users ON jobs.user_id = users.id
      JOIN difficulty ON jobs.difficulty_id = difficulty.id
      WHERE jobs.id = ${params.id}`
  );

  let pageId = Object.values(params);
  let jobId = Number(pageId);

  return (
    <>
      <div id="jobContent">
        <h1>{jobs.rows[0].title}</h1>
        <p>{jobs.rows[0].name}</p>
        <h3>{jobs.rows[0].content}</h3>
        <p>Difficulty: {jobs.rows[0].type}</p>
      </div>
      <JobBtns jobId={jobId}></JobBtns>
    </>
  );
}
