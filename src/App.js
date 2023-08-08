import React, {useState} from 'react';
import './App.css';
import ToastContainer from "./components/Toast/ToastContainer";
import {ToastProvider, useToast} from "./providers/ToastProvider";

const Home = () => {
	const {addToast} = useToast();

	const [type, setType] = useState('');
	const [title, setTitle] = useState('');
	const [message, setMessage] = useState('');
	const [duration, setDuration] = useState(6000);

	const handleAddToast = () => {
		addToast(type, title, message, duration);
		setType('');
		setTitle('');
		setMessage('');
		setDuration(6000);
	};

	const handleShowToast = () => {
		addToast('success', 'Success', 'This is a success toast.', 6000);
	};

	return (
		<div className="app">
			<table>
				<tbody>
				<tr>
					<td>Type</td>
					<td>
						<select value={type} onChange={e => setType(e.target.value)} style={{minWidth: '100%'}}>
							<option value={''}>-</option>
							<option value={'success'}>Success</option>
							<option value={'warning'}>Warning</option>
							<option value={'danger'}>Danger</option>
						</select>
					</td>
				</tr>
				<tr>
					<td>Title</td>
					<td><input type={'text'} value={title} name={'title'} onChange={e => setTitle(e.target.value)}/>
					</td>
				</tr>
				<tr>
					<td>Message</td>
					<td><input type={'text'} value={message} name={'message'}
							   onChange={e => setMessage(e.target.value)}/></td>
				</tr>
				<tr>
					<td>Duration</td>
					<td><input type={'number'} value={duration} name={'duration'}
							   onChange={e => setDuration(parseInt(e.target.value))}/></td>
				</tr>
				<tr>
					<td colSpan={2}>
						<button
							disabled={!type || !message}
							style={{width: '100%'}}
							onClick={() => handleAddToast()}
						>
							Show Custom Toast
						</button>
						<button
							onClick={() => handleShowToast()}
							style={{width: '100%'}}
						>
							Show Default Toast
						</button>
					</td>
				</tr>
				</tbody>
			</table>
			{/*Container for all toasts.*/}
			<ToastContainer/>
		</div>
	);
}

const App = () => (
	<ToastProvider>
		<Home/>
	</ToastProvider>
);

export default App;
