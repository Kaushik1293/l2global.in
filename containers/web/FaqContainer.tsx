'use client';

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ChevronDown, MessageCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const faqCategories = [
    { id: 'general', name: 'General Questions' },
    { id: 'services', name: 'Our Services' },
    { id: 'pricing', name: 'Pricing & Plans' },
    { id: 'support', name: 'Technical Support' },
]

const faqs = [
    {
        id: 1,
        categoryId: 'general',
        question: "What makes L2 Global different?",
        answer: "L2 Global stands out through our deep expertise in enterprise cloud ecosystems. We don't just implement software; we architect scalable, future-proof integrations across Salesforce, SAP, and MuleSoft. Our approach is deeply collaborative, ensuring technology aligns perfectly with your business goals."
    },
    {
        id: 2,
        categoryId: 'general',
        question: "Where are you located?",
        answer: "We are headquartered in the heart of the tech district, but our team operates globally. We support clients across North America, Europe, and Asia-Pacific through our distributed workforce and regional hubs."
    },
    {
        id: 3,
        categoryId: 'services',
        question: "Do you offer custom Salesforce development?",
        answer: "Absolutely. We specialize in complex Salesforce customizations, including Lightning Web Components (LWC), Apex triggers, and seamless integrations with third-party ERPs like SAP and Oracle."
    },
    {
        id: 4,
        categoryId: 'pricing',
        question: "How do you structure your pricing?",
        answer: "We offer flexible engagement models tailored to your needs. This includes fixed-price contracts for well-defined projects, time-and-materials for ongoing agile development, and dedicated team retainers for long-term partnerships."
    },
    {
        id: 5,
        categoryId: 'support',
        question: "What kind of post-launch support do you provide?",
        answer: "We offer comprehensive 24/7 managed services. This includes proactive system monitoring, regular security patching, performance optimization, and a dedicated technical account manager to ensure your ecosystem runs flawlessly."
    }
]

