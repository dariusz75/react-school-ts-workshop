import { type FormEventHandler, useRef, useEffect } from 'react';
import { Button, Input } from '../../ui';

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

	useEffect(() => {
		if (emailFieldRef.current) {
			emailFieldRef.current.focus();
		}
	});

	return (
		<form onSubmit={handleSubmit}>
			<Input label='Email' type='email' ref={emailFieldRef} />
			<Input label='Password' type='password' ref={passwordFieldRef} />
			<Input label='Language' type='text' ref={languageFieldRef} />
			<Button label='SEND' type='submit' />
		</form>
	);
};
