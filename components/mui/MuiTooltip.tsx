import { Tooltip } from '@mui/joy'
import { ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {

    return <Tooltip {...props}/>
}

const config: ComponentInfo = {
    name: 'Tooltip',
    noWrap: true,
    canHaveChildren: true,
    inputs: [
        {
            name: 'arrow',
            type: 'boolean',
            defaultValue: 'false',
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
            name: 'describeChild',
            type: 'boolean',
            defaultValue: 'false',
        },
        {
            name: 'direction',
            type: 'text',
            defaultValue: 'ltr',
            enum: ['ltr', 'rtl'],
        },
        {
            name: 'disableFocusListener',
            type: 'boolean',
            defaultValue: 'false',
        },
        {
            name: 'disableHoverListener',
            type: 'boolean',
            defaultValue: 'false',
        },
        {
            name: 'disableInteractive',
            type: 'boolean',
            defaultValue: 'false',
        },
        {
            name: 'disablePortal',
            type: 'boolean',
            defaultValue: 'false',
        },
        {
            name: 'disableTouchListener',
            type: 'boolean',
            defaultValue: 'false',
        },
        {
            name: 'enterDelay',
            type: 'number',
        },
        {
            name: 'enterNextDelay',
            type: 'number',
        },
        {
            name: 'enterTouchDelay',
            type: 'number',
        },
        {
            name: 'followCursor',
            type: 'boolean',
            defaultValue: 'false',
        },
        {
            name: 'id',
            type: 'string',
        },
        {
            name: 'keepMounted',
            type: 'boolean',
            defaultValue: 'false',
        },
        {
            name: 'leaveDelay',
            type: 'number',
        },
        {
            name: 'leaveTouchDelay',
            type: 'number',
        },
        {
            name: 'open',
            type: 'boolean',
        },
        {
            name: 'placement',
            type: 'text',
            defaultValue: 'bottom',
            enum: [
                'bottom-end',
                'bottom-start',
                'bottom',
                'left-end',
                'left-start',
                'left',
                'right-end',
                'right-start',
                'right',
                'top-end',
                'top-start',
                'top',
            ],
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
            component: { name: 'Button', options: { text: 'Button 1' } },
        },
    ],
}

export default {
    component,
    ...config,
}