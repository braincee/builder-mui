import { SvgIcon } from '@mui/joy'
import { ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {

    return <SvgIcon {...props}/>
}

const config: ComponentInfo = {
    name: 'SvgIcon',
    noWrap: true,
    canHaveChildren: true,
    inputs: [
        {
            name: 'color',
            type: 'text',
            enum: ['primary', 'neutral', 'danger', 'success', 'warning', 'info', 'inherit'],
        },
		{
			name: 'component',
			type: 'string',
		},
        {
            name: 'fontSize',
            type: 'text',
            enum: [
                'lg',
                'md',
                'sm',
                'xl',
                'xl2',
                'xl3',
                'xl4',
                'xl5',
                'xl6',
                'xl7',
                'xs',
                'xs2',
                'xs3',
            ],
        },
        {
            name: 'htmlColor',
            type: 'string',
        },
        {
            name: 'inheritViewBox',
            type: 'boolean',
            defaultValue: 'false',
        },
        {
            name: 'shapeRendering',
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
        {
            name: 'titleAccess',
            type: 'string',
        },
        {
            name: 'viewBox',
            type: 'string',
        },
    ],
    docsLink: "https://mui.com/joy-ui/api/svg-icon/"
}

export default {
    component,
    ...config,
}