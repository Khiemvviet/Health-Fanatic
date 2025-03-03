import React from 'react'
import f3 from "../assets/f3.webp"


const AboutUs = () => {
  return (
    <div className="relative">
      <div className=" bg-n-1 px-10 justify-center ">
        <div className="flex flex-col px-5 lg:text-left lg:flex-row py-5 ">
          <div id="Intro" className="w-full text-center lg:text-left lg:pl-[10%] lg:mr-[10%] lg:mt-5">
            <h1 className="font-bold mt-20 mb-10 text-5xl text-n-4 leading-loose">Winning Formula</h1>
            <p className="text-n-3 text-xl mb-10 leading-relaxed">
            Welcome to Winning Formula—your ultimate online destination for athlete-focused fitness and wellness. Designed with athletes in mind, Winning Formula combines comprehensive workout plans, expert exercise guides, and tailored nutrition advice to help you reach peak performance.
            Whether you're an amateur looking to elevate your routine or a seasoned athlete fine-tuning your regimen, Winning Formula provides the resources and tools you need to achieve your fitness goals and maintain a balanced, healthy lifestyle.
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