import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect } from 'react';

type PropsCarousels = {
	options?: EmblaOptionsType;
};

const Carousel = (props: PropsCarousels) => {
	const [emblaRef, emblaApi] = useEmblaCarousel(props.options);
  

	useEffect(() => {
		if (emblaApi) {
			console.log(emblaApi.slideNodes()); // Access API
      console.log(emblaApi);
		}
	}, [emblaApi]);

	return (
		<article
			className='embla overflow-hidden  col-start-2 col-end-4'
			ref={emblaRef}
		>
			<div className='embla__container grid grid-flow-row grid-cols-3'>
				<div className='embla__slide  bg-black '>Slide 1</div>
				<div className='embla__slide bg-indigo-600 '>Slide 2</div>
				<div className='embla__slide   bg-red-700'>Slide 3</div>
			</div>
		</article>
	);
};
export default Carousel;
