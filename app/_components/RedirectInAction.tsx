'use client'
import {redirectInAction} from '../_action'

export function RedirectInAction({href}: {href: string}) {
    return (
        <button
            type="button"
            onClick={async () => {
                await redirectInAction(href)
            }}
            style={{textDecoration: 'underline'}}
        >
            ➡️ {href} using redirect in action
        </button>
    )
}
