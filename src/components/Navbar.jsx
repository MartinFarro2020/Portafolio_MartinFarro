import { useEffect, useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import AboutMe from "./AboutMe"

const navlinks = [
  {
      title:"Home",
      link:"/",
  },
  {
      title:"ABOUT ME",
      link:"/about",
  },
  {
    title:"TECNOLOGYS",
    link:"/services",
  },
  {
    title:"PROYECTS",
    link:"/services",
  },
  {
      title:"CONTACT",
      link:"/contact",
  },
];


const Navbar = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false)
    const [open, setOpen] = useState(true)

    const handleMenu = () =>{
      setOpen((prev) => !prev);
      console.log(open);
    };

    const handleChangeTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    };

    useEffect(()=>{
        isDarkTheme
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
    }, [isDarkTheme])
    return (
        <main id="home">
            <form className="flex sm:m-auto sm:w-[100%]">
                <header className="fixed top-0 sm:w-full">
                    <nav className="flex bg-[#6e7173] h-[50px] min-w-[350px] items-center text-white sm:flex sm:w-full sm:justify-between dark:bg-[white] dark:text-[#020024]">
                        <div className="flex justify-between gap-4">
                            <div className="flex min-w-[300px] m-0-auto justify-between gap-6">
                                <div className="flex">
                                     <a className="flex text-[20px] sm:text-[32px] font-fredoka-sans">Martin Farro</a>
                                </div>
                                {/*Dark Mode*/}
                                <div className="flex">
                                    <button onClick={handleChangeTheme} className="flex items-center gap-1 font-fredoka-sans text-[10px] sm:text-[16px]">
                                    {isDarkTheme ? (
                                    <i className="flex bx bxs-moon"></i> 
                                    ) : (
                                    <i className="flex bx bxs-sun"></i>
                                    )}
                                    DARK MODE
                                    </button>
                                </div>
                                
                            </div>

                            {/*hamburger button*/}          
                            {/* <div className="flex sm:hidden" onClick={() => setOpen(!open)}>
                              <button className="cursor-pointer dark:color-black">
                                <i class='bx bx-menu'></i>
                              </button>
                            </div> */}
                            <div className="-mr-2 flex md:hidden">
                                <button 
                                    type="button" 
                                    onClick={handleMenu} 
                                    className="inline-flex items-center justify-center p-2 
                                    rounden-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 
                                    focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                    <span className="sr-only">Open Main Menu</span>
                                    {open == true ? <FaTimes /> : <FaBars />}            
                                </button>
                            </div>




                        </div>
                        <div className={`${open ? "visibility":"hidden"} flex flex-col bg-[#5072A7] dark:bg-[#012346] justify-center fixed gap-4 min-h-screen mb-[12px] w-[40vw] top-[50px] left-0 right-0 text-[12px] sm:flex sm:flex-row  sm:sticky sm:w-auto sm:min-h-0 sm:mt-[7px] sm:h-[40px] sm:text-[16px] sm:bg-[#6e7173] id=nav-links`}>

                            <ul className="flex flex-col items-center gap-4 sm:flex-row sm:flex sm:gap-4 sm:mx-auto font-fredoka-sans dark:bg-[#012346] sm:dark:bg-white">
                                <li>
                                  <a href="#home" className="bg-[#f40f04] text-white px-2 link_white">INICIO</a>
                                </li>
                                <li>
                                  <a className="link_gold dark:text-white sm:dark:text-[#000306]" href="#aboutme">ACERCA</a>
                                </li>
                                <li>
                                  <a className="link_gold dark:text-white sm:dark:text-[#000306]" href="#skills">TECNOLOGIAS</a>
                                </li>
                                <li>
                                  <a className="link_gold dark:text-white sm:dark:text-[#000306]" href="#proyects">PROYECT0S</a>
                                </li>
                                <li>
                                  <a className="link_gold dark:text-white sm:dark:text-[#000306]" href="#contact">CONTACTO</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </form>
        </main>

    )
}
export default Navbar
