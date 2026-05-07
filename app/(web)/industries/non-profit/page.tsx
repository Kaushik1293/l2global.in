import NonProfitContainer from '@/containers/web/NonProfitContainer'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: 'Non-Profit CRM & Salesforce Solutions | UK & Gulf | L2 Global Technologies',
    description: 'L2 Global delivers non-profit technology solutions—Salesforce Nonprofit Cloud, donor engagement, and impact management—to charities and NGOs across the UK, UAE, and GCC.',
};

const page = () => {
    return (
        <>
            <NonProfitContainer />
        </>
    )
}

export default page