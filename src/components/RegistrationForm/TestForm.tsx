import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '../../ui';

type Inputs = {
	email: string;
	password: string;
};

export const TestForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className='my-2'>
				<label className='mr-2'>Email:</label>
				<input
					className='border'
					type='email'
					{...register('email', { required: true })}
				/>
				{errors.email && <p className='text-red-500'>This field is required</p>}
			</div>
			<div className='my-2'>
				<label className='mr-2'>Password:</label>
				<input
					className='border'
					type='password'
					{...register('password', { required: true })}
				/>
				{errors.password && (
					<p className='text-red-500'>This field is required</p>
				)}
			</div>

			<Button label='SEND' type='submit' />
		</form>
	);
};
