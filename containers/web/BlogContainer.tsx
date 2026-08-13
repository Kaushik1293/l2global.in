'use client';

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, ArrowRight, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { blogPosts } from '@/constants/blogData'

const BlogContainer = () => {
    return (
        <div className="bg-mesh min-h-screen relative overflow-hidden">
            {/* VIBRANT STRIPE-LIKE HERO */}
            <div className="relative pt-40 pb-32 overflow-hidden">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[1000px] h-[1000px] bg-gradient-to-tr from-[#F15A23]/20 via-[#074FDA]/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[800px] h-[800px] bg-gradient-to-tr from-[#074FDA]/10 via-[#F15A23]/10 to-transparent rounded-full blur-[100px] pointer-events-none" />
                
                {/* Diagonal Accent */}
                <div className="absolute top-20 right-10 w-[500px] h-[100px] bg-gradient-to-r from-[#F15A23] to-[#074FDA] opacity-10 blur-[80px] -rotate-45" />

                <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-stripe text-gray-800 font-bold text-sm tracking-wide mb-8 border border-gray-100"
                    >
                        <Zap className="w-4 h-4 text-[#F15A23] fill-[#F15A23]" /> L2 Global Content Hub
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-gray-900 mb-8 tracking-tight leading-[1.1]"
                    >
                        Insights for the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F15A23] via-[#ff7e50] to-[#074FDA]">Digital Enterprise</span>
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium"
                    >
                        Expert perspectives on Salesforce, SAP, and MuleSoft strategies for high-growth businesses.
                    </motion.p>
                </div>
            </div>

            {/* VIBRANT CARD GRID */}
            <div className="pb-32 relative z-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.15 }
                            }
                        }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
                    >
                        {blogPosts.map((post) => (
                            <motion.article 
                                variants={{
                                    hidden: { opacity: 0, y: 40 },
                                    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
                                }}
                                key={post.id} 
                                className="group flex flex-col bg-white rounded-[32px] overflow-hidden shadow-stripe hover:shadow-glow-hover transition-all duration-500 ease-out hover:-translate-y-2 border border-gray-100"
                            >
                                <div className="relative h-72 w-full overflow-hidden bg-gray-50 p-2">
                                    <div className="relative w-full h-full rounded-[24px] overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black text-gray-900 shadow-sm border border-white/50">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-8 md:p-10 flex flex-col grow relative z-10">
                                    <div className="flex items-center gap-5 text-sm font-semibold text-gray-500 mb-6">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-[#F15A23]/10 flex items-center justify-center">
                                                <Calendar size={12} className="text-[#F15A23]" />
                                            </div>
                                            <span>{new Date(post.datePublished).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-[#074FDA]/10 flex items-center justify-center">
                                                <User size={12} className="text-[#074FDA]" />
                                            </div>
                                            <span>{post.author}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#074FDA] transition-colors duration-300 leading-tight">
                                        <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                                            <span className="absolute inset-0" aria-hidden="true" />
                                            {post.title}
                                        </Link>
                                    </h3>
                                    <p className="text-gray-600 mb-8 line-clamp-3 text-base leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <div className="mt-auto pt-6 flex items-center">
                                        <span className="inline-flex items-center gap-2 text-sm font-bold text-[#F15A23] bg-[#F15A23]/5 px-4 py-2 rounded-xl group-hover:bg-[#F15A23] group-hover:text-white transition-colors duration-300">
                                            Read Story 
                                            <motion.span
                                                initial={{ x: 0 }}
                                                className="transition-transform group-hover:translate-x-1"
                                            >
                                                <ArrowRight size={16} />
                                            </motion.span>
                                        </span>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* VIBRANT CTA SECTION */}
            <div className="relative py-32 overflow-hidden bg-gradient-to-br from-[#074FDA] via-[#0b388b] to-[#041a46] skew-y-3 -mt-12">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#F15A23] rounded-full blur-[100px] opacity-40" />
                
                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl -skew-y-3">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">Ready to transform?</h2>
                        <p className="text-blue-100 mb-12 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
                            Partner with L2 Global to architect your digital future with scalable cloud integrations.
                        </p>
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center gap-3 bg-white text-[#074FDA] px-10 py-5 rounded-2xl font-black text-lg hover:bg-gray-50 shadow-stripe transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
                        >
                            Get in Touch <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default BlogContainer
