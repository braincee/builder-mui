import { Skeleton } from '@mui/joy'
import { ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {

    return <Skeleton {...props}/>
}

const config: ComponentInfo = {
    name: 'Skeleton',
    noWrap: true,
    canHaveChildren: true,
    inputs: [
		{
			name: 'animation',
			type: 'string',
			enum: ['pulse', 'wave', 'false'],
			defaultValue: 'false'
		},
        {
            name: 'component',
            type: 'string',
        },
        {
            name: 'height',
            type: 'number',
		  
        },
		{
			name: 'level',
			type: 'string',
			enum: ['h1', 'h2', 'h3', 'h4', 'title-lg', 'title-md', 'title-sm', 'body-lg', 'body-md', 'body-sm', 'body-xs', 'inherit'],
			defaultValue: 'inherit',
		},
		{
			name: 'loading',
			type: 'boolean',
			defaultValue: 'false',
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
            name: 'variant',
            type: 'text',
            enum: ['circular', 'inline', 'overlay', 'rectangular', 'text'],
			defaultValue: 'overlay',
        },
		{
			name: 'width',
			type: 'number',
		},
    ],
    defaultChildren: [
        {
            '@type': '@builder.io/sdk:Element',
            component: { name: 'Skeleton' },
        },
    ],
}

export default {
    component,
    ...config,
}

