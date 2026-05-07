import EducationContainer from '@/containers/web/EducationContainer'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: 'Education Technology Solutions | Salesforce for Schools | UK & UAE | L2 Global',
    description: 'L2 Global delivers education technology solutions—Salesforce for Schools, student lifecycle management, and digital transformation—to universities and K-12 institutions across the UK, UAE, and globally.',
};

const page = () => {
    return (
        <>
            <EducationContainer />
        </>
    )
}

export default page