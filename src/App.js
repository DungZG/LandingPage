import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Slogan from './components/Slogan/Slogan';
import Contents from './components/Content/Content';
import { useEffect } from 'react';
function App() {
  const [windowSize, setWindowsSize] = useState({
    width: undefined,
    height: undefined
  });
  const [isMobile,setMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setWindowsSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);  
  },[]);
useEffect(() => {
  if (windowSize.width < 500) {
    setMobile(true);
  }
  else {
    setMobile(false);
  }
},[windowSize]);
  return (
    <div className='h-screen px-4 py-8 overflow-auto text-black dark:text-white bg-gradient-to-b dark:from-purple-900 dark:to-purple-700 font-sora md:px-20 from-white to-pink-500'>
      <NavBar isMobile={isMobile}/>
      <Slogan />
      <Contents />
    </div>
  );
}

export default App;
