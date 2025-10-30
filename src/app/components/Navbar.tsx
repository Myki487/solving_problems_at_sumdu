'use client'

import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white flex gap-4 shadow-md">
      <Link href="/" className="hover:text-blue-300 transition duration-150">
        Головна
      </Link>
      <Link href="/labs/NM/lab1" className="hover:text-blue-300 transition duration-150">
        Чисельні методи - Лаб 1
      </Link>
      <Link href="/labs/NM/lab2" className="hover:text-blue-300 transition duration-150">
        Чисельні методи - Лаб 2
      </Link>
      <Link href="/labs/NM/lab3" className="hover:text-blue-300 transition duration-150">
        Чисельні методи - Лаб 3
      </Link>
    </nav>
  )
}

export default Navbar
