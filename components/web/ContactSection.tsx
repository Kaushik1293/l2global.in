"use client";

import Image from 'next/image'
import React from 'react'
import { trackEvent } from '@/lib/gtag'
import callimg from '../../public/assets/web/contact-us/call-Icon.svg';
import locationimg from '../../public/assets/web/contact-us/location-icon.svg';
import emailimg from '../../public/assets/web/contact-us/email-Icon.svg';
import ContactForm from './ContactForm';
import contactimg from '../../public/assets/web/home/ContactUs.png'
import Link from 'next/link';

const ContactSection = () => {
    return (
        <div>
            <main className="mx-auto container py-6 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* Left column */}
                    <section>
                        <div className="flex flex-col justify-center items-center lg:items-start mb-12">
                            <span className="text-lg font-medium bg-[#F6F6F9] px-4 py-1 rounded-full flex items-center gap-2 text-black tracking-[-1px]">
                                <span className="w-2 h-2 bg-orange-500 rounded-full" />
                                Contact Us
                                <span className="w-2 h-2 bg-orange-500 rounded-full" />
                            </span>

                            <h2 className="text-3xl md:text-5xl font-medium leading-tight tracking-[-2px] mt-6 text-center lg:text-left">
                                Talk to Our Team
                            </h2>
                            <p className="text-gray-500 mt-3 text-center lg:text-left">
                                Free 30-minute discovery call — no commitment, no hard sell.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {/* UK Phone — PROMINENT */}
                            <div className='flex items-center gap-4'>
                                <Image src={callimg} alt='UK phone' width={56} height={56} className='object-contain' />
                                <div>
                                    <p className='text-gray-500 text-sm'>🇬🇧 UK (primary)</p>
                                    <Link
                                        href="tel:+447442586325"
                                        onClick={() => trackEvent('phone_click', { number: '+447442586325', location: 'contact_section' })}
                                        className='font-semibold text-lg text-gray-900 hover:text-[#1a56db] transition-colors'
                                    >
                                        +44 7442 586325
                                    </Link>
                                </div>
                            </div>

                            {/* India Phone */}
                            <div className='flex items-center gap-4'>
                                <Image src={callimg} alt='India phone' width={56} height={56} className='object-contain' />
                                <div>
                                    <p className='text-gray-500 text-sm'>🇮🇳 India</p>
                                    <Link
                                        href="tel:+919000014701"
                                        onClick={() => trackEvent('phone_click', { number: '+919000014701', location: 'contact_section' })}
                                        className='font-semibold text-lg text-gray-900 hover:text-[#1a56db] transition-colors'
                                    >
                                        +91 90000 14701
                                    </Link>
                                </div>
                            </div>

                            {/* WhatsApp */}
                            <div className='flex items-center gap-4'>
                                <div className='w-14 h-14 bg-[#25d366] rounded-xl flex items-center justify-center'>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                    </svg>
                                </div>
                                <div>
                                    <p className='text-gray-500 text-sm'>💬 WhatsApp</p>
                                    <Link
                                        href="https://wa.me/447442586325?text=Hi%20L2%20Global%2C%20I%20am%20interested%20in%20your%20services"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => trackEvent('whatsapp_click', { location: 'contact_section' })}
                                        className='font-semibold text-lg text-[#25d366] hover:text-[#1aa34a] transition-colors'
                                    >
                                        +44 7442 586325
                                    </Link>
                                </div>
                            </div>

                            {/* UK Address */}
                            <div className='flex items-center gap-4'>
                                <Image src={locationimg} alt='UK office' width={56} height={56} className='object-contain' />
                                <div>
                                    <p className='text-gray-500 text-sm'>🇬🇧 UK Office</p>
                                    <p className='font-semibold text-gray-900'>Cheltenham Road, Gloucester, GL2 0JR</p>
                                </div>
                            </div>

                            {/* India Address */}
                            <div className='flex items-center gap-4'>
                                <Image src={locationimg} alt='India office' width={56} height={56} className='object-contain' />
                                <div>
                                    <p className='text-gray-500 text-sm'>🇮🇳 India Delivery Centre</p>
                                    <p className='font-semibold text-gray-900'>Tempalli, Gannavaram, Krishna District, Andhra Pradesh – 521286</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className='flex items-center gap-4'>
                                <Image src={emailimg} alt='Email' width={56} height={56} className='object-contain' />
                                <div>
                                    <p className='text-gray-500 text-sm'>Email</p>
                                    <Link
                                        href="mailto:contactus@l2global.in"
                                        onClick={() => trackEvent('email_click', { location: 'contact_section' })}
                                        className='font-semibold text-lg text-gray-900 hover:text-[#1a56db] transition-colors'
                                    >
                                        contactus@l2global.in
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <Image src={contactimg} alt='Contact L2 Global Technologies — UK, Texas, UAE & India consultants' width={450} height={400} className='object-contain' />
                        </div>
                    </section>

                    {/* Right column — form */}
                    <section className="relative">
                        {/* Calendly option above form */}
                        <div className="mb-6 p-5 bg-blue-50 rounded-2xl border border-blue-100">
                            <p className="font-semibold text-gray-900 mb-1">Prefer to book a call directly?</p>
                            <p className="text-sm text-gray-500 mb-4">Pick a time that suits you — 30 mins, no commitment.</p>
                            <a
                                href="https://calendly.com/l2global/discovery"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#1a56db] text-white px-5 py-3 rounded-lg font-semibold text-sm hover:bg-[#1443b0] transition-colors"
                            >
                                📅 Book a Free 30-Minute Call →
                            </a>
                        </div>

                        <div className="text-center text-sm text-gray-400 mb-5">— or send a message below —</div>

                        <div className="absolute inset-0 -z-10 rounded-3xl" />
                        <ContactForm />
                    </section>

                </div>
            </main>
        </div>
    )
}

export default ContactSection;
