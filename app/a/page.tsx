import Link from 'next/link'

import {BackButton} from '../_components/BackButton'

export default async function APage() {
    return (
        <>
            <h1>it's /a</h1>
            <Link href="/b">➡️ /b</Link>
            <BackButton />
        </>
    )
}
