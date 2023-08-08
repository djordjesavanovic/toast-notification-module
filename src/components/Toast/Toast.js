import React, { useEffect } from 'react';
import './toast.css';
import { variants, infoIcons, closeIcons } from './assets/constants';

// Toast component for displaying toast notifications
const Toast = ({ id, type, title, message, duration, removeToast }) => {
	// Retrieve the appropriate info and close icons for the given type
	const infoIcon = infoIcons[type];
	const closeIcon = closeIcons[type];

	// useEffect hook to set a timer that will remove the toast after a specified duration
	useEffect(() => {
		const removeThisToast = () => removeToast(id);

		const timer = setTimeout(removeThisToast, duration);

		return () => clearTimeout(timer); // Clear the timer if the component is unmounted before the duration expires
		// eslint-disable-next-line
	}, [id, duration]); // Only depend on id and duration, not the removeToast function itself

	// Render the toast notification
	return (
		<div className={`toast toast-${type}`} data-testid="toast">
			<div className={'toast-icon-container'}>
				<img src={infoIcon} alt={'Info Icon'}/>
			</div>
			<div className={'toast-content'}>
				<h4 className={`toast-title toast-title-${type}`}>{title || variants[type]}</h4>
				<p className={`toast-message toast-message-${type}`}>{message}</p>
			</div>
			<div onClick={() => removeToast(id)} className={'toast-close-icon-container'} data-testid="close-button">
				<img src={closeIcon} className={'toast-close-icon'} alt={'Close Button'}/>
			</div>
		</div>
	);
};

export default Toast;
