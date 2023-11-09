import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],

};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Primary: Story = {
    args: {
        children: 'Text',
    },
};
Primary.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear: Story = {
    args: {
        children: 'Text',

    },
};

export const Outline: Story = {
    args: {
        children: 'Text',
    },
};
