import {Buttons} from '@/app/_components/Buttons'

export default async function APage() {
    return (
        <>
            <h1>
                /a page rendered at <b>{new Date().getMilliseconds()}</b>
            </h1>
            <Buttons href="/b" />
        </>
    )
}
