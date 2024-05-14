import img from './personalcare.jpg'

const Personalproduct = () => {
  return (
    <div className="bg-[#004aad] ">
      <div className="container mx-auto py-10">
        <h1 className="mb-10 mt-4 text-center text-3xl font-semibold text-white sm:text-4xl lg:text-6xl">
          Personal-care products
        </h1>
        <div>
          <img
            src={img}
            alt="personal care product image"
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default Personalproduct
