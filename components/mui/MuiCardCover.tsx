import { CardCover } from '@mui/joy'
import { ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {
  return <CardCover {...props} />
}

const config: ComponentInfo = {
  name: 'CardCover',
  noWrap: true,
  canHaveChildren: true,
  requiresParent: {
    message: 'CardCover must be within a Card',
    query: {
      'component.name': { $in: ['Card'] },
    },
  },
  inputs: [
    {
      name: 'component',
      type: 'string',
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
      component: { name: 'CardContent' },
    },
  ],
  docsLink: 'https://mui.com/joy-ui/api/card-cover/',
}

export default {
  component,
  ...config,
}
