import React from 'react'
import Imagelefttop from './assets/search_screen_left_top.png'
import Imageleftbottom from './assets/search_screen_left_bottom.png'
import Imagerighttop from './assets/search_screen_right_top.png'
import Imagerightbottom from './assets/search_screen_right_bottom.png'

const SearchScreen = () => {
  return (
    <div>
        <div className='mt-[6rem] md:mt-[10rem] ml-[2.9rem] text-[1.5rem] md:text-[1.7rem] font-semibold not-italic xl:mt-[6rem] xl:ml-[5.3rem] xl:text-[3.4rem] xl:font-bold xl:not-italic'>
            <div className="flex flex-row xl:flex xl:flex-row font-redrose">Rent a <p className='font-redrose text-[#A02279] ml-[.5rem] mr-[.5rem] xl:text-[#A02279] xl:mr-2 xl:ml-2 '>Place</p> away from</div>
            <div className='flex flex-row xl:flex xl:flex-row'><p className='text-[#A02279] mr-2 xl:text-[#A02279] xl:mr-2 font-redrose'>Home</p> <p className='font-redrose'> in the </p> <p className='font-redrose text-[#A02279] mr-2 ml-2 xl:text-[#A02279] xl:mr-2 xl:ml-2'>Metaverse</p></div>
        </div>
        <div className='font-redrose text-start whitespace-pre-line mt-[1rem] ml-[2.9rem] text-[1.1rem] md:text-[.7rem] font-medium not-italic xl:mt-[2rem] xl:ml-[5.3rem] xl:text-[1.4rem] xl:font-medium xl:not-italic'>
            <p className=' xl:flex xl:flex-row'>we provide you access to luxury and affordable houses</p>
            <p className=' xl:flex xl:flex-row'>in the metaverse, get a chance to turn your</p>
            <p className=' xl:flex xl:flex-row'>imagination to reality at your comfort zone</p>
        </div>
        <div className="flex flex-row xl:flex xl:flex-row">
            <input placeholder='Search for location' className="font-redrose mt-[2rem] ml-[2.9rem] border-t-2 border-l-2 border-b-2 rounded-md px-2 py-2 w-[20rem] xl:mt-[2rem] xl:ml-[5.3rem] xl:border-t-2 xl:border-l-2 xl:border-b-2 xl:rounded-md xl:px-2 xl:py-2 xl:w-[28rem]"/>
            <div className=" font-redrose border-t-2 border-r-2 border-b-2 w-[8rem] h-11 rounded-md mt-8 mr-4 ml-[-8rem] px-[3rem] md:px-[2.5rem] py-2 bg-[#A02279] border-[#A02279] text-white xl:ml-[5.3rem] xl:border-t-2 xl:border-r-2 xl:border-b-2 xl:w-[17rem] xl:h-11 xl:rounded-md xl:mt-8 xl:ml-[-10rem] xl:px-[7rem] xl:py-2 xl:bg-[#A02279] xl:border-[#A02279] xl:text-white">Search</div>
        </div>
        <div className='flex flex-col ml-[2.9rem] md:ml-[25rem] md:mt-[-12rem] mt-[5rem] xl:flex xl:flex-col xl:ml-[48rem] xl:mt-[-19rem]'>
            <div>
            <img src={Imagelefttop} alt="search_screen_left_top" className="rounded-lg  object-cover h-[6rem] w-[9.8rem] mb-4 xl:object-cover xl:h-[11rem] xl:w-[14.6rem] xl:mb-4"/>
            <img src={Imageleftbottom} alt="search_screen_left_bottom" className="rounded-lg object-cover h-[6rem] w-[9.8rem] xl:object-cover xl:h-[11rem] xl:w-[14.6rem]"/>
            </div>
            <div className='ml-[10.5rem] mt-[-16rem] xl:ml-[16rem] xl:mt-[-28rem]'>
            <img src={Imagerighttop} alt="search_screen_right_top" className="rounded-lg object-cover h-[6rem] w-[9.8rem] mb-4 xl:object-cover xl:h-[11rem] xl:w-[14.6rem] xl:mb-4"/>
            <img src={Imagerightbottom} alt="search_screen_right_bottom" className="rounded-lg object-cover h-[6rem] w-[9.8rem] xl:object-cover xl:h-[11rem] xl:w-[14.6rem]"/>
            </div>
        </div>
    </div>
  )
}

export default SearchScreen