import Link from 'next/link'

import {BackButton} from '@/app/_components/BackButton'
import {RedirectInAction} from '@/app/_components/RedirectInAction'
import {RouterPush} from '@/app/_components/RouterPush'
import {RouterPushAfterActionInAsync} from '@/app/_components/RouterPushAfterActionInAsync'
import {RouterPushInAsync} from '@/app/_components/RouterPushInAsync'

export default async function BPage() {
    return (
        <>
            <h1>it's /b</h1>
            <Link href="/a">➡️ /a</Link>
            <RouterPush href="/a" />
            <RouterPushInAsync href="/a" />
            <RouterPushAfterActionInAsync href="/a" />
            <RedirectInAction href="/a" />
            <BackButton />
        </>
    )
}
