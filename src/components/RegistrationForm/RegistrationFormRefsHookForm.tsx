import { useForm, type SubmitHandler } from 'react-hook-form';

import { Button, Input } from '../../ui';

type Inputs = {
	email: string;
	password: string;
	language: string;
};

export const RegistrationFormRefsHookForm = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();

	const submit: SubmitHandler<Inputs> = (data) => console.log(data);

	return (
		<form onSubmit={handleSubmit(submit)}>
			<Input
				id='email'
				label='Email'
				type='email'
				{...register('email', { required: true })}
			/>
			{errors.email && <p className='text-red-500'>Email is required</p>}
			<Input
				id='password'
				label='Password'
				type='password'
				{...register('password', { required: true })}
			/>
			{errors.password && <p className='text-red-500'>Password is required</p>}

			<Input
				id='language'
				label='Language'
				type='text'
				{...register('language')}
			/>
			<Button label='SEND' type='submit' />
		</form>
	);
};
