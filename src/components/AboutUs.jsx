import React from 'react'
import f3 from "../assets/f3.webp"


const AboutUs = () => {
  return (
    <div className="relative">
      <div className=" bg-n-1 px-10 justify-center ">
        <div className="flex flex-col px-5 lg:text-left lg:flex-row py-5 ">
          <div id="Intro" className="w-full text-center lg:text-left lg:pl-[10%] lg:mr-[10%] lg:mt-5">
            <h1 className="font-bold mt-20 mb-10 text-5xl text-n-4 leading-loose">Health Fanatic</h1>
            <p className="text-n-3 text-xl mb-10 leading-relaxed">
            Welcome to Health Fanatics—your premier online destination for athlete-centered fitness, nutrition, and wellness. Tailored specifically for athletes, Health Fanatics offers expert workout plans, in-depth exercise guides, and personalized nutrition advice to help you unlock your full potential.

            Whether you're an aspiring athlete seeking to enhance your routine or a seasoned professional fine-tuning your regimen, Health Fanatics equips you with the resources and tools needed to reach your fitness goals and sustain a healthy, balanced lifestyle.
            </p>
          </div>

          <div className="w-full relative overflow-hidden md:pl-[2%] md:pr-[5%]" >
            <div className="absolute inset-0 -m-5 bg-n-2"> </div>
              <img
                src={f3}
                alt="Salah"
                className="mt-10 mb-5 relative border-black border-2 z-10"
              >
              </img>
          </div>

        </div>
      </div>

      </div>
      
  )
}

export default AboutUs;