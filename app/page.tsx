'use client'

import Link from 'next/link'

export default function Home() {
    return (
        <>
            <h1>it's /</h1>
            <Link href="/a">➡️ /a</Link>
            <Link href="/test">➡️ /b</Link>
        </>
    )
}
