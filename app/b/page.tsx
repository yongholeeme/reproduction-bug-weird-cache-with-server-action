import {Buttons} from '@/app/_components/Buttons'

export default async function BPage() {
    return (
        <>
            <h1>
                /b page rendered at <b>{new Date().getMilliseconds()}</b>
            </h1>
            <Buttons href="/a" />
        </>
    )
}
