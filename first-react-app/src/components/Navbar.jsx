import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-amber-300 text-black px-10 py-5 flex items-center justify-between"> 
      <h2 className='text-2xl '>First React App</h2>
      <div className="flex gap-10 items-center"> 
        <h4 className="text-xl">Home</h4>
        <h4 className="text-xl">About</h4>
        <h4 className="text-xl">Contact</h4>
        <h4 className="text-xl">Services</h4>
      </div>
    </nav>
  )
}

export default Navbar