import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-amber-300 text-black px-10 py-5 flex items-center justify-between">
      <h2 className='text-2xl '>First React App</h2>

      <div className="flex gap-10 items-center">
        {/* <h4 className="text-xl">Home</h4>
        <h4 className="text-xl">About</h4>
        <h4 className="text-xl">Contact</h4>
        <h4 className="text-xl">Services</h4> */}


        {/* THIS THE NEW NAVBAR FOR ROUTING / */}
        {/* NOW IN THIS THERE IS AN ISSUE THAT WHEN YOU CLICK ANY THEM THE WHOLE PAGE RELOADS*/}

        {/* <a href="/" className="text-xl active:scale-90 ">Home</a>
        <a href="/About" className="text-xl active:scale-90">About</a>
        <a href="/Contact" className="text-xl active:scale-90">Contact</a>
        <a href="/Services" className="text-xl active:scale-90">Services</a> */}

        {/* TO SOLVE THE ABOVE ISSUE THERE IS NEED TO USE Link COMPONENT
            ALLOWS FOR CLIENT-SIDE NAVIGATION WITHOUT PAGE RELOADS, WHICH 
            IS FASTER AND MORE EFFICIENT IN SPAS (SINGLE PAGE APPLICATIONS).
        */}
        <Link to={"/"} className="text-xl active:scale-90"> Home </Link>
        <Link to={"/About"} className="text-xl active:scale-90"> About </Link>
        <Link to={"/Contact"} className="text-xl active:scale-90"> Contact </Link>
        <Link to={"/Services"} className="text-xl active:scale-90"> Services </Link>

      </div>
    </nav>
  )
}

export default Navbar