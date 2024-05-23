import { useState, useEffect } from 'react';
import { GoPackage, GoHome } from 'react-icons/go';
import { AiOutlineProduct } from 'react-icons/ai';
import { IoMdHappy } from 'react-icons/io';

interface LoginProps {
	handleOnClick: () => void;
}

const Navbar = (props: LoginProps) => {
	const { handleOnClick } = props;
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
				changeBackGround ? 'backdrop-blur-lg  transition-all' : ''
			} z-30 flex items-center justify-between w-full py-3 px-[5rem] fixed left-0 top-0`}
		>
			<h2 className='text-[1.8rem] font-normal uppercase w-1/4 '>
				Fasco<span className='text-sm leading-tight lowercase'>.mel</span>
			</h2>
			<nav className='flex items-center w-2/4'>
				<ul className=' flex items-center justify-between w-full gap-5 '>
					<li className='cursor-pointer flex items-center gap-1  transition-all hover:-translate-y-1  duration-300 ease-in-out'>
						<GoHome />
						Home
					</li>
					<li className='cursor-pointer  flex items-center gap-1   hover:-translate-y-1 duration-300 ease-in-out '>
						<IoMdHappy />
						Deals
					</li>
					<li className='cursor-pointer flex items-center gap-1   hover:-translate-y-1 duration-300 ease-in-out '>
						<AiOutlineProduct />
						New Arrivals
					</li>
					<li className='cursor-pointer flex items-center gap-1 hover:-translate-y-1 duration-300 ease-in-out '>
						<GoPackage />
						Packages
					</li>
				</ul>
			</nav>
			<div className='flex items-center justify-end gap-3 w-1/4'>
				<button
					aria-label='sign in button '
					title='signIn'
					className='cursor-pointer btn btn-outline btn-sm  py-1'
				>
					Sign in
				</button>
				<button
					onClick={handleOnClick}
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
