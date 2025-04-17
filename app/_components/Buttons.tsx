'use client'
import Link from 'next/link'
import {useRouter} from 'next/navigation'

import type {PropsWithChildren} from 'react'

import {redirectInAction, noopAction} from '@/app/_action'
import sleep from '@/app/_utils/sleep'

function Box({children}: PropsWithChildren) {
    return <div style={{padding: '4px', border: '1px solid black'}}>{children}</div>
}

export function Buttons({href}: {href: string}) {
    const router = useRouter()

    return (
        <>
            <Box>
                <Link href={href}>{'<Link />'}</Link>
            </Box>
            <Box>
                <button
                    type="button"
                    onClick={() => {
                        router.push(href)
                    }}
                >
                    router.push()
                </button>
            </Box>
            <Box>
                <button type="button" onClick={() => router.back()}>
                    router.back()
                </button>
            </Box>
            <Box>
                <button
                    type="button"
                    onClick={async () => {
                        await sleep()
                        router.push(href)
                    }}
                >
                    await sleep() <br /> router.push(href)
                </button>
            </Box>
            <Box>
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
            </Box>
            <Box>
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
            </Box>
            <Box>
                <button
                    type="button"
                    onClick={async () => {
                        await redirectInAction(href)
                    }}
                    style={{color: 'red'}}
                >
                    await redirectInAction()
                </button>
            </Box>
        </>
    )
}
