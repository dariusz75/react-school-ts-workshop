export const Step1 = () => {
	return (
		<form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-52 w-72'>
			<div className='mb-4'>
				<label
					className='block text-gray-700 text-sm font-bold mb-2'
					htmlFor='firstName'
				>
					First Name
				</label>
				<input
					className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
					id='firstName'
					type='text'
				/>
			</div>
			<div className='mb-6'>
				<label
					className='block text-gray-700 text-sm font-bold mb-2'
					htmlFor='surname'
				>
					Surname
				</label>
				<input
					className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
					id='surname'
					type='text'
				/>
				<p className='text-red-500 text-xs italic'>error message</p>
			</div>
		</form>
	);
};
