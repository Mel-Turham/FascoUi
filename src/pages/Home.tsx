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
import productsData from '../data';
import { type ProductsType } from '../data';
import Card from '../components/Card';
import { FaStar } from 'react-icons/fa';
const Home = () => {
	const [currentTimes, setCurrentTimes] = useState(new Date());

	const [products, setProducts] = useState<ProductsType[]>(productsData);

	console.log(products);

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
					<div className=' rounded-md overflow-hidden'>
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
				{/* carousel there🖐🏻 */}
			</section>

			{/* new arrivals */}

			<section className='mt[8rem] py-1 w-full'>
				<div className='flex flex-col items-center gap-4'>
					<h2 className='capitalize text-4xl font-light'>New arrivals</h2>
					<p className='w-[500px] text-sm text-center text-gray-700 mt-5'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque alias
						magni labore dolor dignissimos placeat qui modi, minima dolores.
					</p>
				</div>
				<div className='flex items-center justify-center gap-6 p-6 mt-8 '>
					<button className='btn btn-sm px-5 btn-outline text-[14px] font-light capitalize'>
						Men's fashion
					</button>
					<button className='btn btn-sm px-5 btn-outline text-[14px] font-light capitalize'>
						Women's fashion
					</button>
					<button className='btn btn-sm px-5 btn-outline text-[14px] font-light capitalize'>
						Women's Accessories
					</button>
					<button className='btn btn-sm px-5 btn-outline text-[14px] font-light capitalize'>
						Men Accessories
					</button>
					<button className='btn btn-sm px-5 btn-outline text-[14px] font-light capitalize'>
						Discount Deals
					</button>
				</div>

				<div className='grid grid-cols-3 gap-4 py-6'>
					{products.map((product) => {
						return (
							<Card key={product.id}>
								<figure>
									<img src={product.image} alt={product.name} />
								</figure>
								<div className='card-body py-4 px-0'>
									<div className='card-title leading-none items-start justify-between '>
										<div className='flex flex-col gap-2'>
											<p className='font-semibold text-sm'>{product.name}</p>
											<span className='font-normal text-[13px]'>
												{product.author}
											</span>
											<span className='font-normal text-[13px]'>
												(4.1k) Customer Reviews
											</span>
										</div>
										<div className='flex items-center gap-1'>
											<FaStar className='text-[13.4px] text-orange-500' />
											<FaStar className='text-[13.4px] text-orange-500' />
											<FaStar className='text-[13.4px] text-orange-500' />
											<FaStar className='text-[13.4px] text-orange-500' />
											<FaStar className='text-[13.4px] text-orange-500' />
										</div>
									</div>
									<div className='flex justify-between items-center mt-2'>
										<p className='font-bold'>${product.price.toFixed(2)}</p>
										<span className='font-normal text-[13px] text-[#FF4646]'>
											Almost Sold Out
										</span>
									</div>
								</div>
							</Card>
						);
					})}
				</div>
				<button className='btn btn-neutral btn-sm w-32 mx-auto'>
					View more
				</button>
			</section>
		</section>
	);
};
export default Home;
