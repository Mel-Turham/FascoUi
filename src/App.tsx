import { Home } from './pages/index';
import Footer from './components/Footer';
import './App.css';
import { useEffect } from 'react';
import { useView } from './Context/ViewContext';
const App = () => {
	const { view } = useView();
	useEffect(() => {
		const bodyElement = document.querySelector<HTMLBodyElement>('body')!;
		if (view) {
			bodyElement.classList.add('overflow-hidden');
		} else {
			bodyElement.classList.remove('overflow-hidden');
		}
	}, [view]);
	return (
		<>
			<main className='large-screen px-[3rem] mx-auto w-[1090px] overflow-hidden'>
				<Home />
			</main>
			<Footer />
		</>
	);
};
export default App;
