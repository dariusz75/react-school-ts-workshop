import { Button } from '../../../ui';

export const Step3 = () => {
	return (
		<div className='inline-flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-52 w-72'>
			<div className='mb-1 inline-flex'>
				<div className=' text-gray-700 text-sm font-bold mb-2'>First Name:</div>
				<div className='ml-2 text-sm'>Dariusz</div>
			</div>
			<div className='mb-1 inline-flex'>
				<div className=' text-gray-700 text-sm font-bold mb-2'>Surname:</div>
				<div className='ml-2 text-sm'>Franczak</div>
			</div>
			<div className='mb-1 inline-flex'>
				<div className=' text-gray-700 text-sm font-bold mb-2'>DOB:</div>
				<div className='ml-2 text-sm'>04/07/1975</div>
			</div>
			<div className='mb-1 inline-flex'>
				<div className=' text-gray-700 text-sm font-bold mb-2'>Hobby:</div>
				<div className='ml-2 text-sm'>Music</div>
			</div>
			<Button label='Console log' />
		</div>
	);
};
