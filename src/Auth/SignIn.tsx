import { useView } from '../Context/ViewContext';
import { IoClose } from 'react-icons/io5';

const SignIn = () => {
	const { setView } = useView();
	return (
		<div className='fixed w-full z-10 h-screen top-0 left-0 backdrop-blur-sm flex items-center justify-center'>
			<div className='w-[40rem] max-w-[100%] grid grid-cols-3  bg-white relative'>
				<button
					onClick={() => setView(null)}
					className='absolute right-2 top-3 p-2 rounded-full h-8 grid place-content-center w-8 bg-white z-10'
					aria-label='close-sign'
				>
					<IoClose  className='fill-black w-5 h-5'/>
				</button>
				<form className=' col-start-1 col-end-3 p-7 flex flex-col gap-3'>
					<div className='flex flex-col gap-2'>
						<h1 className='text-3xl font-bold'>Sign In</h1>
						<p className='text-[12px] font-light text-balance'>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry.
						</p>
					</div>
					<div className='flex flex-col gap-1 w-[65%]'>
						<label className='text-sm font-medium' htmlFor='email-sign'>
							Address Email
						</label>
						<input
							className='border-2 outline-none px-[1.2px] border-stone-500 rounded'
							type='email'
							id='email-sign'
							name='email'
							autoComplete='off'
							required
						/>
					</div>
					<div className='flex flex-col gap-1 w-[65%]'>
						<label className='text-sm font-medium' htmlFor='name'>
							User name
						</label>
						<input
							className='border-2 outline-none px-[1.2px] border-stone-500 rounded'
							type='text'
							id='name'
							name='name'
							autoComplete='off'
						/>
					</div>
					<div className='flex flex-col gap-1 w-[65%]'>
						<label className='text-sm font-medium' htmlFor='password'>
							Password
						</label>
						<input
							className='border-2 outline-none px-[1.2px] border-stone-500 rounded'
							type='password'
							id='password'
							name='password'
							autoComplete='off'
						/>
					</div>
					<div className='w-[65%] flex justify-between items-center'>
						<input
							className='accent-black'
							type='checkbox'
							name='pwdForget'
							id='pwdForget'
						/>
						<label className='text-[11.5px]' htmlFor='pwdForget'>
							Forgot Password?
						</label>
					</div>
					<button
						className='btn btn-sm w-[65%] btn-neutral'
						type='submit'
						aria-label='submit-button'
					>
						Sign In
					</button>
				</form>
				<div className='bg-stone-800 w-full h-full relative col-start-3 col-end-4'>
					<img
						className='absolute -left-28 top-[50%] translate-y-[-50%]'
						src='../../src/assets/images/login-image.png'
						alt='login image'
						loading='lazy'
					/>
				</div>
			</div>
		</div>
	);
};
export default SignIn;
