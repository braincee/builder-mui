import { ChipDelete } from '@mui/joy'
import { ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {

    return <ChipDelete {...props}/>
}

const config: ComponentInfo = {
    name: 'ChipDelete',
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
            component: { name: 'Icon', options: { text: 'Icon' } },
        },
    ],
}

export default {
    component,
    ...config,
}