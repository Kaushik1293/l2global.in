const LAST_UPDATED = 'August 2026'

const sections = [
    {
        title: '1. Introduction',
        body: [
            'This Privacy Policy explains how L2 Global Technologies Ltd. ("L2 Global", "we", "us" or "our"), a company registered in England & Wales, collects, uses and protects information when you visit l2global.in (the "Site") or submit an enquiry to us.',
            'We are the data controller for the personal information described in this policy. If you have any questions, contact us at contactus@l2global.in.',
        ],
    },
    {
        title: '2. Information We Collect',
        body: [
            'Information you provide directly: when you submit our contact form, we collect your name, email address, phone number, company name, city and a description of your requirements, along with the service you are interested in.',
            'Information collected automatically: like most websites, we automatically receive certain technical information when you visit the Site, such as your IP address, browser type, device information, pages visited and referring website, via Google Analytics (once you consent — see "Cookies" below).',
        ],
    },
    {
        title: '3. How We Use Your Information',
        body: [
            'To respond to your enquiry and provide the information or consultation you requested.',
            'To manage our relationship with you as a prospective or existing client, using Salesforce as our customer relationship management (CRM) platform.',
            'To understand how visitors use the Site and improve its content and performance, using aggregated, consent-gated analytics data.',
            'To comply with our legal obligations, for example in relation to accounting and tax records.',
        ],
    },
    {
        title: '4. Legal Basis for Processing',
        body: [
            'Where UK GDPR / the Data Protection Act 2018 applies, we rely on the following legal bases: your consent (for analytics cookies), our legitimate interests (responding to enquiries and operating the Site), and, where applicable, the steps necessary to enter into a contract with you.',
            'If you are located outside the UK, we aim to apply equivalent standards of protection to your personal information regardless of your location.',
        ],
    },
    {
        title: '5. Cookies',
        body: [
            'The Site uses a small, essential cookie to remember your cookie consent choice. This is necessary for the Site to function as intended and does not require consent.',
            'If you accept cookies via the banner shown on your first visit, we also load Google Analytics (Google Tag, "gtag.js") to understand site usage. Analytics and advertising cookies are set to "denied" by default (Google Consent Mode) and only activate after you click "Accept All Cookies." You can withdraw consent at any time by clearing your cookies and revisiting the Site, or by adjusting your browser settings to block cookies.',
        ],
    },
    {
        title: '6. Third-Party Services',
        body: [
            'We use a limited number of third-party services that may process data on our behalf or independently, in line with their own privacy policies:',
        ],
        list: [
            'Google Analytics — website usage analytics (only after cookie consent).',
            'Google Maps — to display embedded maps of our office locations.',
            'Salesforce — as our CRM, to store and manage enquiries submitted through our contact form.',
            'WhatsApp Business — for click-to-chat enquiries you choose to initiate.',
            'Trustpilot and social media platforms (LinkedIn, Facebook, Instagram, X/Twitter, YouTube) — for reviews and social content, where you interact with those links.',
        ],
    },
    {
        title: '7. International Data Transfers',
        body: [
            'As we operate across the UK, USA, UAE, Saudi Arabia, Qatar and India, information you submit may be accessed by our team members or processed by our service providers (such as Salesforce and Google) in countries outside your own, including outside the UK/EEA. Where this occurs, we rely on appropriate safeguards, such as standard contractual clauses, as required by applicable data protection law.',
        ],
    },
    {
        title: '8. Data Retention',
        body: [
            'We retain enquiry information in our CRM for as long as necessary to respond to your enquiry, maintain our business relationship with you, and comply with our legal and accounting obligations. You can ask us to delete your information at any time, subject to any legal requirement to retain it.',
        ],
    },
    {
        title: '9. Your Rights',
        body: [
            'Depending on your location, you may have the right to: access the personal information we hold about you; request correction of inaccurate information; request deletion of your information; object to or restrict certain processing; and request a portable copy of your information.',
            'To exercise any of these rights, contact us at contactus@l2global.in. If you are in the UK, you also have the right to lodge a complaint with the Information Commissioner\'s Office (ICO) at ico.org.uk.',
        ],
    },
    {
        title: '10. Data Security',
        body: [
            'We take reasonable technical and organisational measures to protect the personal information we hold from unauthorised access, loss or misuse. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.',
        ],
    },
    {
        title: '11. Children\'s Privacy',
        body: [
            'The Site is intended for business audiences and is not directed at children. We do not knowingly collect personal information from children.',
        ],
    },
    {
        title: '12. Changes to This Policy',
        body: [
            'We may update this Privacy Policy from time to time. The "Last updated" date at the top of this page shows when it was last revised. We encourage you to review this page periodically.',
        ],
    },
    {
        title: '13. Contact Us',
        body: [
            'For any questions about this Privacy Policy or how we handle your information, contact us at contactus@l2global.in, +44 7442 586325 (UK) or +91 90000 14701 (India).',
        ],
    },
]

const PrivacyPolicyContainer = () => {
    return (
        <div className="bg-white pt-28 md:pt-36 pb-20">
            <div className="container mx-auto px-5 md:px-0 max-w-3xl">
                <p className="text-sm font-medium text-[#F15A23] uppercase tracking-wider mb-3">Legal</p>
                <h1 className="text-3xl md:text-5xl font-bold text-[#0D1526] tracking-[-1px] mb-4">
                    Privacy Policy
                </h1>
                <p className="text-sm text-gray-500 mb-12">Last updated: {LAST_UPDATED}</p>

                <div className="space-y-10">
                    {sections.map((section) => (
                        <div key={section.title}>
                            <h2 className="text-xl md:text-2xl font-semibold text-[#0D1526] mb-3">
                                {section.title}
                            </h2>
                            <div className="space-y-3">
                                {section.body.map((paragraph, i) => (
                                    <p key={i} className="text-[#494852] leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                            {section.list && (
                                <ul className="mt-3 space-y-2 list-disc list-inside">
                                    {section.list.map((item, i) => (
                                        <li key={i} className="text-[#494852] leading-relaxed">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicyContainer
