import { Breadcrumbs } from '@mui/joy'
import { ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {

    return <Breadcrumbs {...props}/>
}

const config: ComponentInfo = {
    name: 'Breadcrumbs',
    noWrap: true,
    canHaveChildren: true,
	inputs: [
		{
			name: 'component',
			type: 'string',
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
	],
	docsLink: "https://mui.com/joy-ui/react-breadcrumbs/"
}

export default {
    component,
    ...config,
}