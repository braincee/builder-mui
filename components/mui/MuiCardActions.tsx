import { CardActions } from '@mui/joy'
import { ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {
  return <CardActions {...props} />
}

const config: ComponentInfo = {
  name: 'CardActions',
  noWrap: true,
  canHaveChildren: true,
  requiresParent: {
    message: 'CardActions must be within a Card',
    query: {
      'component.name': { $in: ['Card'] },
    },
  },
  inputs: [
    {
      name: 'buttonFlex',
      type: 'number',
    },
    {
      name: 'component',
      type: 'string',
    },
    {
      name: 'orientation',
      type: 'text',
      enum: ['horizontal', 'vertical'],
      defaultValue: 'horizontal',
    },
    {
      name: 'slotProps',
      type: 'object',
      defaultValue: {},
    },
  ],
  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Button', options: { text: 'Action 1' } },
    },
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Button', options: { text: 'Action 2' } },
    },
  ],
  docsLink: 'https://mui.com/joy-ui/api/card-actions/',
}

export default {
  component,
  ...config,
}
