"use client";

import Link from "next/link";

// This function returns the buttons for each individual job page. //
// Because the accept btn is wrapped in a form, when it is "submitted" (accept button clicked), it passes the form action/event, which //
// is the handleAcptJob function as a prop to the individual job page (/jobboard/[id]/page/jsx), so that the //
// handleAcptJob function is executed as a server action. It took me a lot of searching trying to figure out how to do this //
// with the added layer of client/server components in next.js, but I done dang did it. //
// It's probably very bad. //

export default function JobBtns({ handleAcptJob }) {
  return (
    <>
      <div className="jobBtns">
        {/* wrapping this in a form to get the onclick to work feels dirty, it works, but it feels dirty  */}
        <form action={handleAcptJob}>
          <button>Accept </button>
        </form>
        <Link href="/jobboard">
          <button>Decline</button>
        </Link>
      </div>
    </>
  );
}
