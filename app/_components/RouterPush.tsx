'use client'
import {useRouter} from 'next/navigation'

export function RouterPush({href}: {href: string}) {
    const router = useRouter()

    return (
        <>
            <button
                type="button"
                onClick={() => {
                    router.push(href)
                }}
            >
                ➡️ {href} using router.push
            </button>
        </>
    )
}
