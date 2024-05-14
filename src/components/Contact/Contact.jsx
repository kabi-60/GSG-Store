const Contact = () => (
  <div className="container mx-auto  mb-10 bg-white" id="contacts">
    <div className="text-black">
      <h1 className="mt-16 px-[100px]  font-mono text-4xl font-thin  text-black sm:px-[190px] sm:text-6xl lg:text-8xl">
        Contact
      </h1>

      <div className="mx-auto mt-10 grid w-1/2  md:grid-cols-2">
        <div>
          <h1 className="mr-3 font-mono  text-2xl">Name</h1>
          <input
            type="text"
            className="mr-4 w-full  rounded-full border border-black bg-white px-10 py-2"
          />
        </div>
        <div>
          <h1 className="mr-3 mt-5 font-mono text-2xl md:ml-5 md:mt-0">
            Email
          </h1>
          <input
            type="text"
            className="mr-4 w-full  rounded-full border border-black bg-white px-10 py-2 md:ml-5"
          />
        </div>
        <h1 className="mr-3 mt-10 font-mono text-2xl">Message</h1>
      </div>
      <div className="mx-auto mt-2 flex justify-center">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="text-whote w-1/2 rounded-2xl border border-black bg-white font-thin"
        ></textarea>
      </div>
      <div className="mx-auto mt-5 flex justify-center">
        <button className="w-1/2 rounded-2xl bg-black py-3 text-xl font-semibold text-white">
          Send Now
        </button>
      </div>
      <div className=" mx-auto  mt-10 justify-center md:flex">
        <h1 className="text-center font-mono text-2xl font-semibold text-black underline md:ml-48">
          Connect <i class="fa-solid fa-link"></i>
        </h1>
        <br />
        <h1 className="text-center font-mono text-xl text-black md:ml-36">
          <i class="fa-solid fa-envelope"></i> MyV3ads@gmail.com
        </h1>
        <h1 className="text-center font-mono text-xl text-black   md:ml-36">
          <i class="fa-solid fa-phone"></i> 1234567890
        </h1>
      </div>
    </div>
  </div>
)

export default Contact
