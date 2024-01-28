import { db } from "@/lib/db";
import JobBtns from "@/app/components/JobBtns";

export default async function JobPage({ params }) {
  const jobs = await db.query(
    `SELECT * FROM jobs
      JOIN users ON jobs.user_id = users.id
      JOIN difficulty ON jobs.difficulty_id = difficulty.id
      WHERE jobs.id = ${params.id}`
  );

  // Once accept btn is clicked (imported as component from JobBtns.jsx), job data is inserted into the saved table //
  async function handleAcptJob() {
    "use server";
    let pageId = params;
    console.log("Accept button clicked");
    console.log(pageId);
    const savedJob = await db.query(
      `INSERT INTO saved (title, content, user_id, difficulty_id)
      SELECT title, content, user_id, difficulty_id
      FROM jobs
      WHERE jobs.id = $1`,
      [pageId.id]
    );

    await db.query(
      `
    DELETE FROM jobs
    WHERE jobs.id = $1`,
      [pageId.id]
    );
  }

  return (
    <>
      <div id="jobContent">
        <h1>{jobs.rows[0].title}</h1>
        <p>{jobs.rows[0].name}</p>
        <h3>{jobs.rows[0].content}</h3>
        <p>Difficulty: {jobs.rows[0].type}</p>
      </div>
      <JobBtns handleAcptJob={handleAcptJob}></JobBtns>
    </>
  );
}
