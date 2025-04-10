export default function sleep(ms = 1000) {
    return new Promise<void>((resolve) => setTimeout(resolve, ms))
}
