// // Functionality for each INDIVIDUAL SAVED job when clicked from the saved jobs page //
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export default async function SavedJobPage({ params }) {
  const jobs = await db.query(
    `SELECT * FROM saved
      JOIN users ON saved.user_id = users.id
      JOIN difficulty ON saved.difficulty_id = difficulty.id
      WHERE saved.id = ${params.id}`
  );
  // Functionality to add notes to an individual, saved  job //
  async function handleAddNote(formData) {
    "use server";
    // This gets whatever was inputted in the text box and saves it as "note" //
    const note = formData.get("note");
    // This query to the database goes and GETS the saved job id which matches the ID in the URL and saves it as a variable //
    const savedJobParam = await db.query(
      ` SELECT id FROM saved
    WHERE id = $1`,
      [params.id]
    );
    // These two consts take the savedjobid/url param and save it into a variable //
    const savedJobId = savedJobParam.rows[0];
    const savedJob = savedJobId.id;
    // This final database query now inserts the note and the savedjob id into the notes table //
    const insertNewNote = await db.query(
      `INSERT INTO notes (note, savedjob_id) VALUES ($1, $2)`,
      [note, savedJob]
    );

    // revalidate / refresh the path so the new note shows //
    revalidatePath(`/savedjobs/${params}`);
  }

  return (
    <>
      <div id="jobContent">
        <h1>{jobs.rows[0].title}</h1>
        <p>{jobs.rows[0].name}</p>
        <h3>{jobs.rows[0].content}</h3>
        <p>Difficulty: {jobs.rows[0].type}</p>
      </div>
      {/* Space to add notes to individual, accepted jobs */}
      <div id="noteSection">
        <div className="notesArea"></div>
        <div className="noteForm">
          <form action={handleAddNote}>
            <input
              type="text"
              id="note"
              name="note"
              placeholder="Add a note..."
              required
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    </>
  );
}