const Footer = () => {
	return (
		<footer className='flex flex-col gap-6 py-5 border-t border-gray-500'>
			<menu className='flex px-20 justify-between items-center'>
				<h1 className='text-2xl'>
					Fasco<span className='font-normal'>.mel</span>
				</h1>
				<ul className='flex gap-2 items-center'>
					<li className="text-[12px] text-gray-500">Support center</li>
					<li className="text-[12px] text-gray-500">Invoicing</li>
					<li className="text-[12px] text-gray-500">Contact</li>
					<li className="text-[12px] text-gray-500">Careers</li>
					<li className="text-[12px] text-gray-500">Blog</li>
					<li className="text-[12px] text-gray-500">FAQ's</li>
				</ul>
			</menu>
			<p className='text-center flex items-center justify-center gap-2 text-[12.5px] font-normal'>
				<span> Copyright © 2024 FASCO.mel . All Rights Reserved.</span>
				<span>Made with ❤️</span>
			</p>
		</footer>
	);
};
export default Footer;
