import { IoClose } from 'react-icons/io5';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	product: {
		image: string;
		price: number;
		name: string;
		author: string;
	} | null;
}

const Modal = ({ product, isOpen, onClose }: ModalProps) => {
	if (!isOpen || !product) return null;
	return (
		<div className='w-full h-full bg-black bg-opacity-50 backdrop-blur-sm fixed z-40 top-0 left-0 flex items-center justify-center '>
			<div className='w-[550px] max-w-[100%] bg-white rounded-md text-black flex gap-4 relative p-4 shadow-sm transition-all'>
				<button arial-label='Close modal'
				title='close'
					onClick={onClose}
					className='absolute right-2 top-2 h-5 w-5 bg-slate-100 grid place-content-center p-3  rounded-full '
				>
					<IoClose className='w-5 h-5' />
				</button>
				<figure className='w-1/2 h-full'>
					<img
						src={product?.image}
						alt={product?.name}
						className='w-full object-cover'
					/>
				</figure>
				<div className='w-1/2 flex flex-col'>
					<h2 className='text-[1.35rem] font-semibold '>{product?.name}</h2>
					<h3 className='underline mb-1'>Author: {product?.author}</h3>
					<p className='font-bold'>Price: ${product?.price.toFixed(2)}</p>
					<p className='font-light text-[12px] text-pretty line-clamp-3'>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
						assumenda, accusamus sed soluta magnam aspernatur laborum placeat,
						recusandae voluptates in culpa sit excepturi perferendis nesciunt ex
						numquam doloremque, quae facilis?
					</p>
          <button aria-label='Add to card' title='add product' className='btn w-fit btn-sm mt-2 btn-neutral'>Add to card</button>
				</div>
			</div>
		</div>
	);
};
export default Modal;
