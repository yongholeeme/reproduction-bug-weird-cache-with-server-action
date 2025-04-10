'use server'

import { redirect } from "next/navigation"

export async function someAction() {
    // i don't do anything.
}

export async function redirectInAction(href:string) {
    redirect(href)
}