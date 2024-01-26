"use client";

import { redirect } from "next/dist/server/api-utils";

export default function JobBtns() {
  return (
    <>
      <div className="jobBtns">
        <button>Acccept</button>
        <button onClick={redirect("/jobboard")}>Decline</button>
      </div>
    </>
  );
}
