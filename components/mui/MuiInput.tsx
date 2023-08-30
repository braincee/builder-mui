import { Input } from '@mui/joy'
import { Blocks, ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'
// import type { PropsWithBuilderData } from '@builder.io/sdk-react/dist/types/builder-props'
// https://github.com/davedbase/builderio-type-extensions

function component(props: any): JSX.Element {
    const { children, endDecorator, startDecorator, ...rest } = props

    return (
        <Input
            {...rest}
            startDecorator={<Blocks blocks={startDecorator} />}
            endDecorator={<Blocks blocks={endDecorator} />}
        >
            {children}
        </Input>
    )
}

const config: ComponentInfo = {
    name: 'Input',
    canHaveChildren: false,
    noWrap: true,
    inputs: [
        {
            name: 'color',
            type: 'text',
            enum: ['primary', 'neutral', 'danger', 'success', 'warning', 'info'],
            defaultValue: 'neutral',
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
            name: 'fullWidth',
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
            name: 'placeholder',
            type: 'string',
        },
        {
            name: 'defaultValue',
            type: 'string',
        },
        {
            name: 'value',
            type: 'number',
        },
    ],
}

export default {
    component,
    ...config,
}
