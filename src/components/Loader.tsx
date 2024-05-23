import BallLoading from '../../src/assets/svg/Ball.svg';

const Loader = () => {
	return (
		<section className='w-full h-full fixed top-0 left-0 bg-white backdrop-blur-sm flex items-center justify-center flex-col'>
			<div className='flex items-center justify-center'>
				{Array.from({ length: 3 }, (_, index) => {
					return (
						<img
							key={index}
							src={BallLoading}
							alt='Loading-ball'
							className='w-[90px]'
						/>
					);
				})}
			</div>
			<h1 className='text-4xl font-semibold'>Loading...</h1>
		</section>
	);
};
export default Loader;
