import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Toast from './Toast';

// Mock data and functions for testing
const mockToastProps = {
	type: 'success',
	title: 'Success',
	message: 'This is a success message',
	duration: 6000,
	removeToast: jest.fn(),
};

describe('Toast', () => {
	test('renders title and message correctly', () => {
		render(<Toast id={1} {...mockToastProps} />);

		// Check if the title is rendered correctly
		expect(screen.getByText('Success')).toBeInTheDocument();

		// Check if the message is rendered correctly
		expect(screen.getByText('This is a success message')).toBeInTheDocument();
	});

	// Test to verify the close functionality of a Toast component
	// Test to verify the close functionality of a Toast component
	test('closes toast on close button click', () => {
		// Mock the removeToast function
		const removeToast = jest.fn();

		// Mock props for the Toast component
		const toastProps = {
			id: 1,
			type: 'success',
			title: 'Success',
			message: 'This is a success message',
			duration: 6000,
			removeToast // Pass the mock function as a prop
		};

		// Render the Toast component
		render(<Toast {...toastProps} />);

		// Find the close button by its role or other accessible query
		const closeButton = screen.getByTestId('close-button');

		// Simulate a click on the close button
		fireEvent.click(closeButton);

		// Expect the removeToast function to have been called once with the correct id
		expect(removeToast).toHaveBeenCalledWith(1);
	});
});

