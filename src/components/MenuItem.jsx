import Link from "next/link"

export const MenuItem = ({ title, address, Icon }) => {
   return (
      <Link href={address} className="hover:text-amber-500 ease-in-out duration-300">
         <Icon className='text-2xl sm:hidden' />
         <p className="uppercase hidden sm:inline text-sm">{title}</p>
      </Link>
   )
}
