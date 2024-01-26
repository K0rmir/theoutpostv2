import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import "@/app/styles/newjobform.css";

// Form for new job entries //
export default function NewJobForm() {
  // function to add new job to database //
  async function handleAddJob(formData) {
    "use server";
    // Get the info from the form and save as variables //
    const name = formData.get("name");
    const title = formData.get("job title");
    const content = formData.get("jobDescription");
    const difficulty = formData.get("difficulty");
    // Set the difficulty id to corrolate with the chosen value from the select input //
    let difficulty_id = 0;
    if (difficulty === "Easy") {
      difficulty_id = 1;
    } else if (difficulty === "Moderate") {
      difficulty_id = 2;
    } else if (difficulty === "Hard") {
      difficulty_id = 3;
    } else if (difficulty === "Insane") {
      difficulty_id = 4;
    }
    // insert the name into users table and return the id //
    const insertNewUser = await db.query(
      `INSERT INTO users (name) VALUES ($1) RETURNING id`,
      [name]
    );
    // save the user id as a variable by pulling it out of the row just inserted above //
    const newUser = insertNewUser.rows[0];
    const userId = newUser.id;
    // insert all values into jobs table //
    const insertNewJob = await db.query(
      `INSERT INTO jobs (title, content, user_id, difficulty_id) VALUES ($1, $2, $3, $4)`,
      [title, content, userId, difficulty_id]
    );
    // revalidate / refresh the path so the new job shows //
    revalidatePath("/jobboard");
    // redirect user to job board //
    redirect("/jobboard");
  }

  return (
    <div id="formContainer">
      <form className="jobForm" action={handleAddJob}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          type="text"
          id="job title"
          name="job title"
          placeholder="Job Title"
          required
        />
        <input
          type="text"
          id="jobDescription"
          name="jobDescription"
          placeholder="Detail what you need doing..."
          required
        />
        <label htmlFor="difficulty">Difficulty:</label>
        <select id="difficulty" name="difficulty">
          <option value="" defaultValue={"Select One..."} required>
            Select one...
          </option>
          <option value="Easy">Easy</option>
          <option value="Moderate">Moderate</option>
          <option value="Hard">Hard</option>
          <option value="Insane">Insane</option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
}
