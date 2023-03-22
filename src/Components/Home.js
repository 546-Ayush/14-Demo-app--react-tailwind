import React from 'react';
import vg from '../assets/2.webp';
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
 
function Home() {
  return (
    <>
      <div id='home' className='w-full h-screen bg-[#090c31]'>
        <main className='uppercase flex justify-center flex-col items-end absolute w-full h-full p-5 '>
          <h1 className='text-white text-8xl font-normal'>Developer</h1>
          <p className='text-white text-base font-black'>Solution to all your problem</p>
        </main>
      </div>


      <div className='w-full h-full bg-rose-700 py-[50px] flex justify-center items-center'>
        <img src={vg} alt="Graphics" className='w-1/3 transition duration-75 ease-linear animate-bounce translate-y-2 ' />

        <div className='w-1/2 h-full flex flex-col justify-center items-center p-20' >
          <p className='text-white font-medium leading-7'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi dolor impedit sit, itaque id quia.
            Tempora ratione minus ea harum veniam nobis nihil aperiam fugit nostrum recusandae molestias fuga,
            laudantium iste asperiores et, provident, sed explicabo corrupti doloremque! Voluptate, cupiditate!
          </p>
        </div>
      </div>


      <div id='about' className='w-full py-10 h-screen bg-[#090c31] flex '>
        <div className='w-2/3 pl-8 h-full bg-white flex flex-col justify-center items-center border-9 rounded-r-[200px]'>
          <h1 className='text-3xl uppercase font-medium mb-8 border-b-2 border-black'>Who we are</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dignissimos dicta assumenda, soluta optio
            laudantium inventore facilis fuga?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dignissimos dicta assumenda, soluta optio
            laudantium inventore facilis fuga?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dignissimos dicta assumenda, soluta optio
            laudantium inventore facilis fuga?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dignissimos dicta assumenda, soluta optio
            laudantium inventore facilis fuga?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dignissimos dicta assumenda, soluta optio
            laudantium inventore facilis fuga?
          </p>
        </div> 
      </div>


      <div id='brands' className='w-full h-screen py-10 bg-rose-700 flex justify-end items-center'>
        <div className='w-9/12 h-[70vh]  bg-[#090c31] color-white border-0 rounded-l-[200px] flex flex-col justify-center items-center '>
          <h1 className='mb-8 uppercase text-white text-3xl border-b-2 border-white'>Brands</h1>

          <article className='my-4 flex flex-wrap justify-center'>
            <div className='animate-bounce ease-linear delay-200 mr-8 flex flex-col justify-center items-center bg-white px-2 py-3 border-0 rounded-2xl cursor-pointer transition-all hover:text-white hover:bg-rose-700'>
              <AiFillGoogleCircle className='text-3xl'/>
              <p className='text-xl'>Google</p>
            </div>

            <div className='animate-bounce ease-linear delay-300 mr-8 flex flex-col justify-center items-center bg-white px-2 py-3 border-0 rounded-2xl cursor-pointer transition-all hover:text-white hover:bg-rose-700'>
              <AiFillAmazonCircle className='text-3xl'/>
              <p className='text-xl'>Amazon</p>
            </div>

            <div className='animate-bounce ease-linear delay-75 mr-8 flex flex-col justify-center items-center bg-white px-2 py-3 border-0 rounded-2xl cursor-pointer transition-all hover:text-white hover:bg-rose-700'>
              <AiFillYoutube className='text-3xl'/>
              <p className='text-xl'>YouTube</p>
            </div>

            <div className='animate-bounce ease-linear delay-150 mr-8 flex flex-col justify-center items-center bg-white px-2 py-3 border-0 rounded-2xl cursor-pointer transition-all hover:text-white hover:bg-rose-700'>
              <AiFillInstagram className='text-3xl'/>
              <p className='text-xl'>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Home;