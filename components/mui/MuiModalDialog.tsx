import { ModalDialog } from '@mui/joy'
import { ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {

    return <ModalDialog {...props}/>
}

const config: ComponentInfo = {
    name: 'ModalDialog',
    noWrap: true,
    canHaveChildren: true,
    inputs: [
        {
            name: 'color',
            type: 'text',
            enum: ['primary', 'neutral', 'danger', 'success', 'warning', 'info'],
            defaultValue: 'neutral',
        },
        {
            name: 'component',
            type: 'string',
        },
		{
			name: 'layout',
			type: 'string',
			enum: ['center', 'fullscreen'],
			defaultValue: 'center'
		},
        {
            name: 'size',
            type: 'text',
            enum: ['sm', 'md', 'lg'],
			defaultValue: 'md',
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
            component: { name: 'Modal' },
        },
    ],
    docsLink: "https://mui.com/joy-ui/api/modal-dialog/"
}

export default {
    component,
    ...config,
}