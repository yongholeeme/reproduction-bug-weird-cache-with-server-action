'use server'

import {redirect} from 'next/navigation'

export async function noopAction() {
    // do nothing.
}

export async function redirectInAction(href: string) {
    redirect(href)
}
