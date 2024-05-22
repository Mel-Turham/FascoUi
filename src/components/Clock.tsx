import { useState, useEffect } from 'react';

const Clock = () => {
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
		<div className='flex flex-col gap-5 w-1/3'>
			<p className='capitalize text-4xl font-medium'>Deals of the month</p>
			<p className='text-sm'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
				facilis deleniti enim optio dolores, esse totam debitis veritatis aut
				quaerat!
			</p>
			<button
				aria-label='buy button'
				title='buy'
				className='btn btn-sm btn-neutral shadow-md px-8 w-fit'
			>
				Buy now
			</button>
			<div className=' flex flex-col'>
				<p className='mb-3 text-lg font-semibold font-sans'>
					Hurry, before it's too late!
				</p>
				<div className='flex items-center gap-5'>
					<div className='flex flex-col justify-center items-center'>
						<span className='p-4 bg-white shadow-lg rounded-lg text-[1.2rem] font-bold'>
							{day}
						</span>
						<span>Day</span>
					</div>
					<div className='flex flex-col justify-center items-center'>
						<span className='p-4 bg-white shadow-lg rounded-lg text-[1.2rem] font-bold'>
							{hours}
						</span>
						<span>{parseInt(hours) > 1 ? 'Hrs' : 'Hr'}</span>
					</div>
					<div className='flex flex-col justify-center items-center'>
						<span className='p-4 bg-white shadow-lg rounded-lg text-[1.2rem] font-bold'>
							{minutes}
						</span>
						<span>{parseInt(minutes) > 1 ? 'mins' : 'min'}</span>
					</div>
					<div className='flex flex-col justify-center items-center'>
						<span className='p-4 bg-white shadow-lg rounded-lg text-[1.2rem] font-bold'>
							{seconds}
						</span>
						<span>sec</span>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Clock;
