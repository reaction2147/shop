const NavBar = () => {
    return (
        <nav className="bg-gray-800">
			<div className="max-w-7xl mx-auto px-7 py-2">
				<div className="flex justify-between">
					<div className="flex space-x-20">
						<div>
							
							<a href="#" className="flex items-center py-4 px-2">
								<img src="" alt="Logo" className="h-8 w-8 mr-2" />
								<span className="antialiased font-semibold text-white text-lg">Navigation</span>
							</a>
						</div>
						
						<div className="hidden md:flex items-center space-x-1">
							<a className="antialiased cursor-pointer py-4 px-2 text-yellow-500 font-semibold hover:text-white transition duration-400 ">Home</a>
							<a className="antialiased cursor-pointer py-4 px-2 text-white font-semibold hover:text-yellow-500 transition duration-400">Services</a>
							<a className="antialiased cursor-pointer py-4 px-2 text-white font-semibold hover:text-yellow-500 transition duration-400">About</a>
							<a className="antialiased cursor-pointer py-4 px-2 text-white font-semibold hover:text-yellow-500 transition duration-400">Contact Us</a>
						</div>
					</div>
					
					<div className="hidden md:flex items-center space-x-3 ">
						<a className="antialiased cursor-pointer py-2 px-3 font-medium text-white rounded border-solid border-2 border-white hover:border-yellow-500 hover:text-yellow-500 transition duration-400">Log In</a>
						<a className="antialiased cursor-pointer py-2 px-2 font-medium text-white bg-yellow-500 rounded border-solid border-2 border-yellow-500 hover:bg-transparent transition duration-400">Sign Up</a>
					</div>
				
					{/* <div className="md:hidden flex items-center">
						<button className="outline-none mobile-menu-button">
						<svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
							x-show="!showMenu"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div> */}
				</div>
			</div>
		
			{/* <div className="hidden mobile-menu">
				<ul className="">
					<li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
					<li><a href="#services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
					<li><a href="#about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
					<li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
				</ul>
			</div> */}
			
		</nav>
    )
}

export default NavBar