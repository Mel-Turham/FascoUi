type CardProps = {
	children: React.ReactNode;
};

const Card = (props: CardProps) => {
	return <article className="card p-4 bg-white rounded-sm shadow-sm cursor-pointer">{props.children}</article>;
};
export default Card;
