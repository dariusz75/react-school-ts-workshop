import { type ChangeEventHandler, useState } from 'react';
import { Button } from '../../ui';

type RegistrationFormData = {
	email: string;
	password: string;
	language: string;
};

export const RegistrationFormState = () => {
	const [formData, setFormData] = useState<RegistrationFormData>({
		email: '',
		password: '',
		language: '',
	});

	const { email, password, language } = formData;

	const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		const id = e.target.id;
		const value = e.target.value;

		setFormData({
			...formData,
			[id]: value,
		});
	};

	return (
		<form>
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
					onChange={handleChange}
				/>
			</div>
			<Button label='SEND' type='submit' />
		</form>
	);
};
