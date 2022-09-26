import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import { HiMenu } from 'react-icons/hi'
import { CgMenuGridR } from 'react-icons/cg'
const Community = () => {
  return (
    <div>
      <div>
        <h1 className=' flex justify-center items-center  text-2xl mt-8'>Community</h1>
        <p className='flex justify-center items-center mt-6 text-xl'>Ideas of the open world</p>
      </div>
      <div style={{display:'flex', justifyContent:'space-between', marginTop:'80px'}} className='mx-8'>
      <div className='flex border border-indigo-600 h-10 w-1/2 items-center rounded-lg text-gray-700'>
      <HiOutlineSearch className='ml-3'/>
      <input placeholder='Search' className='focus:outline-none w-full  ml-2'/>
      </div>
      <div style={{display:'flex', }} className='rounded-r-lg' >
      <button className='text-3xl mr-3 border-t-4 border-indigo-500 border-l-4 border-indigo-500 border-b-4 border-indigo-500 bg-blue-500 active:bg-blue-600 pl-2 pr-2 rounded-lg' ><HiMenu/></button><button className='text-3xl rounded-lg  border-t-4 border-indigo-500 border-r-4 border-indigo-500 border-b-4 border-indigo-500 bg-blue-500 active:bg-blue-600 pr-2 pl-2'><CgMenuGridR/></button>
   
    </div>
      </div>
    </div>
  )
}

export default Community