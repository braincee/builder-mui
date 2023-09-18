import { ButtonGroup } from '@mui/joy'
import { ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {

  return <ButtonGroup {...props}/>
}


const config: ComponentInfo = {
  name: 'ButtonGroup',
  noWrap: true,
  canHaveChildren: true,
  inputs: [
    {
      name: 'buttonFlex',
      type: 'number | string',
    },
    {
      name: 'color',
      type: 'text',
      enum: ['primary', 'neutral', 'danger', 'success', 'warning', 'info'],
    },
    {
      name: 'component',
      type: 'string',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false,
    },
    {
      name: 'orientation',
      type: 'text',
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
      name: 'spacing',
      type: 'number',
      defaultValue: 0,
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
      component: { name: 'Button', options: { text: 'Button 1' } },
    },
  ],
}

export default {
  component,
  ...config,
}
