import { Badge } from '@mui/joy'
import { ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {

    return <Badge {...props}/>
}


const config: ComponentInfo = {
    name: 'Badge',
    noWrap: true,
    canHaveChildren: true,
    inputs: [
        {
            name: 'anchorOrigin',
            type: 'text',
        },
        {
            name: 'badgetInset',
            type: 'number',
            defaultValue: 0,
        },
        {
            name: 'color',
            type: 'text',
            enum: ['primary', 'neutral', 'danger', 'success', 'warning', 'info'],
        },
		{
			name: 'components',
			type: 'string',
		},
        {
            name: 'invisible',
            type: 'boolean',
        },
        {
            name: 'max',
            type: 'number',
            defaultValue: 99,
        },
        {
            name: 'showZero',
            type: 'boolean',
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
            enum: ['solid', 'soft', 'outlined', 'plain'],
        },
    ],
    defaultChildren: [
        {
            '@type': '@builder.io/sdk:Element',
            component: { name: 'Icon', options: { text: 'Icon 1' } },
        },
    ],
}

export default {
    component,
    ...config,
}