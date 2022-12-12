
const NavBar = () => {
    return (
      <header className="bg-gray-400 p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <a href="#" className="font-bold text-xl">
            My Website
          </a>
          <nav>
            <a href="#" className="px-4 hover:underline">Home</a>
            <a href="#" className="px-4 hover:underline">FAQ</a>
          </nav>
        </div>
      </header>
    );
  };
  
//   const NavBar = () => {
//     return (
//       <div className="flex flex-col">
//         <Component />
//         <div className="container mx-auto mt-10">
//           {/* Page content goes here */}
//         </div>
//       </div>
//     );
//   };
  
  export default NavBar;