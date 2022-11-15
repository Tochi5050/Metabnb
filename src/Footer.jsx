import React from 'react'
import MetaLogo from './assets/meta_building_white.png'
import FacebookLogo from './assets/facebook_logo.png'
import InstagramLogo from './assets/instagram_logo.png'
import TwitterLogo from './assets/twitter_logo.png'
import CopyrightLogo from './assets/copyright_logo.png'

const Footer = () => {
  return (
<div>

    <div className='bg-black w-full xl:bg-black xl:w-full'>

    <div>
        <div className='flex flex-row ml-[.8rem] py-[4rem] xl:flex xl:flex-row xl:ml-[5.3rem] xl:py-[4rem]'>
        <img src={MetaLogo} alt="meta_building" />
        <h1 className='font-bold text-[1rem] text-white xl:font-bold xl:text-[2rem] xl:text-white font-redrose'>Metabnb</h1>
        </div>

        <div className='flex flex-row ml-[.8rem] xl:flex xl:flex-row xl:ml-[5.3rem]'>
            <img src={FacebookLogo} alt="facebook logo" className='object-cover w-2 h-4 mb-6'/>
            <img src={InstagramLogo} alt="instagram logo" className='ml-[2rem] object-cover w-4 h-4' />
            <img src={TwitterLogo} alt="twitter logo" className='ml-[2rem] object-cover w-4 h-[.8rem]' />
            
        </div>

        <div className='flex flex-row ml-[.8rem] xl:flex xl:flex-row xl:ml-[5.3rem]'>
        <img src={CopyrightLogo} alt="copyright logo" className='object-cover w-4 h-[1rem] mt-1' />
        <p className='text-white ml-2 font-redrose'>2022 Metabnb</p>
        </div>

    </div>
 
    <div className='text-white ml-[10rem] mt-[-15rem] flex flex-row py-[4rem] leading-7 xl:text-white xl:ml-[20rem] xl:mt-[-15rem] xl:flex xl:flex-row xl:justify-around xl:py-[4rem] xl:leading-7'>
        <div >
        <h1 className='font-bold text-[.7rem] xl:font-bold xl:text-[1rem] font-redrose'>Community</h1>
        <p className='text-[.5rem] xl:text-[.8rem] font-redrose'>NFT</p>
        <p className='text-[.5rem] xl:text-[.8rem] font-redrose'>Tokens</p>
        <p className='text-[.5rem] xl:text-[.8rem] font-redrose'>Landlords</p>
        <p className='text-[.5rem] xl:text-[.8rem] font-redrose'>Discord</p>
        </div>
        
        <div className='ml-6 xl:ml-0'>
        <h2 className='font-bold text-[.7rem] xl:font-bold xl:text-[1rem] font-redrose'>Places</h2>
        <p className='text-[.5rem] xl:text-[.8rem] font-redrose'>Castle</p>
        <p className='text-[.5rem] xl:text-[.8rem] font-redrose'>Farms</p>
        <p className='text-[.5rem] xl:text-[.8rem] font-redrose'>Beach</p>
        <p className='text-[.5rem] xl:text-[.8rem] font-redrose'>Learn more</p>
        </div>

        <div className='ml-6 xl:ml-0'>
        <h2 className='font-bold text-[.7rem] xl:font-bold xl:text-[1rem] font-redrose'>About us</h2>
        <p className='text-[.5rem] xl:text-[.8rem] font-redrose'>Road map</p>
        <p className='text-[.5rem] xl:text-[.8rem] font-redrose'>Creators</p>
        <p className='text-[.5rem] xl:text-[.8rem] font-redrose'>Career</p>
        <p className='text-[.5rem] xl:text-[.8rem] font-redrose'>Contact us</p>
        </div>

    </div>
    </div>
  
</div>
  )
}

export default Footer