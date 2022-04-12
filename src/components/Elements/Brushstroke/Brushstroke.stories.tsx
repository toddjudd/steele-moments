import { Meta, Story } from '@storybook/react';

import { Brushstroke } from './Brushstroke';

const meta: Meta = {
  title: 'Components/Elements/Brushstroke',
  component: Brushstroke,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (props) => <Brushstroke {...props} />;

export const Primary = Template.bind({});
Primary.args = {};
