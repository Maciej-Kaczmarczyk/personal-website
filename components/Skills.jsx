import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className=" overflow-hidden flex justify-center mt-20 lg:mt-10">
    <div className="flex flex-col lg:flex-row w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-screen-lg xl:max-w-screen-xl items-center  overflow-hidden px-4">
        <div className='flex flex-col gap-12 justify-center items-center w-full h-fit bg-blue-600 rounded-[40px] lg:rounded-[60px] p-6 lg:p-10'>
            <div className='flex flex-col items-center gap-5 lg:gap-10'>
                <h3 className=' uppercase text-white font-semibold text-lg  sm:text-xl md:text-2xl lg:text-3xl'>My technology stack / skills</h3>
                <div className='flex flex-wrap justify-center gap-4 text-sm sm:text-base md:text-lg lg:text-xl'>
                    <div className='bg-white text-blue-600 font-semibold w-fit rounded-full px-5 py-1 uppercase'>HTML5</div>
                    <div className='bg-white text-blue-600 font-semibold w-fit rounded-full px-5 py-1 uppercase'>css3</div>
                    <div className='bg-white text-blue-600 font-semibold w-fit rounded-full px-5 py-1 uppercase'>javascript</div>
                    <div className='bg-white text-blue-600 font-semibold w-fit rounded-full px-5 py-1 uppercase'>react</div>
                    <div className='bg-white text-blue-600 font-semibold w-fit rounded-full px-5 py-1 uppercase'>mysql</div>
                    <div className='bg-white text-blue-600 font-semibold w-fit rounded-full px-5 py-1 uppercase'>git</div>
                    <div className='bg-white text-blue-600 font-semibold w-fit rounded-full px-5 py-1 uppercase'>ui/ux</div>
                    <div className='bg-white text-blue-600 font-semibold w-fit rounded-full px-5 py-1 uppercase'>rwd</div>
                    <div className='bg-white text-blue-600 font-semibold w-fit rounded-full px-5 py-1 uppercase'>rest api</div>

                </div>
            </div>
            <div className='flex flex-col items-center gap-5 lg:gap-10'>
                <h3 className=' uppercase text-white font-semibold text-lg  sm:text-xl md:text-2xl lg:text-3xl'>software i use</h3>
                <div className='flex flex-wrap justify-center gap-4 text-sm sm:text-base md:text-lg lg:text-xl'>
                    <div className='bg-white text-blue-600 font-semibold w-fit rounded-full px-5 py-1 uppercase'>figma</div>
                    <div className='bg-white text-blue-600 font-semibold w-fit rounded-full px-5 py-1 uppercase'>adobe illustrator</div>
                    <div className='bg-white text-blue-600 font-semibold w-fit rounded-full px-5 py-1 uppercase'>adobe photoshop</div>
                    <div className='bg-white text-blue-600 font-semibold w-fit rounded-full px-5 py-1 uppercase'>adobe premier pro</div>
                    <div className='bg-white text-blue-600 font-semibold w-fit rounded-full px-5 py-1 uppercase'>adobe affter effects</div>
                    <div className='bg-white text-blue-600 font-semibold w-fit rounded-full px-5 py-1 uppercase'>adobe lightroom</div>


                </div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Skills