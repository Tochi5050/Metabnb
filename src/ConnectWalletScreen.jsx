import React from 'react'
import Metamask from './assets/metamask_.png'
import WalletConnect from './assets/wallet_connect.png'

const ConnectWalletScreen = ({CloseModal}) => {
  return (
    <div>
      <div >
       <div className=' mt-[.5rem] border-gray-900 rounded-lg h-[20.4rem] w-[37.5rem] ml-[-1rem] mb-[-1rem] leading-[4rem] xl:mt-[.5rem] xl:border-gray-900 xl:rounded-lg xl:h-[20.4rem] xl:w-[37.5rem] xl:ml-[-1rem] xl:mb-[-1rem] xl:leading-[4rem]'>
        <div className='flex flex-row ml-[2rem] xl:flex xl:flex-row xl:ml-[2rem] xl:justify-between'>
            <p className='font-semibold text-[1rem] ml-[.5rem] mt-[-1rem] xl:mt-[0rem] xl:ml-[0rem] xl:font-semibold xl:text-[1.4rem] font-redrose'>Connect Wallet</p>
            <p onClick={CloseModal} className='cursor-pointer font-semibold mr-[2rem] ml-[6rem] text-[1rem] text-gray-500 mt-[-1rem] xl:mt-[0rem] xl:cursor-pointer xl:font-semibold xl:mr-[2rem] xl:text-[1.4rem] xl:text-gray-500 xl:ml-[0rem]'>X</p>
        </div>

        <div className='border-b-[.2rem] ml-[1rem] mr-[18.6rem] xl:border-b-[.2rem] mt-[-1rem] xl:mt-[0rem] xl:ml-[1rem] xl:mr-[.6rem]'></div>

        <div className='ml-[2rem]'>
            <p className='text-[.7rem] ml-[.5rem] mt-[-1rem] xl:mt-[0rem] xl:text-[.9rem] xl:ml-[0rem] font-redrose'>Choose your preferred wallet:</p>
            <div onClick={CloseModal} className='cursor-pointer flex flex-row border-2 rounded-lg ml-[.5rem] w-[15rem] mt-[-1rem] xl:mt-[0rem] xl:cursor-pointer xl:flex xl:flex-row xl:border-2 xl:rounded-lg xl:ml-[0rem] xl:w-[34rem]'>
                <img src={Metamask} alt="metamask" className='object-cover w-[2rem] h-[2rem] mt-4 ml-4'/>
                <p className='font-bold text-[1rem] ml-3 xl:font-bold xl:text-[1.2rem] xl:ml-3 font-redrose'>Metamask</p>
                <div className='text-[1.8rem] text-gray-300 ml-[3.5rem] mt-[-.2rem] xl:mt-[0rem] xl:text-[1.8rem] xl:text-gray-300 xl:ml-[22rem]'>&gt;</div>
            </div>

            <div onClick={CloseModal} className='cursor-pointer flex flex-row border-2 rounded-lg ml-[.5rem] w-[15rem] mt-4 xl:cursor-pointer xl:flex xl:flex-row xl:border-2 xl:rounded-lg xl:ml-[0rem] xl:w-[34rem] xl:mt-4'>
            <img src={WalletConnect} alt="walletconnect" className='object-cover w-[2rem] h-[2rem] mt-4 ml-4' />
            <p className='font-bold text-[1rem] ml-3 xl:font-bold xl:text-[1.2rem] xl:ml-3 font-redrose'>WalletConnect</p>
            <div className='text-[1.8rem] text-gray-300 ml-[1.5rem] mt-[-.2rem] xl:mt-[0rem] xl:text-[1.8rem] xl:text-gray-300 xl:ml-[19.4rem]'>&gt;</div>
            </div>

        </div>
        </div> 
        </div>
    </div>
  )
}

export default ConnectWalletScreen