import React, { useContext } from 'react'
import './ChatSection.css'
import Darkmode from '../Darkmode/Darkmode'
import { IoSend } from "react-icons/io5";
import { dataContext } from '../../context/UserContext';
import user from '../../assets/user.png'
import ai from '../../assets/ai.png'

function ChatSection() {
  let {sent,input,setInput,showResult,resultData,recentPrompt,loading}=useContext(dataContext)
  return (
    <div className='chatsection'>
    
      <div className='topsection'>
      {!showResult?<div className='heading'>
          <span>HELLO BANI,</span>
          <span>I'm your own Assistant</span>
          <span>What can i help u</span>
        </div>:<div className='result'>
          <div className='userbox'>
            <img src={user} width="60px"/>
            <p >{recentPrompt}</p>
          </div>
          <div className='aibox'>
            <img src={ai} width="60px"/>
            {loading?<div className='loader'>
              <hr/>
              <hr/>
              <hr/>
            </div>:<p >{resultData}</p>}
          </div>
        </div>}
        
      </div>
      <div className='bottomsection'>
        <input onChange={(event)=>{
          setInput(event.target.value)
        }} value={input} type='text' placeholder='Enter a prompt'/>
        {input?<button id='sendbtn' onClick={()=>{
           sent(input);
        }}><IoSend /></button>:""}
        
        <Darkmode/>
      </div>
    </div>
  )
}

export default ChatSection
