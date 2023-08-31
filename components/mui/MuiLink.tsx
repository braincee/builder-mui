//! Link needs to be wrapped in NextLink passhref
import { Link } from '@mui/joy'
import { Blocks, ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {
  const { children, startDecorator, endDecorator, ...rest } = props

  return (
    <Link
      {...rest}
      startDecorator={<Blocks blocks={startDecorator} />}
      endDecorator={<Blocks blocks={endDecorator} />}
    >
      {children}
    </Link>
  )
}

const config: ComponentInfo = {
  name: 'Link',
  noWrap: true,
  canHaveChildren: true,
  inputs: [
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
      defaultValue: 'false',
    },
    {
      name: 'endDecorator',
      type: 'blocks',
      hideFromUI: true,
      helperText: 'This is an editable region.',
      defaultValue: [
        {
          '@type': '@builder.io/sdk:Element',
          component: {
            name: 'Icon',
            options: {
              name: 'Edit',
            },
          },
          responsiveStyles: {
            large: {
              // Styles for the editable section
            },
          },
        },
      ],
    },
    {
      name: 'level',
      type: 'text',
      enum: [
        'body1',
        'body2',
        'body3',
        'inherit',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
      ],
      defaultValue: 'body1',
    },
    {
      name: 'overlay',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'slotProps',
      type: 'object',
      defaultValue: {},
    },
    {
      name: 'startDecorator',
      type: 'blocks',
      hideFromUI: true,
      helperText: 'This is an editable region.',
      defaultValue: [
        {
          '@type': '@builder.io/sdk:Element',
          component: {
            name: 'Icon',
            options: {
              name: 'Edit',
            },
          },
          responsiveStyles: {
            large: {
              // Styles for the editable section
            },
          },
        },
      ],
    },
    {
      name: 'textColor',
      type: 'text',
    },
    {
      name: 'underline',
      type: 'text',
      enum: ['always', 'hover', 'none'],
      defaultValue: 'hover',
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
      component: { name: 'Text', options: { text: 'I am child text block!' } },
    },
  ],
}

export default {
  component,
  ...config,
}
