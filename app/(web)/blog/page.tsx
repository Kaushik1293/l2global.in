import BlogContainer from '@/containers/web/BlogContainer'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Blog & Insights | L2 Global Technology Ltd.',
    description: 'Stay updated with the latest trends in enterprise integration, Salesforce, SAP, MuleSoft, and cloud strategies for the UK and Middle East markets.',
}

const BlogPage = () => {
    return (
        <BlogContainer />
    )
}

export default BlogPage