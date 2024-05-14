import logo from './logo.png'
import down from './down-arrow.png'

import { MapPin, Package } from 'lucide-react'
import { STORE_NAME } from '../../constants/details'

const Home = () => (
  <div className="container mx-auto pb-5 lg:pl-16" id="home">
    <div className="flex w-full flex-col-reverse items-center md:flex-row">
      <div className="my-12 grow px-5 text-center md:text-left">
        <h1 className="text-4xl font-bold text-black md:text-7xl">
          My<span className="text-[#ff3d61]">v3</span>Ads Store
        </h1>
        <p className="mt-3 text-neutral-500 md:text-xl">
          Welcome to {STORE_NAME}, we offer a wide range of Myv3Ads products for
          your needs. We have products for your kitchen, health, and personal
          care.
        </p>

        <div className="mt-10 flex flex-wrap justify-center md:justify-start">
          <a
            href="#products"
            className="m-1 flex items-center border-2 border-[#ff3d61] bg-[#ff3d61] px-5 py-2 text-xl text-white hover:bg-[#e81123]"
          >
            <Package size={22} className="my-auto mr-2 inline-block" />
            Get Products
          </a>
          <a
            href="#contact"
            className="m-1 flex items-center border-2 border-[#ff3d61] bg-white px-5 py-2 text-xl text-rose-500 hover:bg-rose-100 active:bg-rose-500 active:text-white"
          >
            <MapPin size={20} className="my-auto mr-2 inline-block" />
            Location
          </a>
        </div>
      </div>
      <div className="w-2/3 flex-shrink-0 md:w-5/12">
        <img src={logo} alt="myv3ads logo" className="h-full w-full" />
      </div>
    </div>

    <div className="flex justify-center">
      <a href="#about">
        <img src={down} alt="down> arrow" className="size-8" />
      </a>
    </div>
  </div>
)

export default Home
