// Functionality for each individual job when clicked from the job board //
import {db} from "@/lib/db";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import JobBtns from "@/app/components/JobBtns";

export default async function JobPage({params}) {
  const jobs = await db.query(
    `SELECT * FROM jobs
      JOIN users ON jobs.user_id = users.id
      JOIN difficulty ON jobs.difficulty_id = difficulty.id
      WHERE jobs.id = ${params.id}`
  );

  // Once accept btn is clicked (imported as component from JobBtns.jsx), job data is inserted into the saved table //
  async function handleAcptJob() {
    "use server";
    let pageId = params.id;
    console.log("Accept button clicked");
    console.log(pageId);
    const savedJob = await db.query(
      `INSERT INTO saved (title, content, user_id, difficulty_id)
      SELECT title, content, user_id, difficulty_id
      FROM jobs
      WHERE jobs.id = $1`,
      [pageId]
    );
    // Query to delete row from Jobs table
    await db.query(
      `
    DELETE FROM jobs
    WHERE jobs.id = $1`,
      [pageId]
    );

    // revalidate / refresh the path so the new accepted job is removed //
    revalidatePath("/jobboard");
    revalidatePath("/savedjobs");
    // redirect user to saved jobs //
    redirect("/jobboard");
  }

  return (
    <div id="jobContainer">
      <div id="jobContent">
        <h1 className="title">{jobs.rows[0].title}</h1>
        <p className="name">Posted by: {jobs.rows[0].name}</p>
        <h3 className="content">{jobs.rows[0].content}</h3>
        <p className="difficulty">
          Difficulty: <strong>{jobs.rows[0].type}</strong>
        </p>
        <JobBtns handleAcptJob={handleAcptJob}></JobBtns>
      </div>
    </div>
  );
}
