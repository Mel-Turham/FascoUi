import products from '../data';

type CardProps = {
	children: React.ReactNode;
	id: number;
};

const Card = (props: CardProps) => {
	const handleClick = (id: number) => {
		const item = products.find((product) => product.id === id);
		console.log(item);
	};

	return (
		<>
			<article
				onClick={() => handleClick(props.id)}
				className='card p-4 bg-white rounded-sm shadow-sm cursor-pointer'
			>
				{props.children}
			</article>
		</>
	);
};
export default Card;
