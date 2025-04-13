'use client'
import Link from 'next/link'
import {useRouter} from 'next/navigation'

import {redirectInAction, noopAction} from '@/app/_action'
import sleep from '@/app/_utils/sleep'

export function Buttons({href}: {href: string}) {
    const router = useRouter()

    return (
        <>
            <Link href={href}>{'<Link />'}</Link>
            <button
                type="button"
                onClick={() => {
                    router.push(href)
                }}
            >
                router.push()
            </button>
            <button type="button" onClick={() => router.back()}>
                router.back()
            </button>
            <button
                type="button"
                onClick={async () => {
                    await sleep()
                    router.push(href)
                }}
            >
                await sleep() <br /> router.push(href)
            </button>
            <button
                type="button"
                onClick={async () => {
                    await noopAction()
                    router.push(href)
                }}
                style={{color: 'red'}}
            >
                await noopAction() <br /> router.push(href)
            </button>
            <button
                type="button"
                onClick={async () => {
                    await noopAction()
                    await sleep()
                    router.push(href)
                }}
            >
                await noopAction() <br /> await sleep() <br /> router.push(href)
            </button>
            <button
                type="button"
                onClick={async () => {
                    await redirectInAction(href)
                }}
                style={{color: 'red'}}
            >
                await redirectInAction()
            </button>
        </>
    )
}
