import React from 'react';
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';

function Header() {
  return ( 
    <>
        <nav className='w-full flex justify-between py-3 px-6 sticky top-0 z-10 bg-white '>
            <h1 className='uppercase text-2xl font-semibold'>Anything</h1>

            <main className='w-9/12 flex justify-end'>
                <HashLink className='ml-3 font-medium hover:text-[#4837e0]' to={'/#home'}>Home</HashLink>
                <Link className='ml-3 font-medium hover:text-[#4837e0]' to={'/contact'} >Contact</Link>
                <HashLink className='ml-3 font-medium hover:text-[#4837e0]' to={'/#about'} >About</HashLink>
                <HashLink className='ml-3 font-medium hover:text-[#4837e0]' to={'/#brands'} >Brands </HashLink>
                <Link className='ml-3 font-medium hover:text-[#4837e0]' to={'/services'} >Services</Link>
            </main>
        </nav>
    </> 
  )
}

export default Header