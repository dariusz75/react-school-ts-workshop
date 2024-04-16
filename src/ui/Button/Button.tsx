import { type ComponentProps } from 'react';
import { cn } from '../../utils/cn';

type Props = {
	label: string;
	// onClick: MouseEventHandler<HTMLButtonElement>;
} & ComponentProps<'button'>;

export const Button = ({ label, className, ...rest }: Props) => {
	return (
		<button
			className={cn(
				'px-4 py-1 text-sm bg-blue-600 text-white rounded-full border-solid border-2 border-blue-600 hover:bg-blue-400 disabled:cursor-not-allowed disabled:bg-blue-200 disabled:border-blue-200',
				className
			)}
			{...rest}
		>
			{label}
		</button>
	);
};
