import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, ArrowRight } from 'lucide-react'
import { blogPosts } from '@/constants/blogData'
import HeroSection from '@/components/web/HeroSection'
import Divider from '@/components/web/Divider'
import SectionHeader from '@/components/web/SectionHeader'
import heroImage from '@/public/assets/web/about-us/hero-img.png' // Reusing about-us hero for now

const BlogContainer = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <HeroSection
                label="Insights & News"
                title="L2 Global Blog & Content Hub"
                description="Expert perspectives on enterprise integration, cloud strategy, and digital transformation for businesses in the UK and Middle East."
                image={heroImage}
            />

            {/* Blog List Section */}
            <div className="py-20">
                <div className="container mx-auto px-4">
                    <div className="mb-12">
                        <Divider className="text-black" blur label="Our Latest Articles" />
                        <SectionHeader
                            title="Stay Ahead of the Digital Curve"
                            desc="Deep dives into Salesforce, SAP, MuleSoft, AWS, and more."
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {blogPosts.map((post) => (
                            <article key={post.id} className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                                <div className="relative h-64 w-full overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#F15A23]">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col grow">
                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            <span>{new Date(post.datePublished).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User size={14} />
                                            <span>{post.author}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#F15A23] transition-colors line-clamp-2">
                                        <Link href={`/blog/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </h3>
                                    <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <div className="mt-auto pt-6 border-t border-gray-50">
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:gap-3 transition-all"
                                        >
                                            Read Full Article <ArrowRight size={16} className="text-[#F15A23]" />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

            {/* Newsletter/CTA section could go here */}
            <div className="bg-[#F6F5F8] py-20">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Need a custom IT strategy for your business?</h2>
                    <p className="text-gray-600 mb-10 text-lg">Our experts are ready to help you navigate the complexities of enterprise integration and cloud migration.</p>
                    <Link
                        href="/contact-us"
                        className="inline-block bg-[#F15A23] text-white px-10 py-4 rounded-full font-bold hover:bg-[#d94e1c] transition-all shadow-lg hover:shadow-[#F15A23]/20"
                    >
                        Schedule a Free Consultation
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogContainer
