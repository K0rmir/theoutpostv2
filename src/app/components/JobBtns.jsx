"use client";

import Link from "next/link";
import { useFormStatus } from "react-dom";

export default async function JobBtns({ handleAcptJob }) {
  const formStatus = useFormStatus();
  // function to handle accepting quest from jobboard //

  return (
    <>
      <div className="jobBtns">
        {/* wrapping this in a form to get the onclick to work feels dirty, it works, but it feels dirty  */}
        <form action={handleAcptJob}>
          <button type="submit" disabled={formStatus.pending}>
            {formStatus.pending ? "Accepting..." : "Accept"}
          </button>
        </form>
        <Link href="/jobboard">
          <button>Decline</button>
        </Link>
      </div>
    </>
  );
}
