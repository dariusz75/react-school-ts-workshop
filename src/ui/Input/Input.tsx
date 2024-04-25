import { type ComponentPropsWithRef, type Ref, useId, forwardRef } from 'react';

type Props = {
	label: string;
} & ComponentPropsWithRef<'input'>;

export const Input = forwardRef(
	({ label, type }: Props, ref: Ref<HTMLInputElement>) => {
		const id = useId();
		return (
			<div className='my-2'>
				<label className='mr-2' htmlFor={id}>
					{label}
				</label>
				<input className='border' id={id} ref={ref} type={type} />
			</div>
		);
	}
);
