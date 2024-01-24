import Link from 'next/link'

export default function Menu(){

    return (
        <nav className="bg-gray-800">
            <div className="flex">
                <Link href="/">Home</Link>
                <Link href="/estados">Estados</Link>
            </div>
        </nav>
    )
}