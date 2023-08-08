import React from 'react';
import Toast from './Toast';
import {useToast} from "../../providers/ToastProvider";

// ToastContainer component for rendering a collection of toast notifications
const ToastContainer = () => {
	// Using the useToast hook to access the toasts array and removeToast function
	const { toasts, removeToast } = useToast();

	// Rendering the ToastContainer component
	return (
		<div className="toast-container">
			{
				// Mapping over the toasts array and rendering a Toast component for each item
				toasts.map(toast => (
					<Toast key={toast.id} {...toast} removeToast={removeToast} />
				))
			}
		</div>
	);
};

export default ToastContainer;
