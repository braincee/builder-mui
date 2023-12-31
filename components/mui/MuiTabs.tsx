import { Tabs } from '@mui/joy'
import { ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {

    return <Tabs {...props}/>
}

const config: ComponentInfo = {
    name: 'Tabs',
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
			name: 'defaultValue',
			type: 'number',
		},
		{
			name: 'direction',
			type: 'string',
			enum: [ 'ltr', 'rtl' ],
			defaultValue: 'ltr',
		},
		{
            name: 'orientation',
            type: 'text',
            enum: ['horizontal', 'vertical'],
            defaultValue: 'horizontal',
        },
		{
			name: 'selectionFollowsFocus',
			type: 'boolean',
			defaultValue: 'false',
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
            name: 'value',
            type: 'number',
            defaultValue: 0,
        },
        {
            name: 'variant',
            type: 'text',
            enum: ['solid', 'soft', 'outlined', 'plain'],
        },
    ],
    docsLink: "https://mui.com/joy-ui/react-tabs/"
}

export default {
    component,
    ...config,
}