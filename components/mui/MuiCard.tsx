import { Card } from '@mui/joy'
import { ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {
  return <Card {...props} />
}

const config: ComponentInfo = {
  name: 'Card',
  noWrap: true,
  canHaveChildren: true,
  inputs: [
    {
      name: 'color',
      type: 'text',
      enum: ['danger', 'info', 'neutral', 'primary', 'success', 'warning'],
    },
    {
      name: 'components',
      type: 'string',
    },
    {
      name: 'invertedColors',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'orientation',
      type: 'text',
      enum: ['horizontal', 'vertical'],
      defaultValue: 'horizontal',
    },
    {
      name: 'size',
      type: 'text',
      enum: ['sm', 'md', 'lg'],
    },
    {
      name: 'slotProps',
      type: 'object',
      defaultValue: {},
    },
    {
      name: 'variant',
      type: 'text',
      enum: ['outlined', 'soft', 'solid', 'plain'],
    },
  ],
  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'CardContent' },
    },
  ],
  docsLink: 'https://mui.com/joy-ui/react-card/',
}

export default {
  component,
  ...config,
}
