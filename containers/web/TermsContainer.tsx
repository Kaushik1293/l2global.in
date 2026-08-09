const LAST_UPDATED = 'August 2026'

const sections = [
    {
        title: '1. Introduction',
        body: [
            'These Terms & Conditions ("Terms") govern your use of the website located at l2global.in (the "Site"), operated by L2 Global Technologies Ltd. ("L2 Global", "we", "us" or "our"), a company registered in England & Wales.',
            'By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, please do not use the Site.',
        ],
    },
    {
        title: '2. About Us',
        body: [
            'L2 Global Technologies Ltd. is an IT integration consultancy delivering Salesforce, SAP, MuleSoft, AWS, Oracle and related technology services to businesses in the UK, USA, UAE, Saudi Arabia, Qatar and India.',
            'Registered office and delivery centres: London/Gloucester (UK), Spring, Texas (USA), Dubai (UAE), Vijayawada and Bengaluru (India). You can reach us at contactus@l2global.in, +44 7442 586325 (UK) or +91 90000 14701 (India).',
        ],
    },
    {
        title: '3. Use of the Site',
        body: [
            'You agree to use the Site only for lawful purposes and in a way that does not infringe the rights of, or restrict or inhibit the use and enjoyment of, the Site by any third party.',
            'You must not attempt to gain unauthorised access to the Site, any server on which it is hosted, or any database connected to it. You must not attack the Site via a denial-of-service attack or scrape content for unauthorised commercial use.',
        ],
    },
    {
        title: '4. Services & Enquiries',
        body: [
            'Content on the Site describing our services (Salesforce, SAP, MuleSoft, AWS, Oracle, API integration, data science and web development, among others) is provided for general information only and does not constitute a binding offer or quotation.',
            'Any engagement for services is subject to a separate, signed agreement (such as a Statement of Work or Master Services Agreement) between you and L2 Global. Submitting an enquiry through our contact form does not create a contractual relationship.',
        ],
    },
    {
        title: '5. Intellectual Property',
        body: [
            'Unless otherwise stated, L2 Global owns or licenses all intellectual property rights in the Site and its content, including text, graphics, logos and design. All rights are reserved.',
            'You may view, download and print pages from the Site for your own personal, non-commercial use, subject to the restrictions in these Terms. You must not otherwise reproduce, modify or distribute content from the Site without our prior written consent.',
        ],
    },
    {
        title: '6. Submissions Through Our Contact Form',
        body: [
            'When you submit an enquiry through our contact form, you are providing information (such as your name, email, phone number, company, city and a description of your requirements) for the purpose of us responding to your enquiry. See our Privacy Policy for details on how this information is processed and stored.',
            'You are responsible for ensuring the information you submit is accurate and that you have the right to share it with us.',
        ],
    },
    {
        title: '7. Third-Party Links & Services',
        body: [
            'The Site may contain links to third-party websites (for example, Google Maps, WhatsApp, LinkedIn, Trustpilot and other social platforms) that are not operated by us. We have no control over, and accept no responsibility for, the content, privacy policies or practices of any third-party sites or services.',
        ],
    },
    {
        title: '8. Limitation of Liability',
        body: [
            'The Site and its content are provided "as is" without warranties of any kind, to the fullest extent permitted by law. We do not warrant that the Site will be uninterrupted, error-free or free of viruses.',
            'To the fullest extent permitted by applicable law, L2 Global shall not be liable for any indirect, incidental or consequential loss arising from your use of, or inability to use, the Site. Nothing in these Terms excludes or limits liability that cannot lawfully be excluded, such as liability for death or personal injury caused by negligence, or fraud.',
        ],
    },
    {
        title: '9. Governing Law & Jurisdiction',
        body: [
            'These Terms are governed by the laws of England and Wales. Any dispute arising out of or in connection with these Terms or your use of the Site shall be subject to the exclusive jurisdiction of the courts of England and Wales.',
        ],
    },
    {
        title: '10. Changes to These Terms',
        body: [
            'We may update these Terms from time to time to reflect changes in our services, legal requirements or business practices. The "Last updated" date at the top of this page indicates when these Terms were last revised. Continued use of the Site after changes are posted constitutes acceptance of the revised Terms.',
        ],
    },
    {
        title: '11. Contact Us',
        body: [
            'If you have any questions about these Terms, please contact us at contactus@l2global.in or +44 7442 586325.',
        ],
    },
]

const TermsContainer = () => {
    return (
        <div className="bg-white pt-28 md:pt-36 pb-20">
            <div className="container mx-auto px-5 md:px-0 max-w-3xl">
                <p className="text-sm font-medium text-[#F15A23] uppercase tracking-wider mb-3">Legal</p>
                <h1 className="text-3xl md:text-5xl font-bold text-[#0D1526] tracking-[-1px] mb-4">
                    Terms &amp; Conditions
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
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TermsContainer
