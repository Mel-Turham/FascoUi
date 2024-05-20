import { type ProductsType } from '../data';


const Modal = ({ image, price, name, author}: ProductsType) => {
	return (
		<div className='w-full h-full bg-black/65 fixed z-40 top-0 left-0 flex items-center justify-center '>
			<div className='w-[500px] max-w-[100%] bg-white text-black  p-4 shadow-sm'>
				<figure className='w-1/2 h-full'>
					<img src={image} alt={name} className='w-full object-cover' />
				</figure>
				<div className='w-1/2 flex flex-col'>
					<h2>{name}</h2>
					<h3>{author}</h3>
					<p>{price}</p>
				</div>
			</div>
		</div>
	);
};
export default Modal;
