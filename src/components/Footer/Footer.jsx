import { MapIcon, LinkIcon, MailIcon, PhoneIcon } from 'lucide-react'
import { BiLogoWhatsapp } from 'react-icons/bi'
import {
  ADDRESS,
  EMAIL,
  PHONE,
  PHONE_NUMBER,
  STORE_NAME,
  STORE_NAME_JSX
} from '../../constants/details'

const Footer = () => {
  return (
    <div className="container mx-auto bg-white px-8" id="contact">
      <div className="my-6 grid grid-cols-1 gap-5 md:my-12 md:grid-cols-3">
        <div>
          <h2 className="mb-2 font-mono text-3xl font-semibold text-black md:text-5xl">
            {STORE_NAME_JSX}
          </h2>
          <p>&copy; 2024 {STORE_NAME}. All rights reserved.</p>
          <p>
            Designed by{' '}
            <a
              href="https://github.com/Kabi-60"
              target="_blank"
              className="underline"
            >
              Kabi-60
            </a>
            ,{' '}
            <a
              href="https://github.com/Blank-09"
              target="_blank"
              className="underline"
            >
              Blank-09
            </a>
          </p>
        </div>
        <div>
          <h4 className="mb-3 flex items-center text-2xl font-semibold text-black underline">
            Address <MapIcon className="ml-2" />
          </h4>

          <p className="text-lg text-black">{ADDRESS}</p>
        </div>
        <div>
          <h1 className="mb-3 flex items-center text-2xl font-semibold text-black underline">
            Connect <LinkIcon className="ml-2" />
          </h1>

          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center text-lg text-black"
          >
            <MailIcon size={20} className="mr-2 shrink-0" /> {EMAIL}
          </a>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center text-lg text-black"
          >
            <PhoneIcon size={20} className="mr-2 shrink-0" /> {PHONE}
          </a>
          <a
            href={`https://wa.me/91${PHONE_NUMBER}`}
            className="flex items-center text-lg text-black"
          >
            <BiLogoWhatsapp size={20} className="mr-2 shrink-0" /> {PHONE}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
