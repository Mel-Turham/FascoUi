import { Home } from './pages/index';

import './App.css';

const App = () => {
	return (
		<>
			<main className='large-screen px-[3rem] mx-auto w-[1090px] lg:block max-md:hidden'>
				<Home />
			</main>

			<h1 className='small-screen'>Please is only on large screen re-size your device!!!!!</h1>
		</>
	);
};
export default App;
