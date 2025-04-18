import React from 'react'
import { useState,useEffect } from 'react'
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import './Darkmode.css'
function Darkmode() {

    const [mode, setMode] = useState("dark-mode")
    function toogle(){
        if(mode==="dark-mode"){
            setMode("light-mode")
        }
        else{
            setMode("dark-mode")
        }    
    }
    useEffect(() => {
        document.body.className=mode;
    }, [mode])
    
  return (
    <button className='darkmodebtn' onClick={()=>{
        toogle();
    }}>{mode==="dark-mode"?<CiLight />:<FaMoon />}</button>
  )
}

export default Darkmode
