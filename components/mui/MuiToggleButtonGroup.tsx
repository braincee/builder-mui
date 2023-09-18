import { ToggleButtonGroup } from '@mui/joy'
import { ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {

    return <ToggleButtonGroup {...props}/>
}

const config: ComponentInfo = {
    name: 'ToggleButtonGroup',
    noWrap: true,
    canHaveChildren: true,
    inputs: [
		{
			name: 'buttonFlex',
			type: 'number',
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
            defaultValue: 'false',
        },
		{
            name: 'orientation',
            type: 'text',
            enum: ['horizontal', 'vertical'],
            defaultValue: 'horizontal',
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
			name: 'value',
			type: 'string',
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
            component: { name: 'ToggleButtonGroup' },
        },
    ],
}

export default {
    component,
    ...config,
}

