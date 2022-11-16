import React, { Fragment } from 'react'
import Meta_Building from './assets/meta_building.png'
import Metabnb from './assets/metabnb_logo.png'
import {
  Link
} from "react-router-dom";

const NavBar = ({OpenModal}) => {
 return (
    <div>
        <div className="fixed xl:relative z-30 top-0 left-0 right-0 bg-white overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide py-4 flex flex-row xl:flex xl:flex-row xl:justify-around xl:mt-2">
        <Link to="/"><span className="cursor-pointer flex flex-row mt-[1.6rem] md:object-cover md:ml-[3rem] md:w-[6rem] md:h-[1rem] md:mt-[2.4rem] xl:cursor-pointer xl:flex xl:flex-row xl:mt-[2.1rem] xl:object-cover xl:w-[8rem] xl:h-[1.5rem]"><img src={Meta_Building} alt="meta-building"/><img src={Metabnb} alt="metabnb"/></span></Link>
            <span className="flex flex-row justify-between ml-[3rem] mt-9 font-semibold xl:flex xl:flex-row xl:justify-between xl:mt-9 xl:font-semibold">
            <p className='cursor-pointer mr-[-.8rem] xl:cursor-pointer xl:mr-[19rem] font-redrose'><Link to="/">Home</Link></p>
            <p className="cursor-pointer ml-[3rem] xl:cursor-pointer xl:ml-[-15rem] font-redrose"><Link to="/placetostay">Place to stay</Link></p>
            <p className='cursor-pointer ml-[3rem] xl:cursor-pointer xl:ml-[5rem] font-redrose'>NFTs</p>
            <p className='cursor-pointer ml-[3rem] xl:cursor-pointer xl:ml-[5rem] font-redrose'>Community</p>
            </span>
            <p onClick={OpenModal} className="ml-[2rem] cursor-pointer border-4 rounded-lg hover:bg-[#c9329b] bg-[#A02279] hover:border-[#c9329b] border-[#A02279] px-6 py-1 h-10 mt-6 text-white xl:cursor-pointer xl:border-4 xl:rounded-lg xl:hover:bg-[#c9329b] xl:bg-[#A02279] xl:hover:border-[#c9329b] xl:border-[#A02279] xl:px-6 xl:py-1 xl:h-10 xl:mt-6 xl:text-white font-redrose">Connect wallet</p>
        </div>
    </div>
  )
}

export default NavBar