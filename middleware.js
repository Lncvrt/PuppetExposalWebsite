import { NextResponse } from 'next/server'

export function middleware(req) {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || req.ip || 'unknown'
    const ua = req.headers.get('user-agent') || 'unknown'
    const path = req.nextUrl.pathname

    fetch(process.env.DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            embeds: [{
                title: 'IP Logged',
                fields: [
                    { name: 'IP', value: ip },
                    { name: 'User-Agent', value: ua },
                    { name: 'Path', value: path }
                ],
                color: 0xff0000
            }]
        })
    }).catch(() => { })

    return NextResponse.next()
}
