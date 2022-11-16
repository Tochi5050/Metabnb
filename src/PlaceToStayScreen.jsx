import React, {useState} from 'react'
import {
  Link
} from "react-router-dom";
import Meta_Building from './assets/meta_building.png'
import Metabnb from './assets/metabnb_logo.png'
import NavBar from './NavBar'
import LocationSettings from './assets/settings.png'
import Footer from './Footer'
import ScreenOne from './assets/Screen_one_left_top.png'
import ScreenTwo from './assets/Screen_two_left_top.png'
import ScreenThree from './assets/Screen_three_left_top.png'
import ScreenFour from './assets/Screen_four_left_top.png'
import ScreenFive from './assets/Screen_five_left_bottom.png'
import ScreenSix from './assets/Screen_six_left_bottom.png'
import ScreenSeven from './assets/Screen_seven_left_bottom.png'
import ScreenEight from './assets/Screen_eight_left_bottom.png'
import ScreenNine from './assets/metaverse_top_left_one.png'
import ScreenTen from './assets/metaverse_top_left_two.png'
import ScreenEleven from './assets/metaverse_top_left_three.png'
import ScreenTwelve from './assets/metaverse_top_left_four.png'
import ScreenThirteen from './assets/metaverse_bottom_left_one.png'
import ScreenFourteen from './assets/metaverse_bottom_left_two.png'
import ScreenFifteen from './assets/metaverse_bottom_left_three.png'
import ScreenSixteen from './assets/metaverse_bottom_left_four.png'
import Modal from 'react-modal'
import ConnectWalletScreen from './ConnectWalletScreen'
import MetaLogo from './assets/meta_building_white.png'
import FacebookLogo from './assets/facebook_logo.png'
import InstagramLogo from './assets/instagram_logo.png'
import TwitterLogo from './assets/twitter_logo.png'
import CopyrightLogo from './assets/copyright_logo.png'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    paddingleft: '-50%',
    transform: 'translate(-50%, -50%)'
  },
};


