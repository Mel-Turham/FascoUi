import Navbar from '../components/Navbar';
import image1 from '../assets/images/img-1.png';
import image2 from '../assets/images/img-2.png';
import image3 from '../assets/images/img-3.png';
import image4 from '../assets/images/img-4.png';
import logo1 from '../assets/Logo/logo-1.png';
import logo2 from '../assets/Logo/logo-2.png';
import logo3 from '../assets/Logo/logo-3.png';
import logo4 from '../assets/Logo/logo-4.png';

import { useState } from 'react';
import productsData from '../data';
import { type ProductsType } from '../data';
import Card from '../components/Card';
import { FaStar } from 'react-icons/fa';
import image5 from '../assets/images/bg-img.png';
import Clock from '../components/Clock';
const Home = () => {
	const [products, setProducts] = useState<ProductsType[]>(productsData);

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
				{/*  */}
				<Clock />
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
				<div className='flex items center justify-center'>
					<button className='btn btn-neutral btn-sm w-32 mt-6'>
						View more
					</button>
				</div>
			</section>
			{/*  */}
			<section className='grid grid-cols-2 gap-2   mt-[4rem] mb-4 bg-[#DADADA]'>
				<img src={image5} className='block w-full h-full object-cover' alt='' />
				<div className='py-[1.5rem] pl-[3rem] flex flex-col gap-2'>
					<p className='font-light text-xs'>Women Collection</p>
					<h2 className='text-[29px] font-bold'>Peaky Blinders</h2>
					<p className='underline cursor-pointer text-xs font-semibold'>
						Description
					</p>
					<p className='text-xs text-pretty w-[80%]'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
						libero temporibus incidunt dolorem itaque cupiditate eveniet dicta
						ad consectetur ipsam non explicabo, qui ratione ipsa expedita nulla
						quod adipisci quasi!
					</p>
					<div className='flex items-center gap-2'>
						<span>Size:</span>
						<span className='btn btn-xs btn-neutral px-[.6rem] rounded-sm'>
							M
						</span>
					</div>

					<p className='font-bold text-xl'>$100.00</p>
					<button className='w-fit btn btn-neutral btn-sm px-6'>Buy now</button>
				</div>
			</section>
		</section>
	);
};
export default Home;
