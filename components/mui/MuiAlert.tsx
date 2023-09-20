import { Alert } from '@mui/joy'
import { Blocks, ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {
  const { children, startDecorator, endDecorator, ...rest } = props

  return (
    <Alert
        {...rest}
        startDecorator={
            <Blocks
                blocks={startDecorator}
                parent={props.builderBlock && props.builderBlock.id}
                path={'component.options.startDecorator'}
            />
        }
        endDecorator={
            <Blocks
                blocks={endDecorator}
                parent={props.builderBlock && props.builderBlock.id}
                path={'component.options.endDecorator'}
            />
        }
    >
        {children}
    </Alert>
)
}

const config: ComponentInfo = {
  name: 'Alert',
  noWrap: true,
  canHaveChildren: true,
  inputs: [
    {
      name: 'color',
      type: 'text',
      enum: ['primary', 'neutral', 'danger', 'success', 'warning', 'info'],
      defaultValue: 'neutral',
    },
    {
      name: 'component',
      type: 'string',
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
      name: 'invertedColors',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'role',
      type: 'string',
      defaultValue: 'alert',
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
      name: 'variant',
      type: 'text',
      enum: ['solid', 'soft', 'outlined', 'plain'],
    },
  ],
  docsLink: "https://mui.com/joy-ui/api/alert/"
}

export default {
  component,
  ...config,
}
