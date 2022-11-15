import React from 'react'
import MBToken from './assets/Token.png'
import MBText from './assets/MBToken.png'
import Metamask from './assets/Metamask.png'
import OpenseaToken from './assets/openseatoken.png'



const TokenSection = () => {
  return (
    <div className='[width: calc(250px * 3)] [perspective: 100px] flex flex-row justify-around bg-[#A02279] mt-[6rem] xl:flex xl:flex-row xl:justify-around xl:bg-[#A02279] xl:mt-[8rem]'>

    <div className='animate-scroll xl:animate-none flex flex-row mt-[-.3rem] py-[1rem] xl:flex xl:flex-row xl:py-2'>
      <img src={MBToken} alt="MBToken" className='object-cover h-[1.5rem] w-[1.5rem] mt-3 xl:object-cover xl:h-[3rem] xl:w-[3rem] xl:mt-5' />
      <p className='text-[1rem] mt-[.75rem] text-white xl:text-[2.5rem] xl:text-white'>MBToken</p>
    </div> 

    <div className='animate-scroll xl:animate-none flex flex-row mt-[-.3rem] py-[1rem] xl:flex xl:flex-row xl:py-2'>
      <img src={Metamask} alt="Metamask" className="object-cover h-[1.5rem] w-[1.5rem] mt-3 xl:object-cover xl:h-[2.5rem] xl:w-[2.5rem] xl:mt-5"/>
      <p className='text-[1rem] ml-1 mt-3 text-white xl:text-[2.5rem] xl:text-white'>Metamask</p>
    </div> 

    <div className='animate-scroll xl:animate-none flex flex-row mt-[-.3rem] py-[1rem] xl:flex xl:flex-row xl:py-2'>
      <img src={OpenseaToken} alt="OpenseaToken" className="object-cover h-[1.5rem] w-[1.5rem] mt-3 xl:object-cover xl:h-[2.5rem] xl:w-[2.5rem] xl:mt-5"/>
      <p className='text-[1rem] mt-3 ml-1 text-white xl:text-[2.5rem] xl:text-white'>OpenSea</p>
    </div>

    </div>
  )
}

export default TokenSection