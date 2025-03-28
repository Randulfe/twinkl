import type { Meta, StoryObj } from '@storybook/react'
import { Post } from './Post'

const meta = {
  title: 'Post',
  component: Post,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Post>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}
