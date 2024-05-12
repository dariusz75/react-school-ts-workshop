import { Button } from '../../../ui';

type Step3Props = {
	firstName: string;
	surname: string;
	dob: string;
	hobby: string;
};

export const Step3 = ({ firstName, surname, dob, hobby }: Step3Props) => {
	return (
		<>
			<div className='mb-1 inline-flex'>
				<div className=' text-gray-700 text-sm font-bold mb-2'>First Name:</div>
				<div className='ml-2 text-sm'>{firstName}</div>
			</div>
			<div className='mb-1 inline-flex'>
				<div className=' text-gray-700 text-sm font-bold mb-2'>Surname:</div>
				<div className='ml-2 text-sm'>{surname}</div>
			</div>
			<div className='mb-1 inline-flex'>
				<div className=' text-gray-700 text-sm font-bold mb-2'>DOB:</div>
				<div className='ml-2 text-sm'>{dob}</div>
			</div>
			<div className='mb-1 inline-flex'>
				<div className=' text-gray-700 text-sm font-bold mb-2'>Hobby:</div>
				<div className='ml-2 text-sm'>{hobby}</div>
			</div>
		</>
	);
};
