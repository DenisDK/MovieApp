'use client'

import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const DarkModeSwitch = () => {
   const { theme, setTheme, systemTheme } = useTheme();
   const [mounted, setMounted] = useState(false); // Працює і без цого 
   const currentTheme = theme === 'system' ? systemTheme : theme

   useEffect(() => setMounted(true), []); // Працює і без цого 

   return (
      <div>
         {mounted && (currentTheme === 'dark' ? (
            <MdLightMode
               onClick={() => setTheme('light')}
               className="text-xl cursor-pointer hover:text-amber-500 ease-in-out duration-300" />
         ) : (
            <MdDarkMode
               onClick={() => setTheme('dark')}
               className="text-xl cursor-pointer hover:text-amber-500 ease-in-out duration-300" />
         ))}
      </div>
   )
}
