import { ServiceLocalSchema } from '@/components/shared/JsonLd';
import SalesForceContainer from '@/containers/services/SalesForceContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Salesforce Implementation & Consulting | UK, USA & Gulf | L2 Global',
    description:
        'Expert Salesforce implementation consultants serving UK (London, Manchester),' +
        ' USA (New York, Texas) and Gulf (Dubai, Riyadh, Abu Dhabi).' +
        ' 180+ Salesforce deployments. Free consultation.',
    alternates: { canonical: 'https://l2global.in/services/salesforce-services' },
    openGraph: {
        title: 'Salesforce Implementation & Consulting | L2 Global Technologies',
        description: 'Certified Salesforce consultants. UK · USA · UAE. Free consultation.',
        url: 'https://l2global.in/services/salesforce-services',
        images: ['/assets/web/og-image.png'],
    },
};

export default function Page() {
    return (
        <>
            <ServiceLocalSchema
                serviceName='Salesforce Implementation & Consulting'
                serviceUrl='https://l2global.in/services/salesforce-services'
                description='Certified Salesforce consultants for UK, USA and Gulf.'
                cities={['London', 'Manchester', 'Birmingham', 'Dubai', 'Abu Dhabi', 'Riyadh',
                    'New York', 'Texas', 'California']}
            />
            <SalesForceContainer />
        </>
    );
}
