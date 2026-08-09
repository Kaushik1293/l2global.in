import AboutUsContainer from '@/containers/web/AboutUsContainer'
import { Metadata } from 'next';
import React from 'react'

// export const metadata: Metadata = {
//     title: 'L2 Global Technologies | About Us',
//     description: '',
// };
export const metadata: Metadata = {
    title: 'About Us | UK, USA & Gulf',
    description:
        'Specialist IT integration consultancy delivering Salesforce, SAP, MuleSoft and cloud' +
        ' solutions across the UK, USA, UAE and India. 182+ projects delivered.',
    alternates: { canonical: 'https://l2global.in/about-us' },
    openGraph: {
        title: 'About Us | L2 Global Technologies',
        description: 'Specialist IT integration consultancy delivering Salesforce, SAP, MuleSoft and cloud solutions. UK · USA · UAE · India.',
        url: 'https://l2global.in/about-us',
        images: ['/assets/web/og-image.png'],
    },
};


const page = () => {
    return (
        <>
            <AboutUsContainer />
        </>
    )
}

export default page