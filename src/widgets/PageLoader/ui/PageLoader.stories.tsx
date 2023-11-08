import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { PageLoader } from './PageLoader';

const meta: Meta<typeof PageLoader> = {
    title: 'widgets/PageLoader',
    component: PageLoader,
    tags: ['autodocs'],

};

export default meta;
type Story = StoryObj<typeof PageLoader>;

export const Primary: Story = {
    args: {
    },
};
Primary.decorators = [ThemeDecorator(Theme.DARK)];

export const Secondary: Story = {
    args: {
    },
};
