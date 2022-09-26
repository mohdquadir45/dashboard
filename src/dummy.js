

 import { FaPlayCircle } from 'react-icons/fa'
 import { FaFlask } from 'react-icons/fa'
 import { BsFillHeartFill } from 'react-icons/bs'
 import { SiGooglemessages } from 'react-icons/si'
 import { ImProfile } from 'react-icons/im'
 import { FiLogOut } from 'react-icons/fi'
 
 
 export const links = [
     {
         name:'Viewer',
         icon :<FaPlayCircle/>
 
     },
     {
         name:'Editor',
         icon:<FaFlask/>,
     },
     {
         name:'Community',
         icon : <BsFillHeartFill/>
     },
     {
         name:'Assets',
         icon: <SiGooglemessages/>
     },
     {
         name:'Profile',
         icon:<ImProfile/>
     },
     /* {
         name:'Log out',
         icon:<FiLogOut/>
     } */
 ]