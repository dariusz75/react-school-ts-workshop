import { type FormEventHandler, useState, useRef } from 'react';
import { Button } from '../../ui';

type RegistrationFormData = {
	email: string;
	password: string;
	language: string;
};

export const RegistrationFormRefs = () => {
	const emailFieldRef = useRef<HTMLInputElement>(null);
	const passwordFieldRef = useRef<HTMLInputElement>(null);
	const languageFieldRef = useRef<HTMLInputElement>(null);

	const handleSubmit: FormEventHandler = (e) => {
		e.preventDefault();
		const data: RegistrationFormData = {
			email: emailFieldRef.current?.value || '',
			password: passwordFieldRef.current?.value || '',
			language: languageFieldRef.current?.value || '',
		};
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className='my-2'>
				<label className='mr-2' htmlFor='email'>
					E-mail
				</label>
				<input className='border' id='email' type='email' ref={emailFieldRef} />
			</div>
			<div className='my-2'>
				<label className='mr-2' htmlFor='password'>
					Password
				</label>
				<input
					className='border'
					id='password'
					type='password'
					ref={passwordFieldRef}
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
					ref={languageFieldRef}
				/>
			</div>
			<Button label='SEND' type='submit' />
		</form>
	);
};
