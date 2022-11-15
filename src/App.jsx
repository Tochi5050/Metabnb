import { useState } from 'react'
import Modal from 'react-modal'
import NavBar from './NavBar'
import SearchScreen from './SearchScreen'
import TokenSection from './TokenSection'
import MetaverseScreen from './MetaverseScreen'
import MetaNftScreen from './MetaNftScreen'
import Footer from './Footer'
import ConnectWalletScreen from './ConnectWalletScreen'

import {
  Routes,
  BrowserRouter,
  Route
} from "react-router-dom";


const customStyles = {
  content: {
    top: '50%',
    left: '54%',
    right: 'auto',
    bottom: 'auto',
    paddingleft: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '2rem'
    
  },
  
};

function App() {
  const[modal, setModal] = useState(false)

  const OpenModal = () => {
    setModal(true)
  }

  const CloseModal = () => {
    setModal(false)
  }

  return (
    <div className="App">
    
    
      <NavBar OpenModal={OpenModal} />
      <SearchScreen />
      <TokenSection />
      <MetaverseScreen/> 
      <MetaNftScreen />
      <Footer />
      <Modal
      isOpen={modal}
      onRequestClose={modal}
      className="ml-[.5rem] xl:-ml:[0rem] object-cover translate-x-[19%] w-[18rem] h-[15rem] xl:h-[21rem] translate-y-[100%] border bg-white rounded-[1rem] xl:top-[50%] xl:left-[54%] xl:right-auto xl:bottom-auto xl:pl-[-50%] xl:translate-x-[76%] xl:translate-y-[47%] xl:rounded-[1rem] xl:border xl:bg-white xl:w-[36rem]"
      
      >
      <ConnectWalletScreen CloseModal={CloseModal}/> 
      </Modal>
     
    
    </div>
  )
}

export default App
