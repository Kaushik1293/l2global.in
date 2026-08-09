'use client'

import { useState } from 'react'

const CALENDLY_URL = 'https://calendly.com/lenin040784/30-minute-it-discovery-call?primary_color=16b32b'

export default function LazyCalendlyEmbed() {
    const [loaded, setLoaded] = useState(false)

    if (!loaded) {
        return (
            <button
                type="button"
                onClick={() => setLoaded(true)}
                className="rounded-full px-6 py-3 font-semibold text-white shadow-md transition-all hover:scale-[1.02]"
                style={{ background: 'linear-gradient(to bottom, #4684FF, #074FDA)' }}
            >
                Book a Call
            </button>
        )
    }

    return (
        <>
            <div
                className="calendly-inline-widget"
                data-url={CALENDLY_URL}
                style={{ minWidth: '320px', height: '700px' }}
            />
            <script
                type="text/javascript"
                src="https://assets.calendly.com/assets/external/widget.js"
                async
            />
        </>
    )
}
