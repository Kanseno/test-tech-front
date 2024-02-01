import { argsToTemplate, type Meta, type StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'ButtonComponent',
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  render: (args: ButtonComponent) => ({
    props: {
      ...args,
    },
    template: `<app-button ${argsToTemplate(args)}></app-button>`,
  }),
};
export default meta;
type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  args: {
    value: 'Default',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    value: 'Default',
    disabled: true,
  },
};
