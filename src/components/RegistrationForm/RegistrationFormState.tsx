import { type ChangeEventHandler, useState, FormEventHandler } from 'react';
import { Button } from '../../ui';

type RegistrationFormData = {
	email: string;
	password: string;
	language: string;
};

const defaultState = {
	email: '',
	password: '',
	language: '',
};

export const RegistrationFormState = () => {
	const [formData, setFormData] = useState<RegistrationFormData>(defaultState);

	const { email, password, language } = formData;

	const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		const id = e.target.id;
		const value = e.target.value;

		setFormData({
			...formData,
			[id]: value,
		});
	};

	const handleSubmit: FormEventHandler = (e) => {
		e.preventDefault();
		console.log(formData);
		setFormData(defaultState);
		console.log(formData);
	};

	return (
		<form onSubmit={handleSubmit}>
			<p>Email: {email}</p>
			<p>Password: {password}</p>
			<p>Language: {language}</p>
			<div className='my-2'>
				<label className='mr-2' htmlFor='email'>
					E-mail
				</label>
				<input
					className='border'
					id='email'
					type='email'
					value={email}
					onChange={handleChange}
				/>
			</div>
			<div className='my-2'>
				<label className='mr-2' htmlFor='password'>
					Password
				</label>
				<input
					className='border'
					id='password'
					type='password'
					value={password}
					onChange={handleChange}
				/>
			</div>
			<div className='my-2'>
				<label className='mr-2' htmlFor='language'>
					Language
				</label>
				<input
					className='border'
					id='language'
					type='text'
					value={language}
					onChange={handleChange}
				/>
			</div>
			<Button label='SEND' type='submit' />
		</form>
	);
};
