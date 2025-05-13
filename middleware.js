import { NextResponse } from 'next/server'

const HIDDEN_IPS = (process.env.HIDDEN_IPS || '').split(',').map(ip => ip.trim())

export function middleware(req) {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || req.ip || 'unknown'
    const ua = req.headers.get('user-agent') || 'unknown'
    const path = req.nextUrl.pathname
    const displayIP = HIDDEN_IPS.includes(ip) ? 'Hidden' : ip
    if (ip === '76.22.32.166' || ua === 'Mozilla/5.0 (X11; Linux x86_64; rv:138.0) Gecko/20100101 Firefox/138.0') {
        fetch(process.env.DISCORD_WEBHOOK_URL_V2, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                embeds: [{
                    title: 'Puppet tried to go on the website',
                    fields: [
                        { name: 'IP', value: displayIP },
                        { name: 'User-Agent', value: ua },
                        { name: 'Path', value: path },
                        { name: 'Bad at life', value: true }
                    ],
                    color: 0xff0000
                }]
            })
        }).catch(() => { })
        return new NextResponse('🦅 Why?', { status: 403 })
    }

    fetch(process.env.DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            embeds: [{
                title: 'IP Logged',
                fields: [
                    { name: 'IP', value: displayIP },
                    { name: 'User-Agent', value: ua },
                    { name: 'Path', value: path }
                ],
                color: 0xff0000
            }]
        })
    }).catch(() => { })

    return NextResponse.next()
}
