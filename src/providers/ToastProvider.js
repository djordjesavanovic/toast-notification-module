import React, { createContext, useContext, useState } from 'react';

// Create a React context for managing toast notifications
const ToastContext = createContext();

// ToastProvider is a context provider that wraps around components to enable (multiple) toast functionality
export const ToastProvider = ({ children }) => {
	// useState hook to manage an array of toast objects
	const [toasts, setToasts] = useState([]);

	// Function to add a new toast notification
	const addToast = (type, title, message, duration = 6000) => {
		const id = Math.random(); // Generate a random ID for the toast
		// Update the toasts state by adding a new toast object
		setToasts(prevToasts => [...prevToasts, { id, type, title, message, duration }]);
	};

	// Function to remove a toast notification by its ID
	const removeToast = (id) => {
		// Update the toasts state by filtering out the toast with the matching ID
		setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
	};

	// Render the context provider with toasts and related actions available for children components
	return (
		<ToastContext.Provider value={{ toasts, addToast, removeToast }}>
			{children}
		</ToastContext.Provider>
	);
};

// Custom hook to allow child components to easily access the toast context
export const useToast = () => useContext(ToastContext);
