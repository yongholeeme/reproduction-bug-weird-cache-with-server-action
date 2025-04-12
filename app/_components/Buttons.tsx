'use client'

import Link from 'next/link'
import {useRouter} from 'next/navigation'

import {redirectInAction, someAction} from '@/app/_action'
import sleep from '@/app/_utils/sleep'

export function Buttons({href}: {href: string}) {
    const router = useRouter()

    return (
        <>
            <Link href={href}>➡️ /b</Link>
            <button
                type="button"
                onClick={() => {
                    router.push(href)
                }}
            >
                ➡️ {href} using router.push
            </button>
            <button
                type="button"
                onClick={async () => {
                    await sleep(100)
                    router.push(href)
                }}
            >
                ➡️ {href} using router.push in async
            </button>
            <button
                type="button"
                onClick={async () => {
                    await someAction()
                    router.push(href)
                }}
                style={{textDecoration: 'underline'}}
            >
                ➡️ {href} using router.push after action in async
            </button>
            <button
                type="button"
                onClick={async () => {
                    await redirectInAction(href)
                }}
                style={{textDecoration: 'underline'}}
            >
                ➡️ {href} using redirect in action
            </button>
            <button type="button" onClick={() => router.back()}>
                router.back()
            </button>
        </>
    )
}