const PlaceToStayScreen = () => {
  const[modal, setModal] = useState(false)

  const OpenModal = () => {
    setModal(true)
  }

  const CloseModal = () => {
    setModal(false)
  }


  return (
    <div>
        <div className="fixed xl:relative z-30 top-0 left-0 right-0 bg-white overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide py-4 flex flex-row xl:flex xl:flex-row xl:justify-around xl:mt-2">
        <Link to="/"><span className="md:object-cover md:ml-[3rem] md:w-[6rem] md:h-[1rem] md:mt-[2.4rem] cursor-pointer flex flex-row mt-[1.6rem] xl:cursor-pointer xl:flex xl:flex-row xl:mt-[2.1rem] xl:object-cover xl:w-[8rem] xl:h-[1.5rem]"><img src={Meta_Building} alt="meta-building"/><img src={Metabnb} alt="metabnb"/></span></Link>
            <span className="flex flex-row justify-between ml-[3rem] mt-9 font-semibold xl:flex xl:flex-row xl:justify-between xl:mt-9 xl:font-semibold">
            <p className='cursor-pointer mr-[-.8rem] xl:cursor-pointer xl:mr-[19rem] font-redrose'><Link to="/">Home</Link></p>
            <p className="cursor-pointer ml-[3rem] xl:cursor-pointer xl:ml-[-15rem] font-redrose"><Link to="/placetostay">Place to stay</Link></p>
            <p className='cursor-pointer ml-[3rem] xl:cursor-pointer xl:ml-[5rem] font-redrose'>NFTs</p>
            <p className='cursor-pointer ml-[3rem] xl:cursor-pointer xl:ml-[5rem] font-redrose'>Community</p>
            </span>
            <p onClick={OpenModal} className="ml-[2rem] cursor-pointer border-4 rounded-lg hover:bg-[#c9329b] bg-[#A02279] hover:border-[#c9329b] border-[#A02279] px-6 py-1 h-10 mt-6 text-white xl:cursor-pointer xl:border-4 xl:rounded-lg xl:hover:bg-[#c9329b] xl:bg-[#A02279] xl:hover:border-[#c9329b] xl:border-[#A02279] xl:px-6 xl:py-1 xl:h-10 xl:mt-6 xl:text-white font-redrose">Connect wallet</p>
        </div>
     
     <div className='font-redrose px-[3.5rem] xl:px-[5.5rem] fixed xl:relative z-30 xl:z-0 border-t-2 xl:border-t-0 top-0 xl:top-[4rem] left-[-6rem] xl:left-[-5.5rem] right-[-8rem] bg-white overflow-x-scroll xl:overflow-none whitespace-nowrap scroll-smooth scrollbar-hide py-4 font-medium flex flex-row mt-[6rem] ml-[5.3rem] mr-[8rem] xl:font-medium xl:flex xl:flex-row xl:justify-between xl:mt-[1rem] xl:ml-[5.3rem] xl:mr-[-2rem]'>
        <p>Restaurant</p>
        <p className='px-2 xl:px-0'>Cottage</p>
        <p className='px-2 xl:px-0'>Castle</p>
        <p className='px-2 xl:px-0'>Fantast city</p>
        <p className='px-2 xl:px-0'>Beach</p>
        <p className='px-2 xl:px-0'>Cabins</p>
        <p className='px-2 xl:px-0'>Off-grid</p>
        <p className='px-2 xl:px-0'>Farm</p>
        <div className='flex flex-row border rounded-lg w-[32rem] xl:w-[10rem] xl:px-4 px-6 py-2 mt-[-.5rem]'>
            <div>Location</div>
            <img src={LocationSettings} alt="LocationSettings" className='ml-2 px-4 xl:px-4'/>
        </div>
     </div>

     <div className='xl:ml-[5.3rem] ml-[2.8rem] xl:mt-[4rem] mt-[12rem] md:grid md:grid-cols-2 md:gap-2 md:w-[47rem] md:h-[47rem] flex flex-col xl:flex xl:flex-row justify-between object-cover w-[21rem] h-[21rem] xl:w-[22.5rem] xl:h-[22.5rem]'>
          <img src={ScreenFive} className="mr-4 md:mt-3"/>
          <img src={ScreenSix} className="mr-4 xl:mt-0 mt-3 md:mt-3"/>
          <img src={ScreenSeven} className="mr-4 xl:mt-0 mt-3 md:mt-3"/>
          <img src={ScreenEight} className="mr-4 xl:mt-0 mt-3 md:mt-3"/>
        </div>
     
     
     <div className='xl:ml-[5.3rem] ml-[2.8rem] xl:mt-[4rem] mt-[84rem] md:mt-[3rem] md:grid md:grid-cols-2 md:gap-4 md:w-[47rem] md:h-[47rem] flex flex-col xl:flex xl:flex-row justify-between object-cover w-[21rem] h-[21rem] xl:w-[22.5rem] xl:h-[22.5rem]'>
          <img src={ScreenOne} className="mr-4 md:mt-3"/>
          <img src={ScreenTwo} className="mr-4 xl:mt-0 mt-3 md:mt-3"/>
          <img src={ScreenThree} className="mr-4 xl:mt-0 mt-3 md:mt-3"/>
          <img src={ScreenFour} className="mr-4 xl:mt-0 mt-3 md:mt-3"/>
        </div>


        <div className='xl:ml-[5.3rem] ml-[2.8rem] xl:mt-[4rem] mt-[84rem] md:mt-[3rem] md:grid md:grid-cols-2 md:gap-4 md:w-[47rem] md:h-[47rem] flex flex-col xl:flex xl:flex-row justify-between object-cover w-[21rem] h-[21rem] xl:w-[22.5rem] xl:h-[22.5rem]'>
          <img src={ScreenNine} className="mr-4 md:mt-3"/>
          <img src={ScreenTen} className="mr-4 mr-4 xl:mt-0 mt-3 md:mt-3"/>
          <img src={ScreenEleven} className="mr-4 mr-4 xl:mt-0 mt-3 md:mt-3"/>
          <img src={ScreenTwelve} className="mr-4 mr-4 xl:mt-0 mt-3 md:mt-3"/>
        </div>

        <div className='xl:ml-[5.3rem] ml-[2.8rem] xl:mt-[4rem] mt-[84rem] mb-[4rem] md:mt-[3rem] md:grid md:grid-cols-2 md:gap-4 md:w-[47rem] md:h-[47rem] flex flex-col xl:flex xl:flex-row justify-between object-cover w-[21rem] h-[21rem] xl:w-[22.5rem] xl:h-[22.5rem]'>
          <img src={ScreenThirteen} className="mr-4 md:mt-3"/>
          <img src={ScreenFourteen} className="mr-4 xl:mt-0 mt-3 md:mt-3"/>
          <img src={ScreenFifteen} className="mr-4 xl:mt-0 mt-3 md:mt-3"/>
          <img src={ScreenSixteen} className="mr-4 xl:mt-0 mt-3 md:mt-3" />
        </div>

        <div className='md:mt-[5rem] xl:mt-[0rem] mt-[86rem] bg-black w-full xl:bg-black xl:w-full'>

<div>
    <div className='md:ml-[3rem] flex flex-row ml-[.8rem] py-[4rem] xl:flex xl:flex-row xl:ml-[5.3rem] xl:py-[4rem]'>
    <img src={MetaLogo} alt="meta_building" />
    <h1 className='font-bold text-[1rem] text-white xl:font-bold xl:text-[2rem] xl:text-white font-redrose'>Metabnb</h1>
    </div>

    <div className='flex flex-row md:ml-[3rem] ml-[.8rem] xl:flex xl:flex-row xl:ml-[5.3rem]'>
        <img src={FacebookLogo} alt="facebook logo" className='object-cover w-2 h-4 mb-6'/>
        <img src={InstagramLogo} alt="instagram logo" className='ml-[2rem] object-cover w-4 h-4' />
        <img src={TwitterLogo} alt="twitter logo" className='md:object-cover md:w-4 md:h-[.9rem] ml-[2rem] object-cover w-4 h-[.8rem]' />
        
    </div>

    <div className='md:ml-[3rem] flex flex-row ml-[.8rem] xl:flex xl:flex-row xl:ml-[5.3rem]'>
    <img src={CopyrightLogo} alt="copyright logo" className='object-cover w-4 h-[1rem] mt-1' />
    <p className='text-white ml-2 font-redrose'>2022 Metabnb</p>
    </div>

</div>

<div className='text-white md:ml-[16rem] ml-[10rem] mt-[-15rem] flex flex-row py-[4rem] leading-7 xl:text-white xl:ml-[20rem] xl:mt-[-15rem] xl:flex xl:flex-row xl:justify-around xl:py-[4rem] xl:leading-7'>
    <div >
    <h1 className='font-bold md:text-[1rem] text-[.7rem] xl:font-bold xl:text-[1rem] font-redrose'>Community</h1>
    <p className='text-[.5rem] md:text-[.8rem] xl:text-[.8rem] font-redrose'>NFT</p>
    <p className='text-[.5rem] md:text-[.8rem] xl:text-[.8rem] font-redrose'>Tokens</p>
    <p className='text-[.5rem] md:text-[.8rem] xl:text-[.8rem] font-redrose'>Landlords</p>
    <p className='text-[.5rem] md:text-[.8rem] xl:text-[.8rem] font-redrose'>Discord</p>
    </div>
    
    <div className='ml-6 md:ml-[6rem] xl:ml-0'>
    <h2 className='font-bold md:text-[1rem] text-[.7rem] xl:font-bold xl:text-[1rem] font-redrose'>Places</h2>
    <p className='text-[.5rem] md:text-[.8rem] xl:text-[.8rem] font-redrose'>Castle</p>
    <p className='text-[.5rem] md:text-[.8rem] xl:text-[.8rem] font-redrose'>Farms</p>
    <p className='text-[.5rem] md:text-[.8rem] xl:text-[.8rem] font-redrose'>Beach</p>
    <p className='text-[.5rem] md:text-[.8rem] xl:text-[.8rem] font-redrose'>Learn more</p>
    </div>

    <div className='ml-6 md:ml-[6rem] xl:ml-0'>
    <h2 className='font-bold md:text-[1rem] text-[.7rem] xl:font-bold xl:text-[1rem] font-redrose'>About us</h2>
    <p className='text-[.5rem] md:text-[.8rem] xl:text-[.8rem] font-redrose'>Road map</p>
    <p className='text-[.5rem] md:text-[.8rem] xl:text-[.8rem] font-redrose'>Creators</p>
    <p className='text-[.5rem] md:text-[.8rem] xl:text-[.8rem] font-redrose'>Career</p>
    <p className='text-[.5rem] md:text-[.8rem] xl:text-[.8rem] font-redrose'>Contact us</p>
    </div>

</div>
</div>


      <Modal
      isOpen={modal}
      onRequestClose={modal}
      className="md:object-cover md:w-[35rem] md:h-[20rem] ml-[.5rem] xl:-ml:[0rem] object-cover translate-x-[19%] w-[18rem] h-[15rem] xl:h-[21rem] translate-y-[100%] border bg-white rounded-[1rem] xl:top-[50%] xl:left-[54%] xl:right-auto xl:bottom-auto xl:pl-[-50%] xl:translate-x-[76%] xl:translate-y-[47%] xl:rounded-[1rem] xl:border xl:bg-white xl:w-[36rem]"
      >
      <ConnectWalletScreen CloseModal={CloseModal}/> 
      </Modal>
     
        
    </div>

    
  )
}

export default PlaceToStayScreen