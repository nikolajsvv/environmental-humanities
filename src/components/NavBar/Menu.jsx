

const Menu = () => {
  return(
    <nav className="fixed top-0 left-0 bottom-0 w-[400px] bg-primary-green pt-[100px] will-change-transform">
      <ul className="flex flex-col gap-10 p-[15px] text-white font-bold text-[30px] uppercase font-source-sans-pro">
        <li className="block transition ease-in-out delay-150 hover:text-[31px] duration-300">where are we</li>
        <li className="block transition ease-in-out delay-150 hover:text-[31px] duration-300">how did we get here</li>
        <li className="block transition ease-in-out delay-150 hover:text-[31px] duration-300">how do we make sense of it all</li>
        <li className="block transition ease-in-out delay-150 hover:text-[31px] duration-300">where do we go from here</li>
      </ul>
    </nav>
  )
    
}
export default Menu;