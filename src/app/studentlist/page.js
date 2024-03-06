import Link from "next/link";

export default function StudentList(){
    return (
        <div>
            <h1>Student List</h1>
            <li>
                <Link href="/studentlist/Rohit">Rohit</Link>
            </li>
            <li>
                <Link href="/studentlist/Mohit">Mohit</Link>
            </li>
            <li>
                <Link href="/studentlist/Shobhit">Shobhit</Link>
            </li>
            <li>
                <Link href="/studentlist/Ronit">Ronit</Link>
            </li>      
        </div>
    )
}