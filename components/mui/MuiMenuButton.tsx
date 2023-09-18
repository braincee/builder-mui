import { MenuButton } from '@mui/joy'
import { Blocks, ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {
    const { children, startDecorator, endDecorator, ...rest } = props

    return (
        <MenuButton
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
        </MenuButton>
    )
}

const config: ComponentInfo = {
    name: 'MenuButton',
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
            name: 'fullWidth',
            type: 'boolean',
			defaultValue: 'false',
        },
        {
            name: 'loading',
            type: 'boolean',
			defaultValue: 'false',
        },
        {
            name: 'loadingPosition',
            type: 'text',
            enum: ['center', 'start', 'end'],
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
            name: 'variant',
            type: 'text',
            enum: ['solid', 'soft', 'outlined', 'plain'],
        },
    ],
    defaultChildren: [
        {
            '@type': '@builder.io/sdk:Element',
            component: { name: 'MenuButton', options: { text: 'Menu Button' } },
        },
    ],
}

export default {
    component,
    ...config,
}