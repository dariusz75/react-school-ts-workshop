import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

const meta = {
	title: 'UI/Button',
	component: Button,
	tags: ['autodocs'],
	args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		label: 'Button',
	},
};

export const Secondary: Story = {
	args: {
		label: 'Button',
		className: 'bg-white text-blue-600 border-blue-600',
	},
};

export const Disabled: Story = {
	args: {
		label: 'Button',
		disabled: true,
	},
};
