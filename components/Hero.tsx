import React from 'react'

export default function Hero() {
  return (
    <>
      <div className="flex w-full flex-wrap items-center justify-between px-3 relative">
        <div className="max-w-2xl relative">
          <h1 className="text-8xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-700 font-bold">
            Inspiration is everywhere
          </h1>
          <p className="max-w-lg text-xl py-10">
            There is no passion to be found playing small in settling for a life
            that is less than the one you are capable of living ,
          </p>
          <div className="h-56 w-56 absolute top-0 -left-[200px] bg-[#3B82F6] rounded-full blur-[100px] filter"></div>
          <button className="relative bg-gradient-to-r from-[#3B82F6] to-[#D946EF] px-6 py-3 text-2xl font-bold rounded-xl">
            Get Started
          </button>
        </div>

        <div className="relative">
          <div className="h-40 w-40 absolute top-20 left-0 bg-[#D946EF] rounded-full blur-[100px] filter"></div>

          <img src="sally-11.png" className="relative z-50" />
          <div className="h-56 w-56 absolute top-40 right-[10rem] bg-[#3B82F6] rounded-full blur-[100px] filter"></div>
        </div>
      </div>
    </>
  )
}
