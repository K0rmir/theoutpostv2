import { db } from "@/lib/db";
import Link from "next/link";

export default async function JobBtns({ handleAcptJob }) {
  // function to handle accepting quest from jobboard //

  // async function handleAcptJob({ pageId }) {
  //   "use server";
  //   console.log(pageId);
  //   console.log("Accept button clicked");
  //   const jobs = await db.query(`SELECT * FROM jobs
  //     WHERE jobs.id = ${pageId}`);
  //   console.log(jobs.rows);
  // }

  return (
    <>
      <div className="jobBtns">
        {/* wrapping this in a form to get the onclick to work feels dirty, it works, but it feels dirty  */}
        <form action={handleAcptJob}>
          <button type="submit">Accept</button>
        </form>
        <Link href="/jobboard">
          <button>Decline</button>
        </Link>
      </div>
    </>
  );
}

// `INSERT INTO saved (title, content, user_id, difficulty_id)
// SELECT title, content, user_id, difficulty_id
// FROM jobs
// WHERE jobs.id = ${jobId}
