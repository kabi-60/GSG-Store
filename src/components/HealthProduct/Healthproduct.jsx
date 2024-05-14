import img1 from './productlist.jpg'
import img2 from './productlist2.jpg'

const Healthproduct = () => {
  return (
    <div className="bg-[#47ab27]" id="products">
      <div className="container mx-auto py-10">
        <div>
          <div className="flex flex-col items-center">
            <h2 className="mt-10 px-8 text-center text-4xl font-bold text-black sm:text-5xl lg:text-7xl">
              Our Products
            </h2>
            <div className="mt-2 h-1 w-24 bg-white"></div>
          </div>
          <h1 className="mb-10 mt-4 text-center text-3xl font-semibold text-white sm:text-4xl lg:text-6xl">
            Healthcare products
          </h1>
          <div>
            <img src={img1} alt="product image" className="mx-auto" />
            <img src={img2} alt="product image" className="mx-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Healthproduct
