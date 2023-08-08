import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ToastContainer from './ToastContainer';
import { useToast } from '../../providers/ToastProvider';

// Mock data for testing
const mockToasts = [
	{ id: '1', type: 'success', title: 'Success', message: 'This is a success message', duration: 6000 },
	{ id: '2', type: 'warning', title: 'Warning', message: 'This is a warning message', duration: 6000 }
];

// Mocking the useToast hook to return our mock toasts
jest.mock('../../providers/ToastProvider', () => ({
	useToast: jest.fn()
}));

// Test to verify if the ToastContainer component renders the correct number of Toast components
describe('ToastContainer', () => {
	test('renders correct number of toasts', () => {
		// Providing the mock return value for the useToast hook
		useToast.mockReturnValue({ toasts: mockToasts, removeToast: jest.fn() });

		render(<ToastContainer />);

		// Expecting two toast elements in the document
		expect(screen.getAllByTestId('toast')).toHaveLength(2);
	});
});
