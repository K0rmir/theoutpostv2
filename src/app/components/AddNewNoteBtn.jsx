"use client";
import { useFormStatus } from "react-dom";

export default function AddNewNote() {
  const formStatus = useFormStatus();

  return (
    <button className="jobBtns" type="submit" disabled={formStatus.pending}>
      {formStatus.pending ? "Adding..." : "Add"}
    </button>
  );
}
