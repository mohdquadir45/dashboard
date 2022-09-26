
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
/* import Navbar from './components/Navbar'; */
 import { Viewer, Editor, Community, Assets, Profile } from './components' 
import Sidebar from './Sidebar';
import Signup from './components/Signup';
import Dashboard from './Dashboard';
function App() {
  const [isLOading, setIsLoading] = useState(false)
 
  return (

    <div>
       {!isLOading && (
        <Signup isLOading={isLOading} setIsLoading={setIsLoading} />
      )}

      {isLOading && (
        <Dashboard isLOading={isLOading} setIsLoading={setIsLoading} />
      )}
       
    </div>
    
        
       /*  <BrowserRouter>
           <div className='flex relative dark:bg-main-dark-bg'>
            {activeMenue ? (
               <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white h-screen'>
              <Sidebar/>
             </div>
            ) : (
              <div className='w-0 dark:bg-secondary-dark-bg'>
                sidebar
              </div>
            
            )}
            <div className={
              `dark:bg-main-bg bg-main-bg min-h-screen w-full
              ${activeMenue ? 'md:ml-72' : 'flex-2'}
              `
            }>

            
            <div>
              <Routes>
                <Route path='/' element={<Viewer/>}/>
                <Route path='/viewer' element={<Viewer/>}/>
                <Route path="/editor" element={<Editor/>}/>
                <Route path='/community' element={<Community/>}/>
                <Route path='/assets' element={<Assets/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/'/>
              </Routes>
            </div>

           </div>
           </div>
          
          </BrowserRouter>
          
      
     */
       
         
      

   
  );
}

export default App;
