import { Autocomplete } from '@mui/joy'
import { Blocks, ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {
    const { children,startDecorator, endDecorator, ...rest } = props

    return (
        <Autocomplete
            {...rest}
            startDecorator={
                <Blocks
                    blocks={startDecorator}
                    parent={props.builderBlock && props.builderBlock.id}
                    path={'component.options.startDecorator'}
                />
            }
            endDecorator={
                <Blocks
                    blocks={endDecorator}
                    parent={props.builderBlock && props.builderBlock.id}
                    path={'component.options.endDecorator'}
                />
            }
        >
            {children}
        </Autocomplete>
    )
}

const config: ComponentInfo = {
    name: 'Autocomplete',
    noWrap: true,
    canHaveChildren: true,
    inputs: [
        {
            name: 'aria-describedby',
            type: 'string',
        },
        {
            name: 'aria-label',
            type: 'string',
        },
        {
            name: 'aria-labelledby',
            type: 'string',
        },
        {
            name: 'autoFocus',
            type: 'boolean',
        },
        {
            name: 'clearText',
            type: 'string',
        },
        {
            name: 'closeText',
            type: 'string',
        },
        {
            name: 'color',
            type: 'text',
            enum: ['danger', 'info', 'neutral', 'primary', 'success', 'warning'],
        },
        {
            name: 'disableClearable',
            type: 'boolean',
        },
        {
            name: 'disabled',
            type: 'boolean',
        },
        {
            name: 'endDecorator',
            type: 'blocks',
            hideFromUI: true,
            helperText: 'This is an editable region.',
            defaultValue: [
                {
                    '@type': '@builder.io/sdk:Element',
                    component: {
                        name: 'Icon',
                        options: {
                            name: 'Edit',
                        },
                    },
                    responsiveStyles: {
                        large: {
                            // Styles for the editable section
                        },
                    },
                },
            ],
        },
		{
			name: 'error',
			type: 'boolean',
		},
		{
			name: 'forcePopupIcon',
			type: 'string',
		},
		{
			name: 'freeSolo',
			type: 'boolean',
		},
		{
			name: 'id',
			type: 'string',
		},
		{
			name: 'inputValue',
			type: 'string',
		},
		{
			name: 'limitTags',
			type: 'number',
			defaultValue: -1,
		},
		{
			name: 'loading',
			type: 'boolean',
		},
		{
			name: 'multiple',
			type: 'boolean',
		},
		{
			name: 'name',
			type: 'string',
		},
		{
			name: 'open',
			type: 'boolean',
		},
		{
			name: 'openText',
			type: 'string',
		},
		{
			name: 'placeholder',
			type: 'string',
		},
		{
			name: 'readOnly',
			type: 'boolean',
		},
		{
			name: 'required',
			type: 'boolean',
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
            name: 'startDecorator',
            type: 'blocks',
            hideFromUI: true,
            helperText: 'This is an editable region.',
            defaultValue: [
                {
                    '@type': '@builder.io/sdk:Element',
                    component: {
                        name: 'Icon',
                        options: {
                            name: 'Edit',
                        },
                    },
                    responsiveStyles: {
                        large: {
                            // Styles for the editable section
                        },
                    },
                },
            ],
        },
		{
			name: 'type',
			type: 'string',
		},
		{
			name: 'value',
			type: 'string',
		},
		{
            name: 'variant',
            type: 'text',
            enum: ['outlined', 'plain', 'soft', 'solid'],
        },
    ],
    defaultChildren: [
        {
            '@type': '@builder.io/sdk:Element',
            component: { name: 'Option', options: { text: 'Text 1' } },
        },
    ],
    docsLink: "https://mui.com/joy-ui/react-autocomplete/"
}

export default {
    component,
    ...config,
}


