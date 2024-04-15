import { MouseEventHandler } from 'react';

type Props = {
	label: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ label, onClick }: Props) => {
	return (
		<button
			className='px-4 py-1 text-sm bg-blue-600 text-white rounded-full border-blue-200'
			onClick={onClick}
		>
			{label}
		</button>
	);
};
