import { type ComponentProps } from 'react';
import { cn } from '../../utils/cn';
import './Button.css';
import styles from './styles';

type Props = {
	label: string;
	secondary?: boolean;
	size?: 'small' | 'large';
	working?: boolean;
	// onClick: MouseEventHandler<HTMLButtonElement>;
} & ComponentProps<'button'>;

export const Button = ({
	label,
	secondary,
	working,
	className,
	size,
	...rest
}: Props) => {
	return (
		<button
			className={
				secondary
					? cn(
							`${working && 'working'} ${size === 'small' ? styles.small : styles.large}  bg-white text-sky-900 border-solid border border-sky-900 hover:bg-sky-600 hover:text-white hover:border-sky-600 disabled:cursor-not-allowed disabled:bg-sky-200 disabled:border-sky-200`,
							className
						)
					: cn(
							`${working && 'working'} ${size === 'small' ? styles.small : styles.large} ${working && 'working'} bg-sky-900 text-white border-solid border border-sky-900 hover:bg-sky-600 hover:border-sky-600 disabled:cursor-not-allowed disabled:bg-sky-200 disabled:border-sky-200`,
							className
						)
			}
			{...rest}
		>
			{label}
		</button>
	);
};
