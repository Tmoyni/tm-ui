import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
  args: {
    children: 'Click here',
    variant: 'primary',
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

/**
 * Comprehensive showcase of all button variants and states.
 * This story displays all combinations for visual regression testing.
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <div>
        <h3 style={{ marginBottom: '1rem', fontFamily: 'sans-serif' }}>Primary Variant</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Button variant="primary">Default</Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', fontFamily: 'sans-serif' }}>Secondary Variant</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Button variant="secondary">Default</Button>
          <Button variant="secondary" disabled>
            Disabled
          </Button>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', fontFamily: 'sans-serif' }}>Interaction States</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontSize: '0.875rem', marginBottom: '0.5rem', fontFamily: 'sans-serif' }}>
              Hover over me
            </p>
            <Button variant="primary">Hover State</Button>
          </div>
          <div>
            <p style={{ fontSize: '0.875rem', marginBottom: '0.5rem', fontFamily: 'sans-serif' }}>
              Click and hold
            </p>
            <Button variant="primary">Active State</Button>
          </div>
          <div>
            <p style={{ fontSize: '0.875rem', marginBottom: '0.5rem', fontFamily: 'sans-serif' }}>
              Tab to focus
            </p>
            <Button variant="primary">Focus State</Button>
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', fontFamily: 'sans-serif' }}>Long Text</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Button variant="primary">This is a button with longer text content</Button>
          <Button variant="secondary">This is a button with longer text content</Button>
        </div>
      </div>
    </div>
  ),
};
