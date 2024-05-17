import Navbar from '../components/Navbar';
import image1 from '../assets/images/img-1.png';
import image2 from '../assets/images/img-2.png';
import image3 from '../assets/images/img-3.png';
import image4 from '../assets/images/img-4.png';
import logo1 from '../assets/Logo/logo-1.png';
import logo2 from '../assets/Logo/logo-2.png';
import logo3 from '../assets/Logo/logo-3.png';
import logo4 from '../assets/Logo/logo-4.png';

import { useEffect, useState } from 'react';

const Home = () => {
	const [currentTimes, setCurrentTimes] = useState(new Date());

	useEffect(() => {
		const timerId = setInterval(() => {
			setCurrentTimes(new Date());
		}, 1000);
		return () => {
			clearInterval(timerId);
		};
	}, []);

	const day = currentTimes.getDate();
	const hours = currentTimes.getHours().toString().padStart(2, '0');
	const minutes = currentTimes.getMinutes().toString().padStart(2, '0');
	const seconds = currentTimes.getSeconds().toString().padStart(2, '0');

	return (
		<section className='w-full'>
			<Navbar />
			<section className='flex items-center justify-center gap-6 h-screen flex-col'>
				<div className='grid grid-cols-3 grid-rows-4 w-full h-[448px] gap-4 mt-[10rem]'>
					<div className='row-start-1 row-end-5 bg-gray-200 rounded-md'>
						<img
							src={image1}
							alt=''
							className='w-full h-[100%] object-right-bottom'
						/>
					</div>
					<div className='bg-gray-200  rounded-md'>
						<img src={image2} alt='' className='w-full h-full object-cover' />
					</div>
					<div className='row-start-2 row-end-4 rounded-md flex items-center flex-col gap-4'>
						<h2 className='uppercase text-[1.5rem] flex item-center space-x-4'>
							<span>u</span>
							<span>l</span>
							<span>t</span>
							<span>i</span>
							<span>m</span>
							<span>a</span>
							<span>t</span>
							<span>e</span>
						</h2>
						<h1 className='uppercase text-5xl  flex items-center space-x-6 font-black '>
							<span>S</span>
							<span>a</span>
							<span>l</span>
							<span>e</span>
						</h1>
						<p className='capitalize'>new collection</p>
						<button className='btn btn-neutral btn-sm btn-outline px-6 py-2 uppercase'>
							shop now
						</button>
					</div>
					<div className='bg-indigo-400 rounded-md overflow-hidden'>
						<img src={image4} alt='' className='w-full  h-full  object-cover' />
					</div>
					<div className='bg-gray-200 row-start-1 row-end-5 rounded-md px-5'>
						<img
							src={image3}
							alt=''
							className='w-full h-[100%] object-contain object-center-top'
						/>
					</div>
				</div>
				<div
					className=' flex items-center justify-evenly w-full py-5
        mb-4'
				>
					<img src={logo1} alt='logo' className='w-[120px]' />
					<img src={logo2} alt='logo' className='w-[120px]' />
					<img src={logo3} alt='logo' className='w-[120px]' />
					<img src={logo4} alt='logo' className='w-[120px]' />
				</div>
			</section>

			<section className=' w-full  mt-[3rem] py-[4rem] grid grid-cols-3'>
				<div className='flex flex-col gap-5'>
					<h1 className='capitalize text-4xl font-medium'>
						Deals of the month
					</h1>
					<p className='text-sm'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
						facilis deleniti enim optio dolores, esse totam debitis veritatis
						aut quaerat!
					</p>
					<button className='btn btn-sm btn-neutral shadow-md px-8 w-fit'>
						Buy now
					</button>
					<div className=' flex flex-col'>
						<h3 className='mb-3 text-lg font-semibold font-sans'>
							Hurry, before it's too late!
						</h3>
						<div className='flex items-center gap-5'>
							<div className='flex flex-col justify-center items-center'>
								<span className='p-4 bg-white shadow-lg rounded-lg'>{day}</span>
								<span>Day</span>
							</div>
							<div className='flex flex-col justify-center items-center'>
								<span className='p-4 bg-white shadow-lg rounded-lg'>
									{hours}
								</span>
								<span>Hr</span>
							</div>
							<div className='flex flex-col justify-center items-center'>
								<span className='p-4 bg-white shadow-lg rounded-lg'>
									{minutes}
								</span>
								<span>min</span>
							</div>
							<div className='flex flex-col justify-center items-center'>
								<span className='p-4 bg-white shadow-lg rounded-lg'>
									{seconds}
								</span>
								<span>sec</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
};
export default Home;
