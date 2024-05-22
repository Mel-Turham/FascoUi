import { FaStar } from 'react-icons/fa';

interface Product {
	image: string;
	price: number;
	name: string;
	author: string;
	id: number;
}

interface ProductsProps {
	product: Product;
	onViewDetails: (productId: number) => void;
}
const Card = ({ product, onViewDetails }: ProductsProps) => {
	return (
		<>
			<article className='card p-4 bg-white rounded-sm shadow-sm'>
				<figure>
					<img src={product?.image} alt={product?.name} />
				</figure>
				<div className='card-body py-4 px-0'>
					<div className='card-title leading-none items-start justify-between '>
						<div className='flex flex-col gap-2'>
							<p className='font-semibold text-sm'>{product?.name}</p>
							<span className='font-normal text-[13px]'>Author: {product?.author}</span>
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
						<p className='font-bold'>Price: ${product?.price.toFixed(2)}</p>
						<span className='font-normal text-[13px] text-[#FF4646]'>
							Almost Sold Out
						</span>
					</div>
					<button
						onClick={() => onViewDetails(product.id)}
						className='btn btn-sm btn-outline capitalize'
					>
						See details
					</button>
				</div>
			</article>
		</>
	);
};
export default Card;
