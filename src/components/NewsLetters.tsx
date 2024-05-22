const NewsLetters = () => {
	return (
		<section className='mt-8 py-4 grid place-content-center'>
			<div className='flex mx-auto items-center'>
				<img
					src='../../src/assets/images/newImage-1.png'
					alt=''
					className='h-[500px]'
				/>
				<form className=''>
					<div className='flex flex-col gap-3 items-center bg-white shadow-lg p-[4rem]'>
						<h3 className='text-2xl text-nowrap font-sans uppercase'>
							Subscribe To Our Newsletter
						</h3>
						<p className='text-center text-[13px] w-[400px]'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						</p>
						<input
							type='email'
							name='email'
							id='email'
							placeholder='melturham@gmail.com'
							autoComplete='off'
							className='w- w-full py-1 px-2 border-black border-solid outline-none border rounded-[2px] focus:outline focus:outline-black focus:border-none'
						/>
						<button className='btn btn-neutral btn-sm w-full' type='submit'>
							Subscribe now
						</button>
					</div>
				</form>
				<img
					src='../../src/assets/images/newImage-2.png'
					alt=''
					className='h-[500px]'
				/>
			</div>
		</section>
	);
};
export default NewsLetters;
