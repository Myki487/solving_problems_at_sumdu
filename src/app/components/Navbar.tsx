"use client"

import Link from "next/link"

const Navbar = () => {
	return(
		<nav className="p-4 bg-gray-800 text-white flex gap-4">
			<Link href="/">Головна</Link>
			<Link href="labs/NM/lab1">Чисельні методи - Лаб 1</Link>
			<Link href="labs/NM/lab2">Чисельні методи - Лаб 2</Link>
		</nav>
	)
}

export default Navbar