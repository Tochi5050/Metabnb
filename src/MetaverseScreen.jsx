import React from 'react'
import ScreenOne from './assets/Screen_one_left_top.png'
import ScreenTwo from './assets/Screen_two_left_top.png'
import ScreenThree from './assets/Screen_three_left_top.png'
import ScreenFour from './assets/Screen_four_left_top.png'
import ScreenFive from './assets/Screen_five_left_bottom.png'
import ScreenSix from './assets/Screen_six_left_bottom.png'
import ScreenSeven from './assets/Screen_seven_left_bottom.png'
import ScreenEight from './assets/Screen_eight_left_bottom.png'

const MetaverseScreen = () => {
  return ( 
    <div>
        <h1 className='mt-6 text-center text-[1.8rem] ml-[2.1rem] font-semibold xl:mt-6 xl:text-center xl:text-[3rem] xl:font-semibold font-redrose '>Inspiration for your next adventure</h1>
    <div>
        <div className='ml-[2.9rem] mt-[2rem] flex flex-col md:grid md:grid-cols-2 md:gap-4 justify-between object-cover md:w-[47rem] md:h-[47rem] w-[21rem] h-[21rem] xl:ml-[5.3rem] xl:mt-[4rem] xl:flex xl:flex-row xl:justify-between xl:object-cover xl:w-[22.5rem] xl:h-[22.5rem]'>
          <img src={ScreenOne} className="mr-4 mt-3 xl:mt-0 xl:mr-4"/>
          <img src={ScreenTwo} className="mr-4 mt-3 xl:mt-0 xl:mr-4"/>
          <img src={ScreenThree} className="mr-4 mt-3 xl:mt-0 xl:mr-4"/>
          <img src={ScreenFour} className="mr-4 mt-3 xl:mr-0 xl:mt-0"/>
        </div>

        <div className='ml-[2.9rem] flex flex-col md:grid md:grid-cols-2 md:gap-4 mt-[84rem] md:mt-[3rem] justify-between object-cover md:w-[47rem] md:h-[47rem] w-[21rem] h-[21rem] xl:ml-[5.3rem] xl:mt-[4rem] xl:flex xl:flex-row xl:justify-between xl:object-cover xl:w-[22.5rem] xl:h-[22.5rem]'>
          <img src={ScreenFive} className="mr-4 mt-3 xl:mt-0 xl:mr-4"/>
          <img src={ScreenSix} className="mr-4 mt-3 xl:mt-0 xl:mr-4"/>
          <img src={ScreenSeven} className="mr-4 mt-3 xl:mt-0 xl:mr-4"/>
          <img src={ScreenEight} className="mr-4 mt-3 xl:mr-0 xl:mt-0"/>
        </div>
    </div>
    </div>
  ) 
}

export default MetaverseScreen