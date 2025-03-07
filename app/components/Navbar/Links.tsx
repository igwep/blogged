"use client"
import React from 'react'
import Link from 'next/link'
import SearchButton from './SearchButton'
import ThemeToggle from './ThemeToggle'

const Links = () => {
  return (
    <div className="flex items-center gap-3">
    <div className="flex gap-8 items-center text-lg">
      <span>Blog</span>
      <span><Link href="/about">About</Link></span>
      <SearchButton /> {/* Search Icon */}
      <button className="px-8 py-3 bg-[#7C4EE4] rounded-md text-white dark:text-black">
        Contact
      </button>
    </div>

    {/* Theme Toggle */}
    <ThemeToggle />
  </div>
  )
}

export default Links