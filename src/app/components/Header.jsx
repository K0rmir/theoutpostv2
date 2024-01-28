import Link from "next/link";

export default function Header() {
  return (
    <header id="header">
      <h1>
        Welcome to{" "}
        <Link href="/" id="outpost">
          The Outpost
        </Link>
      </h1>
      <nav>
        <Link className="navlink" href="/jobboard">
          Job Board
        </Link>
        <Link className="navlink" href="/savedjobs">
          Saved Jobs
        </Link>
        <Link className="navlink" href="/addjob">
          Post A Job
        </Link>
      </nav>
    </header>
  );
}
