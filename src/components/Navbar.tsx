import { useState, useEffect } from 'react';
import { GoPackage, GoHome } from 'react-icons/go';
import { AiOutlineProduct } from 'react-icons/ai';
import { IoMdHappy } from 'react-icons/io';
import { useView } from '../Context/ViewContext';

const Navbar = () => {
	const [changeBackGround, setChangeBackGround] = useState<boolean>(false);

	const { setView } = useView();

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
	}, []);

	return (
		<header
			className={`${
				changeBackGround ? 'backdrop-blur-lg  transition-all' : ''
			} z-30 flex items-center justify-between w-full py-3 px-[5rem] fixed left-0 top-0`}
		>
			<h2 className='text-[1.8rem] font-normal uppercase w-1/4 '>
				Fasco<span className='text-sm leading-tight lowercase'>.mel</span>
			</h2>
			<nav className='flex items-center w-2/4'>
				<ul className=' flex items-center justify-center gap-8 w-full'>
					<li className='cursor-pointer flex items-center gap-1  transition-all hover:-translate-y-1  duration-300 ease-in-out font-semibold'>
						<GoHome className='w-5 h-5' />
						Home
					</li>
					<li className='cursor-pointer  flex items-center gap-1   hover:-translate-y-1 duration-300 ease-in-out font-semibold '>
						<IoMdHappy  className='w-5 h-5'/>
						Deals
					</li>
					<li className='cursor-pointer flex items-center gap-1   hover:-translate-y-1 duration-300 ease-in-out font-medium '>
						<AiOutlineProduct  className='w-5 h-5'/>
						New Arrivals
					</li>
					<li className='cursor-pointer flex items-center gap-1 hover:-translate-y-1 duration-300 ease-in-out font-semibold '>
						<GoPackage  className='w-5 h-5'/>
						Packages
					</li>
				</ul>
			</nav>
			<div className='flex items-center justify-end gap-3 w-1/4'>
				<button
					onClick={() => setView('signIn')}
					aria-label='signInButton '
					title='signIn'
					className='cursor-pointer btn btn-outline btn-sm  py-1'
				>
					Sign in
				</button>
				<button
					onClick={() => setView('Login')}
					aria-label='login button'
					title='Login'
					className='cursor-pointer btn btn-sm  py-1'
				>
					Login
				</button>
			</div>
		</header>
	);
};

export default Navbar;
