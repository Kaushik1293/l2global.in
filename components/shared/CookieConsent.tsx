"use client"

import { useEffect, useState } from "react"
import { getCookie, setCookie } from "@/utils/cookies"
import Link from "next/link"

const COOKIE_NAME = "cookie_consent"

// Extend Window type for gtag
declare global {
    interface Window {
        gtag?: (...args: any[]) => void;
    }
}

const CookieConsent = () => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const consent = getCookie(COOKIE_NAME)
        if (!consent) {
            // Small delay so it doesn't flash immediately on page load
            const timer = setTimeout(() => setVisible(true), 1500)
            return () => clearTimeout(timer)
        }
    }, [])

    const acceptCookies = () => {
        setCookie(COOKIE_NAME, "accepted", 365)
        setVisible(false)
        // Update GA4 consent — allows analytics to fire
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("consent", "update", {
                analytics_storage: "granted",
                ad_storage: "granted",
            })
        }
    }

    const declineCookies = () => {
        setCookie(COOKIE_NAME, "declined", 365)
        setVisible(false)
        // GA remains in denied state (set in layout.tsx)
    }

    if (!visible) return null

    return (
        <div
            role="dialog"
            aria-label="Cookie consent"
            aria-live="polite"
            style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                background: "#0f172a",
                color: "#f1f5f9",
                padding: "20px 24px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "16px",
                zIndex: 9999,
                boxShadow: "0 -4px 20px rgba(0,0,0,0.3)",
            }}
        >
            <p style={{ margin: 0, fontSize: "14px", maxWidth: "600px", lineHeight: "1.5" }}>
                We use cookies to improve your experience and analyse site traffic.{" "}
                <Link
                    href="/privacy-policy"
                    style={{ color: "#60a5fa", textDecoration: "underline" }}
                >
                    Privacy Policy
                </Link>
            </p>
            <div style={{ display: "flex", gap: "12px", flexShrink: 0 }}>
                <button
                    onClick={declineCookies}
                    style={{
                        background: "transparent",
                        color: "#94a3b8",
                        border: "1px solid #475569",
                        padding: "8px 18px",
                        cursor: "pointer",
                        borderRadius: "6px",
                        fontSize: "14px",
                    }}
                >
                    Essential Only
                </button>
                <button
                    onClick={acceptCookies}
                    style={{
                        background: "#1a56db",
                        color: "#fff",
                        border: "none",
                        padding: "8px 20px",
                        cursor: "pointer",
                        borderRadius: "6px",
                        fontSize: "14px",
                        fontWeight: "600",
                    }}
                >
                    Accept All Cookies
                </button>
            </div>
        </div>
    )
}

export default CookieConsent
