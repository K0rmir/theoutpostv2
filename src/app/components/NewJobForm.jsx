// Form for new job entries //

export default function NewJobForm() {

    return (
        <div id="formContainer">
            <form action="">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="text" name="job title" placeholder="Job Title" required />
                <input type="text" name="job description" placeholder="Detail what you need doing..." required />
                <label htmlFor="difficulty">Difficulty:</label>
                <select
                    name="difficulty" >
                    <option value="" defaultValue={"Select One..."} required>
            Select one...</option>
                    <option value="Easy">Easy</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Hard">Hard</option>
                    <option value="Insane">Insane</option>                    
                </select>
                <button>Submit</button>
            </form>
        
        
        </div>
    )
}