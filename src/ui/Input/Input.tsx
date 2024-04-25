import { ComponentPropsWithRef } from 'react';

type Props = {
	label: string;
} & ComponentPropsWithRef<'input'>;

export const Input = ({ label }: Props) => {
	return <input type='text' />;
};
