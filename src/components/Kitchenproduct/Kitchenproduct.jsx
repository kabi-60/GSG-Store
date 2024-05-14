import img from './kitchencare.jpg'
import img1 from './kitchencare1.jpg'

const Kitchenproduct = () => {
  return (
    <div className="bg-[#ffeb5c] ">
      <div className="container mx-auto bg-[#ffeb5c] py-10">
        <h1 className="mb-10 mt-4 text-center text-3xl font-semibold text-black sm:text-4xl lg:text-6xl">
          Kitchen products
        </h1>
        <div>
          <img src={img} alt="product image" className="mx-auto" />
          <img src={img1} alt="product image" className="mx-auto" />
        </div>
      </div>
    </div>
  )
}

export default Kitchenproduct
