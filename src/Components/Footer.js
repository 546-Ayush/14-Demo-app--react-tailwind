import React from 'react'

function Footer() {
  return (
    <>
        <footer className='w-full h-[200px] py-4 px-16 bg-white text-[rgb(44, 44, 44)] flex justify-between items-center '>
            <div>
                <h1 className='uppercase text-2xl font-semibold text-[#585388] '>Company</h1>
                <p>@all rights reserved</p>
            </div> 

            <div>
                <h5 className='my-1 text-center text-xl font-medium '>Follow us :</h5>
                <div className='flex flex-col justify-center items-center '>
                    <a className='hover:text-rose-800 hover:font-semibold' href="https://leetcode.com/ayushsoni546/" target='blank'>Leetcode</a>
                    <a className='hover:text-rose-800 hover:font-semibold' href="https://github.com/546-Ayush" target='blank'>Github</a>
                    <a className='hover:text-rose-800 hover:font-semibold' href="https://youtube.com" target='blank'>Youtube</a>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer;