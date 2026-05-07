import HealthCareContainer from '@/containers/web/HealthCareContainer'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: 'Healthcare IT Solutions | Salesforce for NHS & UAE Health | L2 Global',
  description: 'L2 Global delivers patient-centric healthcare IT solutions—Salesforce Health Cloud, patient engagement, and digital transformation—for NHS trusts and healthcare providers across the UK, UAE, and globally.',
};

const page = () => {
  return (
    <div><HealthCareContainer /></div>
  )
}

export default page