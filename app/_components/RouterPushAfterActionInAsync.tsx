'use client'
import {useRouter} from 'next/navigation'

import {someAction} from '../_action'

export function RouterPushAfterActionInAsync({href}: {href: string}) {
    const router = useRouter()

    return (
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
    )
}
