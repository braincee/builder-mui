import { MenuItem } from '@mui/joy'
import { ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {
  return <MenuItem {...props} />
}

const config: ComponentInfo = {
  name: 'MenuItem',
  noWrap: true,
  canHaveChildren: true,
  requiresParent: {
    message: 'MenuItem must be within a Card',
    query: {
      'component.name': { $in: ['Menu', 'List', 'MenuList'] },
    },
  },
  inputs: [
    {
      name: 'color',
      type: 'text',
      enum: ['danger', 'info', 'neutral', 'primary', 'success', 'warning'],
    },
    {
      name: 'orientation',
      type: 'text',
      enum: ['horizontal', 'vertical'],
      defaultValue: 'horizontal',
    },
    {
      name: 'selected',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'slotProps',
      type: 'object',
      defaultValue: {},
    },
    {
      name: 'variant',
      type: 'text',
      enum: ['solid', 'soft', 'outlined', 'plain'],
    },
  ],
  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Text', options: { name: 'Add item' } },
    },
  ],
  docsLink: 'https://mui.com/joy-ui/api/menu-item/',
}

export default {
  component,
  ...config,
}
