import React from 'react'
import { SiShopware } from 'react-icons/si';
import {AiOutlineClose} from 'react-icons/ai'
import {Link, NavLink, useNavigate } from 'react-router-dom'
import { links } from './dummy'
import {FiLogOut} from 'react-icons/fi'

const Sidebar = ({isLOading, setIsLoading}) => {
   const navigate = useNavigate()
  const activeMenue = true;
  /* const activeLink = 'flex items-center gap-5  pt-3 pb-2.5 rounded-lg text-white text-md'
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2' */
  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenue && (<>
      <div className=' flex justify-between items-center '>
        <Link to='/' className='items-center gap-3 ml-3 mt-4 flex font-extrabold text-xl tracking-tight text-slate-900 dark:text-white'>
          <SiShopware/><span>Fabric</span>
        </Link>
        <div className="cursor-pointer mt-4 text-xl p-3 md:hidden hover:bg-light-gray">
          <AiOutlineClose/>
        </div>
        
      </div>
      <div className='mt-10'>
          {links.map(link => (
            <NavLink to={`/${link.name}`}
            key={link.name}
/*             className={({isActive}) => isActive ? activeLink : normalLink  } */
            >
              <div className='flex pl-4 items-center pb-2.5 rounded-lg  text-gray-700 dark:text-gray-400 dark:hover:text-black hover:bg-light-gray m-2'>
              {link.icon}
              <span className='capitalized ml-4'>
                {link.name}
              </span>
              </div>
              
             
            </NavLink>
            
          ))}
          <button onClick={() => setIsLoading(false)}><span><FiLogOut/></span>LogOut</button>
        </div>
        
      </>)}

    </div>
  )
}

export default Sidebar