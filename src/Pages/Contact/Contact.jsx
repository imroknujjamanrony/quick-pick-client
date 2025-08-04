import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import FollowUs from '../FollowUs/FollowUs';
import ContactCard from '../ContactCard/ContactCard';

const Contact = () => {
    return (

 <div className='max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8'>
            <div>
                {/* Hero Section */}
                <div className="hero">
                    <div className="hero-content text-center">
                        <div>
                            <p className="font-bold text-black text-sm">Contact With Us</p>
                            <h1 className="py-6 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-black">
                                You can ask us questions.
                            </h1>
                            <p className='text-[#030712] text-sm sm:text-base max-w-2xl mx-auto'>
                                Contact us for all your questions and opinions, or you can solve your problems in a shorter time with our contact offices.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="divider divider-end after:bg-gray-200 before:bg-gray-200 text-gray-200"></div>

                {/* Main Grid Layout */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 text-justify'>
                    {/* Left: Office Info */}
                    <div>
                        <h1 className='text-xl sm:text-2xl font-bold text-[#030712] mb-2'>Our Offices</h1>
                        <p className='text-[#4B5563] text-sm'>
                            On dekande mydurtad mora även om skurkstat. Semirade timaheten rena. Radiogen pasam inte loba även om prerade i garanterad traditionell specialitet till bebel.
                        </p>

                        {/* Offices */}
                        <div className='flex flex-col md:flex-row mt-10 gap-10'>
                            {/* US Office */}
                            <div>
                                <div className='flex gap-2 items-center mb-1'>
                                    <IoLocationOutline />
                                    <p className='text-xs text-[#030712]'>United States</p>
                                </div>
                                <h1 className='text-lg text-[#030712] font-bold'>United States Office</h1>
                                <p className='text-sm text-[#4B5563]'>205 Middle Road, 2nd Floor, New York</p>
                                <p className='text-base text-[#030712] font-bold mt-2'>+02 1234 567 88</p>
                                <p className='text-[#2563EB] text-sm'>info@example.com</p>
                            </div>

                            {/* Munich Office */}
                            <div>
                                <div className='flex gap-2 items-center mb-1'>
                                    <IoLocationOutline />
                                    <p className='text-xs text-[#030712]'>Munich</p>
                                </div>
                                <h1 className='text-lg text-[#030712] font-bold'>Munich Office</h1>
                                <p className='text-sm text-[#4B5563]'>205 Middle Road, 2nd Floor, New York</p>
                                <p className='text-base text-[#030712] font-bold mt-2'>+5 456 123 22</p>
                                <p className='text-[#2563EB] text-sm'>contact@example.com</p>
                            </div>
                        </div>

                        <div className="divider text-[#E5E7EB]"></div>
                        <FollowUs />
                    </div>

                    {/* Right: Contact Form */}
                    <div>
                        <p className='text-[#6B7280] text-sm p-4'>
                            On dekande mydurtad mora även om skurkstat. Semirade timaheten rena. Radiogen pasam inte loba även om prerade i garanterad traditionell specialitet till bebel.
                        </p>

                        <div className="w-full p-4">
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[#030712] text-sm mb-1 font-medium">Your name *</label>
                                        <input type="text" placeholder="Name" className="w-full border border-gray-300 rounded-md p-2" />
                                    </div>
                                    <div>
                                        <label className="block text-[#030712] text-sm mb-1 font-medium">Your email *</label>
                                        <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded-md p-2" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[#030712] text-sm mb-1 font-medium">Subject *</label>
                                    <input type="text" placeholder="Subject" className="w-full border border-gray-300 rounded-md p-2" />
                                </div>
                                <div>
                                    <label className="block text-[#030712] text-sm mb-1 font-medium">Your message</label>
                                    <textarea rows="4" placeholder="Message" className="w-full border border-gray-300 rounded-md p-2" />
                                </div>
                                <button type="submit" className="px-6 font-bold py-2 bg-[#634C9F] text-white rounded-md cursor-pointer">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Contact Card */}
                <div className='mt-10'>
                    <ContactCard />
                </div>
            </div>
        </div>
    );
};

export default Contact;