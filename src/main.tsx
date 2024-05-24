import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ViewProvider } from './Context/ViewContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ViewProvider>
			<App />
		</ViewProvider>
	</React.StrictMode>,
);
