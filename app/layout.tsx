import {Geist, Geist_Mono} from 'next/font/google'

import type {Metadata} from 'next'
import './globals.css'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <div className="flex flex-col items-center justify-center min-h-screen gap-4">
                    <h1 className="text-neutral-400">reproduction-bug-weird-layout</h1>
                    <h2>layout is rendered at {new Date().getTime()}</h2>
                    {children}
                </div>
            </body>
        </html>
    )
}
