import { useState } from 'react';
import { Button } from '../../ui';

export const RegistrationFormState = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [language, setLanguage] = useState('');

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
					id='email'
					type='email'
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
			</div>
			<div className='my-2'>
				<label className='mr-2' htmlFor='password'>
					Password
				</label>
				<input
					id='password'
					type='password'
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
			</div>
			<div className='my-2'>
				<label className='mr-2' htmlFor='language'>
					Language
				</label>
				<input
					id='language'
					type='text'
					onChange={(e) => {
						setLanguage(e.target.value);
					}}
				/>
			</div>
			<Button label='SEND' type='submit' />
		</form>
	);
};
