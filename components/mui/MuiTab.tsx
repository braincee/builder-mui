import { Tab } from '@mui/joy'
import { ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {

    return <Tab {...props}/>
}

const config: ComponentInfo = {
    name: 'Tab',
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
			name: 'disableIndicator',
			type: 'boolean',
			defaultValue: 'false',
		},
		{
			name: 'indicatorInset',
			type: 'boolean',
			defaultValue: 'false',
		},
		{
			name: 'indicatorPlacement',
			type: 'string',
			enum: ['bottom', 'left', 'right', 'top'],
			defaultValue: 'top',
		},
		{
            name: 'orientation',
            type: 'text',
            enum: ['horizontal', 'vertical'],
            defaultValue: 'horizontal',
        },
	    {
            name: 'slotProps',
            type: 'object',
            defaultValue: {},
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
            component: { name: 'Tab' },
        },
    ],
}

export default {
    component,
    ...config,
}