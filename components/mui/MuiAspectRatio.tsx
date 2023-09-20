import { AspectRatio } from '@mui/joy'
import { ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {

    return <AspectRatio {...props}/>
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
    docsLink: "https://mui.com/joy-ui/api/aspect-ratio/"
}

export default {
    component,
    ...config,
}
