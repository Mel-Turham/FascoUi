import { FaStar } from 'react-icons/fa';

type ProductType = {
	image: string;
	price: number;
	name: string;
	author: string;
	id: number;
	handlerClick: ({ id }: { id: number }) => void;
};
const Card = (props: ProductType) => {
	const { image, name, author, price, id, handlerClick } = props;
	return (
		<>
			<article className='card p-4 bg-white rounded-sm shadow-sm'>
				<figure>
					<img src={image} alt={name} />
				</figure>
				<div className='card-body py-4 px-0'>
					<div className='card-title leading-none items-start justify-between '>
						<div className='flex flex-col gap-2'>
							<p className='font-semibold text-sm'>{name}</p>
							<span className='font-normal text-[13px]'>{author}</span>
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
						<p className='font-bold'>${price.toFixed(2)}</p>
						<span className='font-normal text-[13px] text-[#FF4646]'>
							Almost Sold Out
						</span>
					</div>
					<button
						onClick={() => handlerClick({id})}
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
