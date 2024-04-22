import { NavbarItem } from "./NavbarItem"

export const Navbar = () => {
   return (
      <div className="flex dark:bg-gray-600 bg-gray-200 p-4 lg:text-lg justify-center gap-4">
         <NavbarItem title='Trending' param='fetchTrending' />
         <NavbarItem title='Top Rated' param='fetchTopRated' />
      </div>
   )
}