const FaqContainer = () => {
    const [activeCategory, setActiveCategory] = useState('general')
    const [searchQuery, setSearchQuery] = useState('')
    const [openFaqId, setOpenFaqId] = useState<number | null>(1)

    const filteredFaqs = faqs.filter(faq => {
        const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = faq.categoryId === activeCategory;
        return searchQuery ? matchesSearch : matchesCategory;
    });

    return (
        <div className="bg-mesh min-h-screen relative overflow-hidden pb-32">
            
            {/* VIBRANT HERO */}
            <div className="relative pt-40 pb-20 overflow-hidden">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[1000px] h-[1000px] bg-gradient-to-tr from-[#074FDA]/20 via-[#F15A23]/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-[#F15A23] opacity-5 blur-[100px] pointer-events-none rounded-full" />
                
                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-stripe text-[#074FDA] font-bold text-sm tracking-wide mb-8 border border-gray-100"
                    >
                        <MessageCircle className="w-4 h-4" /> Support Center
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-gray-900 mb-8 tracking-tight"
                    >
                        How can we <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#074FDA] to-[#F15A23]">help you?</span>
                    </motion.h1>

                    {/* VIBRANT SEARCH */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative max-w-2xl mx-auto"
                    >
                        <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                            <Search className="h-6 w-6 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-16 pr-6 py-5 bg-white border border-gray-100 rounded-3xl text-lg text-gray-900 placeholder-gray-400 shadow-stripe focus:outline-none focus:ring-4 focus:ring-[#074FDA]/20 transition-all font-medium"
                            placeholder="Search for answers..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </motion.div>
                </div>
            </div>

            {/* CONTENT AREA */}
            <div className="container mx-auto px-4 relative z-20 mt-10">
                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                    
                    {/* CATEGORY SIDEBAR */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:w-1/3"
                    >
                        <div className="sticky top-32 bg-white rounded-[32px] p-6 shadow-stripe border border-gray-100">
                            <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-6 px-4">Categories</h3>
                            <nav className="flex flex-col gap-2">
                                {faqCategories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => {
                                            setActiveCategory(category.id);
                                            setSearchQuery('');
                                            setOpenFaqId(null);
                                        }}
                                        className={`relative px-5 py-4 text-left font-bold text-lg rounded-2xl transition-all duration-300 ${
                                            activeCategory === category.id && !searchQuery
                                                ? 'text-[#074FDA]'
                                                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                                        }`}
                                    >
                                        {activeCategory === category.id && !searchQuery && (
                                            <motion.div
                                                layoutId="activeCategory"
                                                className="absolute inset-0 bg-[#074FDA]/10 rounded-2xl"
                                                initial={false}
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                        <span className="relative z-10">{category.name}</span>
                                    </button>
                                ))}
                            </nav>
                            
                            <div className="mt-10 p-6 bg-gradient-to-br from-[#074FDA] to-[#0a3a99] rounded-2xl text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                                <h4 className="font-bold text-xl mb-2 relative z-10">Still have questions?</h4>
                                <p className="text-blue-100 text-sm mb-6 relative z-10">Our enterprise architects are ready to assist you.</p>
                                <Link href="/contact-us" className="inline-flex items-center justify-center w-full bg-white text-[#074FDA] font-bold py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all relative z-10">
                                    Contact Support
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* FAQ ACCORDIONS */}
                    <div className="lg:w-2/3">
                        <div className="mb-8">
                            <h2 className="text-3xl font-black text-gray-900">
                                {searchQuery ? 'Search Results' : faqCategories.find(c => c.id === activeCategory)?.name}
                            </h2>
                            <p className="text-gray-500 mt-2 font-medium">
                                {filteredFaqs.length} {filteredFaqs.length === 1 ? 'question' : 'questions'} available
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <AnimatePresence mode="popLayout">
                                {filteredFaqs.length > 0 ? (
                                    filteredFaqs.map((faq) => {
                                        const isOpen = openFaqId === faq.id;
                                        return (
                                            <motion.div
                                                key={faq.id}
                                                layout
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, scale: 0.95 }}
                                                transition={{ duration: 0.3 }}
                                                className={`bg-white rounded-[24px] overflow-hidden border transition-all duration-300 ${isOpen ? 'border-[#074FDA]/20 shadow-glow' : 'border-gray-100 shadow-sm hover:shadow-stripe'}`}
                                            >
                                                <button
                                                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                                                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                                                >
                                                    <span className={`text-xl font-bold pr-8 transition-colors duration-300 ${isOpen ? 'text-[#074FDA]' : 'text-gray-900'}`}>
                                                        {faq.question}
                                                    </span>
                                                    <motion.div
                                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                                        transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                                                        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-[#074FDA]/10 text-[#074FDA]' : 'bg-gray-50 text-gray-400'}`}
                                                    >
                                                        <ChevronDown className="w-5 h-5" />
                                                    </motion.div>
                                                </button>
                                                <AnimatePresence>
                                                    {isOpen && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                                        >
                                                            <div className="px-6 md:px-8 pb-8 pt-0 text-gray-600 leading-relaxed text-lg">
                                                                {faq.answer}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </motion.div>
                                        )
                                    })
                                ) : (
                                    <motion.div 
                                        initial={{ opacity: 0 }} 
                                        animate={{ opacity: 1 }} 
                                        className="text-center py-20 bg-white rounded-[32px] border border-gray-100 shadow-sm"
                                    >
                                        <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                                        <p className="text-xl font-bold text-gray-900 mb-2">No questions found</p>
                                        <p className="text-gray-500">We couldn't find anything matching "{searchQuery}"</p>
                                        <button 
                                            onClick={() => setSearchQuery('')}
                                            className="mt-6 text-[#074FDA] font-bold hover:underline"
                                        >
                                            Clear search
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqContainer
