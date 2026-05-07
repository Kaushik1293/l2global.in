import RealEstateContainer from '@/containers/web/RealEstateContainer'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: 'Real Estate CRM Solutions | Salesforce for Property | UK & UAE | L2 Global',
    description: 'L2 Global delivers real estate technology solutions—Salesforce for property management, real-time dashboards, and AI-driven analytics—to developers and agencies across the UK, UAE, and GCC.',
};

const page = () => {
    return (
        <div><RealEstateContainer /></div>
    )
}

export default page