import { CardActions } from '@mui/joy'
import { ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {
    const { children, ...rest } = props

    return <CardActions {...rest}>{children}</CardActions>
}

const config: ComponentInfo = {
    name: 'CardActions',
    noWrap: true,
    canHaveChildren: true,
	inputs: [
		{
			name: 'buttonFlex',
			type: 'number',
		},
		{
			name: 'component',
			type: 'string',
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
		
	],
	defaultChildren: [
        {
            '@type': '@builder.io/sdk:Element',
            component: { name: 'CardActions' },
        },
    ],
}

export default {
    component,
    ...config,
}