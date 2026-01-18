'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0">
            <a href="/" className="text-2xl font-bold text-blue-600">
              Logo
            </a>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 transition"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 transition"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 transition"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 transition"
            >
              Contact
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
          <a
            href="#home"
            className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="#services"
            className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition"
            onClick={toggleMenu}
          >
            Services
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
