import Link from 'next/link'

import {BackButton} from '../_components/BackButton'
import {RedirectInAction} from '../_components/RedirectInAction'
import {RouterPush} from '../_components/RouterPush'
import {RouterPushAfterActionInAsync} from '../_components/RouterPushAfterActionInAsync'
import {RouterPushInAsync} from '../_components/RouterPushInAsync'

export default async function APage() {
    return (
        <>
            <h1>it's /a</h1>
            <Link href="/b">➡️ /b</Link>
            <RouterPush href="/b" />
            <RouterPushInAsync href="/b" />
            <RouterPushAfterActionInAsync href="/b" />
            <RedirectInAction href="/b" />
            <BackButton />
        </>
    )
}
