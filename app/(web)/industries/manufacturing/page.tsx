import ManufacturingContainer from '@/containers/web/ManufacturingContainer'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: 'Manufacturing IT Solutions | SAP & MuleSoft | UK, USA & Gulf | L2 Global',
    description: 'L2 Global delivers manufacturing IT solutions—SAP S/4HANA migration, MuleSoft integration, and digital transformation—to discrete & process manufacturers across the UK, USA, Saudi Arabia & UAE.',
};

const page = () => {
    return (
        <>
            <ManufacturingContainer />
        </>
    )
}

export default page