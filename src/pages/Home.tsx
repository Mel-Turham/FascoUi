import Navbar from '../components/Navbar';
import image1 from '../assets/images/img-1.png';
import image2 from '../assets/images/img-2.png';
import image3 from '../assets/images/img-3.png';
import image4 from '../assets/images/img-4.png';
import logo1 from '../assets/Logo/logo-1.png';
import logo2 from '../assets/Logo/logo-2.png';
import logo3 from '../assets/Logo/logo-3.png';
import logo4 from '../assets/Logo/logo-4.png';

import { useState, useEffect } from 'react';
import products from '../data';
import Card from '../components/Card';
import image5 from '../assets/images/bg-img.png';
import Clock from '../components/Clock';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { FaHandHoldingHeart, FaPhone } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { GrCertificate } from 'react-icons/gr';
import { RxCodesandboxLogo } from 'react-icons/rx';
import Modal from '../components/Modal';
import Carousel from '../components/Testimonials';
import NewsLetters from '../components/NewsLetters';
import Login from '../Auth/Login';
import SignIn from '../Auth/SignIn';
import { useView } from '../Context/ViewContext';
import Loader from '../components/Loader';
const Home = () => {
	const [isLoading, setIsloading] = useState<boolean>(true);
	const { view } = useView();
	const [selectedProductId, setSelectedProductId] = useState<number | null>(
		null,
	);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [showMore, setShowMore] = useState<boolean>(false);

	const newProducts = showMore ? products : products.slice(0, 6);
	const [emblaRef, emblaApi] = useEmblaCarousel(
		{
			loop: true,
			align: 'start',
			containScroll: 'trimSnaps',
			slidesToScroll: 1,
			dragFree: true,
		},
		[Autoplay()],
	);
	useEffect(() => {
		if (emblaApi) {
			// Access API
		}
	}, [emblaApi]);

	useEffect(() => {
		setTimeout(() => {
			setIsloading(false)
		},2000);
	}, []);

	const handleOpenModal = (productId: number) => {
		setSelectedProductId(productId);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setSelectedProductId(null);
		setIsModalOpen(false);
	};

	const selectedProduct =
		products.find((product) => product.id === selectedProductId) || null;

	if (isLoading) {
		return <Loader />;
	}

	return (
		<section className='w-full'>
			{/* Auth components SignIn and Login */}
			{view === 'Login' && <Login />}
			{view === 'signIn' && <SignIn />}

			{/* modal */}

			<Navbar />
			<section className='flex items-center justify-center gap-6 h-[calc(100vh-67.1979px)] flex-col mt-[7rem]'>
				<div className='grid grid-cols-3 grid-rows-4 w-full h-full gap-4 '>
					<div className='row-start-1 row-end-5 bg-gray-200 rounded-md overflow-hidden'>
						<img
							src={image1}
							alt=''
							className='w-full h-[100%] object-cover object-right-top'
						/>
					</div>
					<div className='bg-gray-200  rounded-md overflow-hidden'>
						<img src={image2} alt='' className='w-full h-full object-cover' />
					</div>
					<div className='row-start-2 row-end-4 flex items-center flex-col'>
						<h2 className='uppercase text-[1.6rem] flex item-center space-x-5'>
							<span>u</span>
							<span>l</span>
							<span>t</span>
							<span>i</span>
							<span>m</span>
							<span>a</span>
							<span>t</span>
							<span>e</span>
						</h2>
						<h1 className='uppercase text-[5.5rem] flex items-center space-x-6 font-black text-white outline-8  drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] '>
							<span>S</span>
							<span>a</span>
							<span>l</span>
							<span>e</span>
						</h1>
						<p className='capitalize mb-6 mt-2 text-[20px] font-medium'>new collection</p>
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
							alt='image hero'
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

			<section className=' w-full mt-[3rem] py-[4rem] flex gap-5'>
				{/*  */}
				<Clock />
				<div
					className='embla overflow-hidden relative h-[350px] w-2/3 mt-1'
					ref={emblaRef}
				>
					<div className='embla__container flex items-center gap-1'>
						<div className='embla__slide h-[100%] min-w-[50%]  overflow-hidden'>
							<img
								src='../../src/assets/images/slide-2.png'
								alt='image-slider'
								className='object-cover h-full w-full '
							/>
						</div>
						<div className='embla__slide h-[100%] min-w-[50%]'>
							<img
								src='../../src/assets/images/slide-3.png'
								alt='image-slider'
								className='object-cover h-full w-full '
							/>
						</div>
						<div className='embla__slide h-[100%] min-w-[50%]'>
							<img
								src='../../src/assets/images/slide-2.png'
								alt='image-slider'
								className='object-cover h-full w-full '
							/>
						</div>
						<div className='embla__slide h-[100%] min-w-[50%]'>
							<img
								src='../../src/assets/images/slide-3.png'
								alt='image-slider'
								className='object-cover h-full w-full '
							/>
						</div>
					</div>
					<div className='absolute top-[50%] w-[100%] flex items-center justify-between pr-4 left-2'>
						<button
							aria-label='previous button'
							className='btn rounded-full top-[50%] -left-5 btn-sm p-0 w-12 h-12 shadow-md'
							type='button'
							onClick={() => emblaApi?.scrollPrev()}
						>
							<IoIosArrowBack className='h-5 w-5' />
						</button>
						<button
							aria-label='next button'
							className='btn right-0 top-[50%] rounded-full btn-sm p-0 w-12 h-12'
							type='button'
							onClick={() => emblaApi?.scrollNext()}
						>
							<IoIosArrowForward className='h-5 w-5' />
						</button>
					</div>
				</div>
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
					{newProducts.map((product) => {
						return (
							<Card
								key={product.id}
								product={product}
								onViewDetails={handleOpenModal}
							/>
						);
					})}
					<Modal
						product={selectedProduct}
						isOpen={isModalOpen}
						onClose={handleCloseModal}
					/>
				</div>
				<div className='flex items center justify-center'>
					<button
						className='btn btn-neutral btn-sm w-32 mt-6'
						onClick={() => setShowMore((prevState) => !prevState)}
					>
						{showMore ? 'View less' : 'View more'}
					</button>
				</div>
			</section>

			{/*  */}
			<section>
				<div className='grid grid-cols-2 gap-2 mt-[2rem] bg-[#DADADA]'>
					<img
						src={image5}
						className='block w-full h-full object-cover'
						alt=''
					/>
					<div className='py-[1.5rem] pl-[3rem] flex flex-col gap-2'>
						<p className='font-light text-xs'>Women Collection</p>
						<h2 className='text-[29px] font-bold'>Peaky Blinders</h2>
						<p className='underline cursor-pointer text-xs font-semibold'>
							Description
						</p>
						<p className='text-xs text-pretty w-[80%]'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
							libero temporibus incidunt dolorem itaque cupiditate eveniet dicta
							ad consectetur ipsam non explicabo, qui ratione ipsa expedita
							nulla quod adipisci quasi!
						</p>
						<div className='flex items-center gap-2'>
							<span>Size:</span>
							<span className='btn btn-xs btn-neutral px-[.6rem] rounded-sm'>
								M
							</span>
						</div>

						<p className='font-bold text-xl'>$100.00</p>
						<button className='w-fit btn btn-neutral btn-sm px-6'>
							Buy now
						</button>
					</div>
				</div>
				<div className='flex items-center justify-between p-8 bg-gray-100'>
					<div className='flex gap-1 items-center'>
						<FaHandHoldingHeart className='w-8 h-8' />
						<div className='flex flex-col'>
							<p className='text-[13.5px] font-semibold capitalize'>
								Hight quality
							</p>
							<span className='text-[12px] font-light capitalize'>
								crafted from top materials
							</span>
						</div>
					</div>
					<div className='flex gap-1 items-center'>
						<GrCertificate className='w-8 h-8' />
						<div className='flex flex-col'>
							<p className='text-[13.5px] font-semibold capitalize'>
								Warrany Protection
							</p>
							<span className='text-[12px] font-light capitalize'>
								over 2 years
							</span>
						</div>
					</div>
					<div className='flex gap-1 items-center'>
						<RxCodesandboxLogo className='w-8 h-8' />
						<div className='flex flex-col'>
							<p className='text-[13.5px] font-semibold capitalize'>
								Free Shipping
							</p>
							<span className='text-[12px] font-light capitalize'>
								Oder over 150$
							</span>
						</div>
					</div>
					<div className='flex gap-1 items-center'>
						<FaPhone className='w-8 h-6' />
						<div className='flex flex-col'>
							<p className='text-[13.5px] font-semibold capitalize'>
								24 / 7 support
							</p>
							<span className='text-[12px] font-light capitalize'>
								Dedicated support
							</span>
						</div>
					</div>
				</div>
			</section>
			<section className='mt-[5rem]'>
				<div className='flex flex-col py-2 gap-4 items-center '>
					<h2 className='capitalize text-4xl font-light mb-3'>
						Follow Us On Instagram
					</h2>
					<p className='w-[800px] text-center text-balance text-sm'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
						voluptatem ducimus minima adipisci similique, vitae laboriosam eum
						debitis doloribus dolorum!
					</p>
				</div>

				<div className='grid grid-cols-7 gap-4 py-4 mt-5 justify-center'>
					<img src='../../src/assets/images/ig-2.png' alt='' />
					<img src='../../src/assets/images/ig-3.png' alt='' />
					<img src='../../src/assets/images/ig-4.png' alt='' />
					<img src='../../src/assets/images/ig-5.png' alt='' />
					<img src='../../src/assets/images/ig-6.png' alt='' />
					<img src='../../src/assets/images/ig-2.png' alt='' />
					<img src='../../src/assets/images/ig-3.png' alt='' />
				</div>
			</section>

			<Carousel />
			<NewsLetters />
		</section>
	);
};
export default Home;
