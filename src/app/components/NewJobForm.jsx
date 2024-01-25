export default function NewJobForm() {

    return (
        <div id="formContainer">
            <form action="">
                <input type="text" name="name" placeholder="Your Name" />
                <input type="text" name="job title" placeholder="Job Title" />
                <input type="text" name="job description" placeholder="Detail what you need doing..." />
                <label htmlFor="difficulty">Difficulty:</label>
                <select
                    name="difficulty" >
                    <option value="" defaultValue={"Select One..."}>
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