import { CardOverflow } from '@mui/joy'
import { ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {
  return <CardOverflow {...props} />
}

const config: ComponentInfo = {
  name: 'CardOverflow',
  noWrap: true,
  canHaveChildren: true,
  requiresParent: {
    message: 'CardOverflow must be within a Card',
    query: {
      'component.name': { $in: ['Card'] },
    },
  },
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
  docsLink: 'https://mui.com/joy-ui/api/card-overflow/',
}

export default {
  component,
  ...config,
}
