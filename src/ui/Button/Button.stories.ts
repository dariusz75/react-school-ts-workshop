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
		secondary: true,
	},
};

export const Working: Story = {
	args: {
		label: 'Button',
		working: true,
	},
};

export const Disabled: Story = {
	args: {
		label: 'Button',
		disabled: true,
	},
};

export const CustomStyling: Story = {
	args: {
		label: 'Button',
		className:
			'bg-red-600 text-white border-red-600 hover:bg-white hover:text-red-600 hover:border-red-600',
	},
};
