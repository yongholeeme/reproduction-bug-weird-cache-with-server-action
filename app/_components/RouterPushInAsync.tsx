'use client'
import {useRouter} from 'next/navigation'

import sleep from '../_utils/sleep'

export function RouterPushInAsync({href}: {href: string}) {
    const router = useRouter()

    return (
        <button
            type="button"
            onClick={async () => {
                await sleep(100)
                router.push(href)
            }}
        >
            ➡️ {href} using router.push in async
        </button>
    )
}
