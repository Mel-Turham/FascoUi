import useEmblaCarousel from 'embla-carousel-react';
import { useEffect } from 'react';
import { IoStar } from 'react-icons/io5';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import Autoplay from 'embla-carousel-autoplay';

const Carousel = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel(
		{
			loop: true,
			align: 'center',
		},
		[Autoplay()],
	);

	console.log(emblaRef);

	useEffect(() => {
		if (emblaApi) {
			console.log(emblaApi.slideNodes());
		}
	}, [emblaApi]);

	return (
		<section className='my-10 bg-slate-50 py-4'>
			<div className='flex flex-col items-center gap-4'>
				<h2 className='capitalize text-4xl font-light'>
					This Is What Our Customers Say
				</h2>
				<p className='w-[400px] text-sm text-center text-gray-700'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
					duis
				</p>
			</div>
			<div
				className='embla-container  p-2 flex flex-col gap-2 overflow-hidden w-[55%] mt-10 mx-auto'
				ref={emblaRef}
			>
				<div className='embla-wrapper flex items-center gap-3'>
					<div className=' min-w-[80%]  bg-white shadow-sm flex p-5 gap-3'>
						<img
							className='w-[150px] h-[150px] object-cover rounded-sm'
							src='../../src/assets/images/customers-1.png'
							alt='user customer image'
							loading='lazy'
						/>

						<div className='flex flex-col gap-2'>
							<p className='text-[10.5px] font-semibold italic'>
								<blockquote>
									"You won't regret it. I would like to personally thank you for
									your outstanding product. Absolutely wonderful!"
								</blockquote>
							</p>
							<div className='flex items-center gap-1'>
								{Array.from({ length: 5 }, (_, index) => {
									return (
										<IoStar key={index} className='text-yellow-300 w-3 ' />
									);
								})}
							</div>
							<hr className='w-[70%] border-0 h-[1px] bg-stone-800 rounded-sm' />
							<h3 className='font-bold text-lg capitalize'>James k.</h3>
							<p className='text-[8px]'>Traveler</p>
						</div>
					</div>
					<div className=' min-w-[80%]  bg-white shadow-sm flex p-5 gap-3'>
						<img
							className='w-[150px] h-[150px] object-cover rounded-sm'
							src='../../src/assets/images/customers-2.png'
							alt='user customer image'
							loading='lazy'
						/>

						<div className='flex flex-col gap-2'>
							<p className='text-[10.5px] font-semibold italic'>
								<blockquote>
									"You won't regret it. I would like to personally thank you for
									your outstanding product. Absolutely wonderful!"
								</blockquote>
							</p>
							<div className='flex items-center gap-1'>
								{Array.from({ length: 5 }, (_, index) => {
									return (
										<IoStar key={index} className='text-yellow-300 w-3 ' />
									);
								})}
							</div>
							<hr className='w-[70%] border-0 h-[1px] bg-stone-800 rounded-sm' />
							<h3 className='font-bold text-lg capitalize'>Kim</h3>
							<p className='text-[8px]'>Mannequin.</p>
						</div>
					</div>
					<div className=' min-w-[90%]  bg-white shadow-sm flex p-5 gap-3'>
						<img
							className='w-[150px] h-[150px] object-cover rounded-sm'
							src='../../src/assets/images/customers-1.png'
							alt='user customer image'
							loading='lazy'
						/>

						<div className='flex flex-col gap-2'>
							<p className='text-[10.5px] font-semibold italic'>
								<blockquote>
									"You won't regret it. I would like to personally thank you for
									your outstanding product. Absolutely wonderful!"
								</blockquote>
							</p>
							<div className='flex items-center gap-1'>
								{Array.from({ length: 5 }, (_, index) => {
									return (
										<IoStar key={index} className='text-yellow-300 w-3 ' />
									);
								})}
							</div>
							<hr className='w-[70%] border-0 h-[1px] bg-stone-800 rounded-sm' />
							<h3 className='font-bold text-lg capitalize'>James k.</h3>
							<p className='text-[8px]'>Traveler</p>
						</div>
					</div>
				</div>

				<div className='flex justify-center mt-4 gap-3'>
					<button
						onClick={() => emblaApi?.scrollPrev()}
						className='bg-white shadow-md p-4 rounded-full w-10 h-10 grid place-content-center'
					>
						<GrFormPrevious />
					</button>
					<button
						onClick={() => emblaApi?.scrollNext()}
						className='bg-white shadow-md p-4 w-10 h-10 rounded-full  grid place-content-center '
					>
						<GrFormNext />
					</button>
				</div>
			</div>
		</section>
	);
};
export default Carousel;
