'use client'

import { useState } from "react"
import { useRouter } from "next/navigation";

export const SearchBox = () => {
   const [search, setSeach] = useState('');
   const router = useRouter();
   const handleSubmit = (e) => {
      e.preventDefault();
      // window.location.href = `/search?q=${search}`
      router.push(`/search/${search}`)
   }
   return (
      <form onSubmit={handleSubmit} className="flex justify-between px-5 max-w-6xl mx-auto">
         <input type="text" placeholder="Search..." value={search} onChange={(e) => setSeach(e.target.value)} className="w-full h-14 rounded-md placeholder-gray-400 outline-none bg-transparent flex-1" />
         <button className="text-amber-500 disabled:text-gray-400 transition-colors duration-300" disabled={search === ''}>Search</button>
      </form>
   )
}
