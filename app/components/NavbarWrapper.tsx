'use client';

import burger from "../images/burger.png";
import {useState, useEffect, useRef} from 'react';

export default function NavbarWrapper({...props}){
  
  const [navbarHidden, setNavbarHidden] = useState(true)

  function handleClick(){
    setNavbarHidden(!navbarHidden);
  }

  useEffect(()=>{
    console.log(burger);
  }, [navbarHidden]);

  const burgerCSS = `float-start rounded-full block bg-center bg-contain sm:hidden w-[70px] h-[70px] my-[-35px] trasition-all duration-75 ${navbarHidden ? "" : "rotate-180"}`

  return (
    <div>
        <button
        style={{
          backgroundImage: `url("${burger.src}")`
        }}
      className={burgerCSS} onClick={handleClick}></button>
      <div className={navbarHidden ? "hidden sm:block" : "block"}>
        {props.children}
      </div>
    </div>
  )
}