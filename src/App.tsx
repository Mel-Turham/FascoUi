import { Home } from './pages/index';
import Footer from './components/Footer';


import './App.css';

const App = () => {
	return (
		<>
			<main className='large-screen px-[3rem] mx-auto w-[1090px] lg:block max-md:hidden'>
				<Home />
			</main>
			<Footer/>
		</>
	);
};
export default App;
