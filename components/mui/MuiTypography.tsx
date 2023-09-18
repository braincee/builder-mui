import { Blocks } from '@builder.io/sdk-react'
import { Typography } from '@mui/joy'
import type { JSX } from 'react'

function component(props: any): JSX.Element {
    const { children, startDecorator, endDecorator, ...rest } = props

    return (
        <Typography
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
        </Typography>
    )
}

const config: any = {
    name: 'Typography',
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
            name: 'gutterBottom',
            type: 'boolean',
            defaultValue: 'false',
        },

        {
            name: 'level',
            type: 'text',
            defaultValue: 'inherit',
            enum: [
                'h1',
                'h2',
                'h3',
                'h4',
                'title-lg',
                'title-md',
                'title-sm',
                'body-lg',
                'body-md',
                'body-sm',
                'body-xs',
                'inherit',
            ],
        },
        {
            name: 'noWrap',
            type: 'boolean',
            defaultValue: 'false',
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
            name: 'textColor',
            type: 'string',
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
