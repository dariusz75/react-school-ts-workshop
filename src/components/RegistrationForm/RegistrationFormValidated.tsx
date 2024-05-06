import { useForm, type SubmitHandler } from 'react-hook-form';
import { Button, Input } from '../../ui';

type RegistrationFormData = {
	email: string;
	password: string;
	language: string;
};

export const RegistrationFormValidated = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegistrationFormData>();

	const handleRegistrationForm: SubmitHandler<RegistrationFormData> = (
		data
	) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(handleRegistrationForm)}>
			<Input
				label='Email'
				type='email'
				{...register('email', { required: true })}
			/>
			{errors.email && <p className='text-red-500'>Email is required</p>}
			<Input
				label='Password'
				type='password'
				{...register('password', { required: true })}
			/>
			{errors.password && <p className='text-red-500'>Password is required</p>}

			<Input label='Language' type='text' {...register('language')} />
			<Button label='SEND' type='submit' />
		</form>
	);
};
