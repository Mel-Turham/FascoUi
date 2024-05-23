import { createContext, useState, useContext } from 'react';

type ViewType = 'Login' | 'signIn' | null;

interface ViewContextProps {
	view: ViewType;
	setView: (view: ViewType) => void;
}

const viewContext = createContext<ViewContextProps | undefined>(undefined);

export const ViewProvider = ({ children }: { children: React.ReactNode }) => {
	const [view, setView] = useState<ViewType>(null);

	return (
		<viewContext.Provider value={{ view, setView }}>
			{children}
		</viewContext.Provider>
	);
};

export const useView = (): ViewContextProps => {
	const context = useContext(viewContext);

	if (!context) {
		throw new Error('useView must be used within a ViewProvider');
	}

	return context;
};
