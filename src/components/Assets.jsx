import React from 'react'
import { CgPlayListSearch } from 'react-icons/cg'
import { AiOutlinePlus } from 'react-icons/ai'

const Assets = () => {
  return (
    <div>
      <div className='mt-8'>
        <h1 style={{justifyContent:'center', alignItems:'center', display:'flex'}} className="text-2xl font-extrabold">Assets</h1>
      </div>
      <div className='flex items-center border  border-indigo-600 h-10 rounded-lg mt-4 p-4 mx-8'>
        <CgPlayListSearch className='text-3xl'/>
        <input placeholder='Search' className='focus:outline-none w-full'/>
      </div>
      <div className=' z-1000 rounded w-auto m-8 bg-slate-300   border  border-600' style={{height:'75vh',/*  backgroundColor:'#242424' */}}>
        <div style={{height:'92%'}} className='bg-slate-200 rounded m-5' >
        <div className='mr-8 mt-6 overscroll-auto'>
          <table className='w-full mt-6 '>
            <thead className='bg-slate-200 border-b-3  border-b-1 border-indigo-600'>
              <tr>
                <th>Name</th>
                <th>File Type</th>
                <th>CPD Access Level</th>
                <th>Uploaded Time</th>
                <th><button className='bg-sky-500/75 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type='botton'><AiOutlinePlus /></button></th>
              </tr>
            </thead>
          </table>
        </div>
       
        </div>
      </div>
    </div>
  )
}

export default Assets