import { useState, useEffect } from 'react';

const Navbar = () => {
	const [changeBackGround, setChangeBackGround] = useState<boolean>(false);

	useEffect(() => {
		const handleChangeBackground = () => {
			if (scrollY > 5) {
				setChangeBackGround(true);
			} else {
				setChangeBackGround(false);
			}
		};

		window.addEventListener('scroll', handleChangeBackground);

		return () => window.removeEventListener('scroll', handleChangeBackground);
	}, [scrollY]);
	return (
		<header
			className={`${
				changeBackGround ? 'bg-slate-50 transition-all' : ''
			} z-30 flex items-center justify-between w-full py-3 px-[5rem] fixed left-0 top-0`}
		>
			<h2 className='text-[1.8rem] font-normal uppercase'>Fasco</h2>
			<nav className='flex items center  gap-4'>
				<ul className=' flex items-center justify-center gap-5 mr-3'>
					<li className='cursor-pointer  transition-all hover:-translate-y-1 px-4 duration-300 ease-in-out'>
						Home
					</li>
					<li className='cursor-pointer   hover:-translate-y-1 duration-300 ease-in-out px-4'>
						Deals
					</li>
					<li className='cursor-pointer   hover:-translate-y-1 duration-300 ease-in-out px-4'>
						New Arrivals
					</li>
					<li className='cursor-pointer   hover:-translate-y-1 duration-300 ease-in-out px-4'>
						Packages
					</li>
				</ul>
				<div className='flex items-center gap-3'>
					<button className='cursor-pointer btn btn-outline btn-sm px-4 py-1'>
						Sign in
					</button>
					<button className='cursor-pointer btn btn-sm px-4 py-1'>Login</button>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
