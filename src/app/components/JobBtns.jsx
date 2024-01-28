import Link from "next/link";

export default async function JobBtns({ handleAcptJob }) {
  // function to handle accepting quest from jobboard //

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
