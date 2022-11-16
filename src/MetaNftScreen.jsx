import React from 'react'
import NFTImage from './assets/nft_triple_images.png'
const MetaNftScreen = () => {
  return (
    <div>

      <div className='mt-[85rem] md:mt-[5rem] xl:h-[42rem] md:h-[24rem] h-[37rem] bg-[#A02279] w-full xl:bg-[#A02279] xl:w-full xl:mt-[3rem]'>
       <div className='ml-[5.3rem] py-[10rem] xl:ml-[8rem] xl:py-[10rem]'>

        <h1 className='font-bold text-[1.8rem] mt-[-6rem] ml-[-1.8rem] text-white font-mono mb-8 xl:font-bold xl:text-[3rem] xl:mt-0 xl:ml xl:text-white xl:mb-8 font-redrose'>Metabnb NFTs</h1>

        <p className='ml-[-1.8rem] font-medium text-[.8rem] text-white xl:ml-[-1.8rem xl:font-medium xl:text-[1.2rem] xl:text-white font-redrose'>Discover our NFT gift cards collection. Loyal</p>
        <p className='ml-[-1.8rem] font-medium text-[.8rem] text-white xl:ml-[-1.8rem xl:font-medium xl:text-[1.2rem] xl:text-white font-redrose'>customers gets amazing gift cards which are</p>
        <p className='ml-[-1.8rem] font-medium text-[.8rem] text-white xl:ml-[-1.8rem xl:font-medium xl:text-[1.2rem] xl:text-white font-redrose'>traded as NFTs. These NFTs gives our customer</p>
        <p className='ml-[-1.8rem] font-medium text-[.8rem] text-white xl:ml-[-1.8rem xl:font-medium xl:text-[1.2rem] xl:text-white font-redrose'>access to loads of our exclusive services</p>

        <div className='border-white rounded-lg bg-white text-[.9rem] text-[#A02279] px-[2rem] py-0.5 mt-[2rem] w-[10rem] ml-[-1.8rem] font-redrose xl:border-white xl:rounded-lg xl:bg-white xl:text-[1rem] xl:text-[#A02279] xl:px-[2rem] xl:py-2 xl:mt-[3.5rem] xl:w-[10rem] xl:ml-[0rem]'>Learn more</div>

        </div>

        <div className='ml-[7rem] md:ml-[26rem] mt-[-13rem] md:mt-[-34rem] md:py-[10rem] object-cover w-[16rem] h-[16rem] md:object-cover md:w-[20rem] md:h-[20rem] py-[6rem] xl:ml-[40rem] xl:mt-[-40rem] xl:py-[6rem] xl:object-cover xl:w-[35rem] xl:h-[35rem]'>
            <img src={NFTImage} alt="nft" className='ml-[-3.5rem] md:ml-[-2.7rem] xl:ml-[0rem]'/>
        </div>

        </div>

    </div>
  )
}

export default MetaNftScreen