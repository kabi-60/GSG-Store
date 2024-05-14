import { STORE_NAME_JSX } from '../../constants/details'
import './Header.css'
import { Menu } from 'lucide-react'

const links = [
  {
    title: 'Home',
    href: '#home'
  },
  {
    title: 'About',
    href: '#about'
  },
  {
    title: 'Products',
    href: '#product'
  },
  {
    title: 'Contact',
    href: '#contact'
  }
]

const Header = () => {
  return (
    <header className="sticky top-5 z-50 mt-5">
      <nav className="container mx-auto flex w-[90%] items-center rounded-full border bg-white p-3 shadow-lg lg:px-5">
        <h3 className="ml-1 text-2xl font-semibold text-black md:text-3xl lg:ml-2">
          {STORE_NAME_JSX}
        </h3>

        <div className="ml-auto mr-6 mt-1 hidden space-x-6 text-xl text-neutral-600 ease-in-out md:flex">
          {links.map((link, index) => (
            <a
              key={index}
              className="font-mono hover:scale-105 hover:text-black"
              href={link.href}
            >
              {link.title}
            </a>
          ))}
        </div>

        <button
          className="ml-auto mr-2 cursor-pointer text-xl text-neutral-600 ease-in-out md:hidden"
          id="menu"
        >
          <Menu />
        </button>
      </nav>
    </header>
  )
}

export default Header
