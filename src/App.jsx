import { useContext, useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Separation from './components/Separation/Separation'
import ChatSection from './components/ChatSection/ChatSection'
import { dataContext } from './context/UserContext'

function App() {
  let data=useContext(dataContext)


  return (
    <>
      <Sidebar/>
      <Separation/>
      <ChatSection/>
    </>
  )
}

export default App
