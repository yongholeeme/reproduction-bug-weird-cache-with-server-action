import Link from 'next/link'

import {BackButton} from '../_components/BackButton'

export default async function BPage() {
    return (
        <>
            <h1>it's /b</h1>
            <Link href="/a">➡️ /a</Link>
            <BackButton />
        </>
    )
}
