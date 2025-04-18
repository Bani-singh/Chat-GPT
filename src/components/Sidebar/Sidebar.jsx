import React, { useContext } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { useState } from 'react';
import './Sidebar.css'
import { dataContext } from '../../context/UserContext';

function Sidebar() {
    const [extend, setExtend] = useState(false)
    const {sent,prevPrompt,newChat}=useContext(dataContext);
    async function loadPrevPrompt(prompt) {
      sent(prompt)
    }
  return (
    <div className='sidebar'>
      <GiHamburgerMenu id='ham' onClick={()=>{
        setExtend(prev=>!prev)
      }}/>
      <div className='newchat' onClick={()=>{
        newChat()
      }}>
      <FaPlus />
      {extend?<p>New Chat</p>:""}
      </div>
      {prevPrompt.map((item,index)=>{
        return (
          <div className='recent' onClick={()=>{
            loadPrevPrompt(item)
          }}>
        <FaRegMessage />
        {extend?<p>{item.slice(0,19)+"...."}</p>:""}
      </div>
        )
      })}
      
    </div>
  )
}

export default Sidebar
