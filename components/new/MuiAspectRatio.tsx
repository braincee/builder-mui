import { AspectRatio } from '@mui/joy'
import { ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {
    const { children, ...rest } = props

    return <AspectRatio {...rest}>{children}</AspectRatio>
}

const config: ComponentInfo = {
    name: 'AspectRatio',
    noWrap: true,
    canHaveChildren: true,
    inputs: [
        {
            name: 'color',
            type: 'text',
            enum: ['danger', 'info', 'neutral', 'primary', 'success', 'warning'],
        },
        {
            name: 'component',
            type: 'string',
        },
        {
            name: 'flex',
            type: 'boolean',
        },
        {
            name: 'maxHeight',
            type: 'number',
        },
        {
            name: 'minHeight',
            type: 'number',
        },
        {
            name: 'objectFit',
            type: 'text',
            enum: [
                'contain',
                'cover',
                'fill',
                'inherit',
                'initial',
                'none',
                'revert-layer',
                'revert',
                'scale-down',
                'unset',
            ],
        },
        {
            name: 'ratio',
            type: 'string',
            defaultValue: '16 / 9',
        },
        {
            name: 'slotProps',
            type: 'object',
            defaultValue: {},
        },
        {
            name: 'variant',
            type: 'text',
            enum: ['outlined', 'plain', 'soft', 'solid'],
        },
    ],
    defaultChildren: [
        {
            '@type': '@builder.io/sdk:Element',
            component: { name: 'Text', options: { text: 'Aspect Ratio', type: 'outlined' } },
        },
    ],
}

export default {
    component,
    ...config,
}
