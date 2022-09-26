import React from 'react'

import profile from './asset/profile.png'
const Profile = () => {
  return (
    <div className=''>
      <div className='mt-16' >
        <h1 className=' text-3xl font-extrabold' style={{justifyContent:'center', alignItems:'center', display:'flex'}}>User Profile</h1>
      </div>
      <div className='rounded-lg border-500 bg-slate-400 mx-28'>
      <div className='flex ml-28 mt-8'>
        <div style={{height:'320px', width:'320px'}}>
          <img className=' h-75 w-auto' src={profile} alt=""/>
        </div>
      
        <div className='mt-12  mb-8  border-500 grid gap-x-8 gap-y-4 grid-cols-2 bg-slate-500 rounded-lg' style={{width:'500px'}}>
          
           <div className='ml-4 mt-4 text-white'>Name</div>
           <div className='mt-4 text-white'>Mohammed Quadir</div>
           <div className='ml-4 text-white'>Email</div>
           <div className='text-white'>mohdquadir45@gmail.com</div>
           <div className='ml-4 text-white'>Client ID</div>
           <div className='text-white'>7</div>
           <div className='ml-4 text-white'>Client Name</div>
           <div className='text-white'>Default Client</div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Profile