// Form to add new job listing to database //

import NewJobForm from "../components/NewJobForm";

export const metadata = {
  title: "Add New Job | The Outpost",
  description: "Generated by create next app",
};

export default function AddJob() {
  return (
    <>
      <NewJobForm></NewJobForm>
    </>
  );
}
