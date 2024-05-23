import { Home } from './pages/index';
import Footer from './components/Footer';
import { ViewProvider } from './Context/ViewContext';

import './App.css';

const App = () => {
	return (
		<>
			<ViewProvider>
				<main className='large-screen px-[3rem] mx-auto w-[1090px]'>
					<Home />
				</main>
			</ViewProvider>
			<Footer />
		</>
	);
};
export default App;
