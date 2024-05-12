import { type ChangeEvent } from 'react';

type Props = {
	dob: string;
	hobby: string;
};

type Step2Props = Props & {
	updateForm: ChangeEvent<HTMLInputElement>;
};

export const Step2 = ({ dob, hobby, updateForm }: Step2Props) => {
	return (
		<>
			<div className='mb-4'>
				<label
					className='block text-gray-700 text-sm font-bold mb-2'
					htmlFor='firstName'
				>
					Date of birth
				</label>
				<input
					className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
					id='dob'
					type='text'
					value={dob}
					onChange={(e) => updateForm(e)}
				/>
			</div>
			<div className='mb-6'>
				<label
					className='block text-gray-700 text-sm font-bold mb-2'
					htmlFor='surname'
				>
					Hobby
				</label>
				<input
					className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
					id='hobby'
					type='text'
					value={hobby}
					onChange={(e) => updateForm(e)}
				/>
				<p className='text-red-500 text-xs italic'>error message</p>
			</div>
		</>
	);
};
