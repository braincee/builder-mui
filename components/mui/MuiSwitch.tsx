import { Switch } from '@mui/joy'
import { Blocks, ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {
    const { children, startDecorator, endDecorator, ...rest } = props

    return (
        <Switch
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
        </Switch>
    )
}

const config: ComponentInfo = {
    name: 'Switch',
    noWrap: true,
    canHaveChildren: true,
    inputs: [
        {
            name: 'checked',
            type: 'boolean',
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
            name: 'defaultChecked',
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
            name: 'variant',
            type: 'text',
            enum: ['solid', 'soft', 'outlined', 'plain'],
        },
    ],
}

export default {
    component,
    ...config,
}

