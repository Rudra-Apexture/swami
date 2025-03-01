// src/app/components/Sidebar.js
import Link from 'next/link';

export default function Sidebar() {
    return (
        <aside className="bg-gray-200 p-4 w-64">
            <h2 className="text-lg font-bold mb-2">Navigation</h2>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </aside>
    );
}