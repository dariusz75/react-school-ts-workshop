import { type ComponentProps } from 'react';
import { cn } from '../../utils/cn';
import './Button.css';

type Props = {
	label: string;
	secondary?: boolean;
	working?: boolean;
	// onClick: MouseEventHandler<HTMLButtonElement>;
} & ComponentProps<'button'>;

export const Button = ({
	label,
	secondary,
	working,
	className,
	...rest
}: Props) => {
	// const working = 'working';

	return (
		<button
			className={
				secondary
					? cn(
							`${working && 'working'} px-2 py-1 text-sm bg-white text-sky-900 rounded-[6px] border-solid border border-sky-900 hover:bg-sky-600 hover:text-white hover:border-sky-600 disabled:cursor-not-allowed disabled:bg-sky-200 disabled:border-sky-200`,
							className
						)
					: cn(
							`${working && 'working'} px-2 py-1 text-sm bg-sky-900 text-white rounded-[6px] border-solid border border-sky-900 hover:bg-sky-600 hover:border-sky-600 disabled:cursor-not-allowed disabled:bg-sky-200 disabled:border-sky-200`,
							className
						)
			}
			{...rest}
		>
			{label}
		</button>
	);
};
