import React from 'react'

function Contact() {
    return (
        <>
            <div className='w-full h-screen py-10 px-5 bg-[#090c31] flex justify-center items-center '>
                <main className='w-9/12 h-4/6 bg-rose-600 border-0 rounded-tl-[4rem] rounded-br-[4rem] '>
                    <h1 className='text-2xl font-semibold text-white pt-8 ml-8'>Contact Us</h1>

                    <form className='m-10 flex flex-col justify-center items-center '>
                        <div className='h-5 mb-5 w-[60%] flex justify-end items-center  '> 
                            <label className='text-xl w-[20%] mr-1 '>Name</label>
                            <input type="text" placeholder='John Doe' required className='w-[80%] px-3 py-1 border-0 rounded-md outline-none ' />
                        </div>
                        <div className='h-5 mb-5 w-[60%] flex justify-end items-center  '>
                            <label className='text-xl w-[20%] mr-1 '>Email</label>
                            <input type="email" placeholder='johndoe1324@gmail.com' required className='w-[80%] px-3 py-1 border-0 rounded-md outline-none ' />
                        </div>
                        <div className='h-5 mb-5 w-[60%] flex justify-end items-center  '>
                            <label className='text-xl w-[20%] mr-1 '>Message</label>
                            <input type="text" placeholder='Tell us about your query' required className='w-[80%] px-3 py-1 border-0 rounded-md outline-none ' />
                        </div>

                        <button type='submit' className='w-1/3 my-5 py-1 border-none rounded-md text-white bg-[#090c31]' >Send</button>
                    </form>
                </main>
            </div>
        </>
    )
}

export default Contact;