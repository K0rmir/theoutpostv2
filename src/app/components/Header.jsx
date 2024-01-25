import Link from "next/link";

export default function Header() {

    return (
        <header id="header">
        <h1>Welcome to The Outpost</h1>
        <nav>
            <Link href="/jobboard">Job Board</Link>
            <Link href="/savedjobs">Saved Jobs</Link>
            <Link href="/addjob">Post A Job</Link>
        </nav>
        
        
        
        
        
        </header>


    )
}