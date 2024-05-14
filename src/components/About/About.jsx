import {
  BiLogoWhatsapp,
  BiLogoInstagram,
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoGmail
} from 'react-icons/bi'
import {
  ADDRESS,
  EMAIL,
  PHONE,
  PHONE_NUMBER,
  STORE_NAME
} from '../../constants/details'

const About = () => {
  return (
    <section id="about" className=" mx-auto container border-t px-8">
      <div className="py-20">
        <div>
          <h2 className="text-4xl font-bold md:text-6xl">About</h2>
        </div>
        <div className="mt-4 grid grid-cols-12 gap-6 md:mt-10">
          <div className="col-span-12 md:col-span-4">
            <img
              src="./img/profile.jpg"
              alt="Profile pic"
              className="size-full"
            />
          </div>
          <div className="col-span-12 flex flex-col md:col-span-8">
            <h2 className="mb-2 text-4xl font-semibold md:text-5xl">
              Saritha T
            </h2>
            <h3 className="mb-2 text-xl font-medium text-rose-500">
              {STORE_NAME} Owner
            </h3>
            <p className="mb-6 text-lg">
              Hi, I am Saritha, the owner of {STORE_NAME}. I have been in the
              business for quite a while. I have a wide range of products for
              your needs. I have products for your kitchen, health, and personal
              care. I am here to help you with your needs. Feel free to contact.
            </p>
            <div className="mb-4 grid grid-cols-2 text-lg">
              <ul className="col-span-2 space-y-3 sm:col-span-1">
                <li>
                  <strong>Phone no: </strong>
                  <a href={`tel:${PHONE_NUMBER}`} className="hover:underline">
                    {PHONE}
                  </a>
                </li>
                <li>
                  <strong>WhatsApp: </strong>
                  <a
                    href={`https://wa.me/91${PHONE_NUMBER}`}
                    target="_blank"
                    className="hover:underline"
                  >
                    {PHONE}
                  </a>
                </li>
                <li>
                  <strong>Website: </strong>
                  <a
                    href="https://vfolio.github.io/gsg-stores/"
                    className="text-rose-500 hover:underline"
                  >
                    vfolio.github.io/gsg-stores/
                  </a>
                </li>
                <li>
                  <strong>Email: </strong>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-rose-500 hover:underline"
                  >
                    {EMAIL}
                  </a>
                </li>
              </ul>
              <ul className="col-span-2 mt-2 space-y-3 sm:col-span-1 md:mt-0">
                <li>
                  <strong>Profession: </strong>
                  <span>Business</span>
                </li>
                <li>
                  <strong>Location: </strong>
                  <span>{ADDRESS}</span>
                </li>
              </ul>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-end">
              <a href="#" target="_blank" className="mr-2">
                <BiLogoFacebook className="text-3xl text-blue-500" />
              </a>
              <a href="#" target="_blank" className="mr-2">
                <BiLogoInstagram className="text-3xl text-rose-500" />
              </a>
              <a
                href={`https://wa.me/91${PHONE_NUMBER}`}
                target="_blank"
                className="mr-2"
              >
                <BiLogoWhatsapp className="text-3xl text-green-500" />
              </a>
              <a href="#" target="_blank" className="mr-2">
                <BiLogoTwitter className="text-3xl text-blue-400" />
              </a>
              <a href={`mailto:${EMAIL}`} className="mr-2">
                <BiLogoGmail className="text-3xl text-red-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
